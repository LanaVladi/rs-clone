import { Map } from 'leaflet';
import { apiKeyMapForecast, lang, langObj } from '../../../constants';
import { WeatherMapPageController } from '../../../controller/WeatherMapPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { IBroadcast, ICoordinates, IPicker, IWindyAPI, NotifyParameters } from '../../../types';
import { getGeolocation, latLonToDMS } from '../../../utils';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import MapColorLegend from './mapColorLegend';
import MapControls from './mapControls';
import './weatherMap.css';

interface WeatherMapPageComponentProps {
    controller: WeatherMapPageController;
    router: Router;
    observerToView: ObserverToView;
}

export class WeatherMapPageComponent extends BaseComponent<WeatherMapPageComponentProps> {
    private title!: HTMLHeadingElement;
    private windyDiv!: HTMLDivElement;
    private observerToView: ObserverToView;
    private isOpen = false;

    constructor(controller: WeatherMapPageController, router: Router, observerToView: ObserverToView) {
        super('weather-map', { controller, router, observerToView }, 'div');
        this.observerToView = observerToView;
        this.observerToView.subscribe(<T>(params: NotifyParameters<T>) => this.setWeatherIndicatorsMap(params));
    }

    setWeatherIndicatorsMap<T>(params: NotifyParameters<T>) {
        // const weatherData = <weatherMapData>params.message;
        // console.log('weatherData :', weatherData);
        // this.title.innerText = `Прогноз на 5 дней: ${weatherData.city.name}`;
        this.title.innerText = `${langObj[lang].map}:`;
    }

    protected render(): void {
        this.windyDiv = document.createElement('div');
        this.windyDiv.id = 'windy';

        this.element.append(this.windyDiv);

        this.drawWeatherMap(this.windyDiv);
    }

    private async drawWeatherMap(windyDiv: HTMLDivElement) {
        const [startLat, startLon] = await getGeolocation();
        const options = {
            key: apiKeyMapForecast,
            verbose: true,
            lat: startLat,
            lon: startLon,
            zoom: 5,
        };

        windyInit(options, (windyAPI: IWindyAPI) => {
            const { broadcast, picker, store, map } = windyAPI;
            store.set('lang', lang);

            const mapControls = new MapControls(windyAPI);
            this.element.append(...mapControls.getElements());

            const mapColorLegend = new MapColorLegend();
            mapColorLegend.createLegend(store);

            this.addListenersToMap(windyDiv, broadcast, picker, map);
        });
    }
    
    private addListenersToMap(windyDiv: HTMLDivElement, broadcast: IBroadcast, picker: IPicker, map: Map) {
        const openPickerCallback = (event: MouseEvent) => {
            this.openPicker(event, picker, map)
        }

        picker.on('pickerClosed', () => this.isOpen = false);
        broadcast.on('redrawFinished', () => {
            windyDiv.addEventListener('click', openPickerCallback);
        })

        windyDiv.addEventListener('click', openPickerCallback);

        windyDiv.addEventListener('mousemove', (event) => {
            if (event.target !== document.getElementById('map-container')) {
                document.getElementById('weather-data-value-display')?.remove();
                return;
            }

            if (event.buttons == 1) {
                windyDiv.removeEventListener('click', openPickerCallback);
            }

            if (document.getElementById('weather-data-value-display')) {
                document.getElementById('weather-data-value-display')?.remove();
            }

            const { lat, lng: lon } = map.mouseEventToLatLng(event);
            const coord = latLonToDMS(lat, lon);
            this.displayPosition(coord, event);
        });

        windyDiv.addEventListener('mouseout', () => {
            if (document.getElementById('weather-data-value-display')) {
                document.getElementById('weather-data-value-display')?.remove();
            }
        });
    }

    private displayPosition(coord: ICoordinates, event: MouseEvent): void {
        const valueDisplay = document.createElement('div');
        valueDisplay.id = 'weather-data-value-display';
        valueDisplay.innerHTML = `${coord.lat.degrees}°${coord.lat.minutes}'${coord.lat.seconds}", ${coord.lon.degrees}°${coord.lon.minutes}'${coord.lon.seconds}"`;
        document.body.appendChild(valueDisplay);
        valueDisplay.style.left = `${event.clientX + 10}px`;
        valueDisplay.style.top = `${event.clientY + 10}px`;
    }

    private openPicker (event: MouseEvent, picker: IPicker, map: Map) {
        if (event.target !== document.getElementById('map-container')) return;

        if (!this.isOpen) {
            const { lat, lng: lon } = map.mouseEventToLatLng(event);
            picker.open({ lat, lon });
            this.isOpen = true
        } else {
            picker.close();
            this.isOpen = false;
        }
    }
}
