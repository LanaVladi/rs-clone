import { Map } from 'leaflet';
import { apiKeyMapForecast, lang } from '../../../constants';
import { WeatherMapPageController } from '../../../controller/WeatherMapPageController';
// import { GeolocationModel } from '../../../model/GeolocationModel';
import { ObserverToView } from '../../../model/ObserverToView';
import { TranslatorModel } from '../../../model/TranslatorModel';
import INotify, { IBroadcast, ICoordinates, IPicker, IWindyAPI, ModelEvent, NotifyParameters } from '../../../types';
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
    language: TranslatorModel;
    // private geolocation: GeolocationModel;
}

export class WeatherMapPageComponent extends BaseComponent<WeatherMapPageComponentProps> implements INotify {
    private title!: HTMLHeadingElement;
    private windyDiv!: HTMLDivElement;
    private observerToView: ObserverToView;
    private language: TranslatorModel;
    // private geolocation: GeolocationModel;
    private isOpen = false;
    private _map!: Map;

    constructor(
        controller: WeatherMapPageController,
        router: Router,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super('weather-map', { controller, router, observerToView, language }, 'div');
        // this.geolocation  = geolocation;
        this.observerToView = observerToView;
        this.language = language;
        this.observerToView.subscribe(ModelEvent.weather_map, this);

        const mutationObserver = new MutationObserver(this.refresh.bind(this));
        mutationObserver.observe(this.element, { attributes: true });
    }

    notify<T>(params: NotifyParameters<T>): void {
        const weatherData = <IWindyAPI>params.message;
        // console.log('weatherData IWindyAPI:', weatherData);
    }

    private refresh(): void {
        if (this._map) {
            this.windyDiv.style.width = '99.9%';
            this.windyDiv.style.width = '100%';
            this._map.invalidateSize();
        }
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
            // verbose: true,
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

            this._map = map;
        });
    }

    private addListenersToMap(windyDiv: HTMLDivElement, broadcast: IBroadcast, picker: IPicker, map: Map) {
        const openPickerCallback = (event: MouseEvent) => {
            this.openPicker(event, picker, map);
        };

        picker.on('pickerClosed', () => (this.isOpen = false));
        broadcast.on('redrawFinished', () => {
            windyDiv.addEventListener('click', openPickerCallback);
        });

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

    private openPicker(event: MouseEvent, picker: IPicker, map: Map) {
        if (event.target !== document.getElementById('map-container')) return;

        if (!this.isOpen) {
            const { lat, lng: lon } = map.mouseEventToLatLng(event);
            picker.open({ lat, lon });
            this.isOpen = true;
        } else {
            picker.close();
            this.isOpen = false;
        }
    }
}
