import { Map } from 'leaflet';
import { apiKeyMapForecast, lang, langObj } from '../../../constants';
import { WeatherMapPageController } from '../../../controller/WeatherMapPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { ICoordinates, IPicker, IWindyAPI, NotifyParameters } from '../../../types';
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
            const { picker, store, map } = windyAPI;
            store.set('lang', lang);

            const mapControls = new MapControls(windyAPI);
            this.element.append(...mapControls.getElements());

            const mapColorLegend = new MapColorLegend();
            mapColorLegend.createLegend(store);

            this.addListenersToMap(windyDiv, picker, map);
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

    private addListenersToMap(windyDiv: HTMLDivElement, picker: IPicker, map: Map) {
        windyDiv.addEventListener('pointerup', (event) => {
            if (event.target !== document.getElementById('map-container')) {
                return;
            }
            const { lat, lng: lon } = map.mouseEventToLatLng(event);
            picker.open({ lat, lon });
        });

        windyDiv.addEventListener('mousemove', (event) => {
            if (event.target !== document.getElementById('map-container')) {
                document.getElementById('weather-data-value-display')?.remove();
                return;
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
}