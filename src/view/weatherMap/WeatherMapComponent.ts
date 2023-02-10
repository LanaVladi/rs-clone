import { Map } from 'leaflet';
import { WeatherMapController } from '../../controller/WeatherMapController';
import { IPicker, IWindyAPI } from '../../types';
import { apiKeyMapForecast, displayPosition, getGeolocation, latLonToDMS } from '../../utils';
import { BaseComponent } from '../BaseComponent';
import { Router } from '../Router';
import MapColorLegend from './mapColorLegend';
import MapControls from './mapControls';
import './weatherMap.css';

interface WeatherMapProps {
    controller: WeatherMapController;
    router: Router;
}
const lang = 'en';
const [startLat, startLon] = await getGeolocation();

const options = {
    key: apiKeyMapForecast,

    verbose: true,

    lat: startLat,
    lon: startLon,
    zoom: 5,
};

class WeatherMapComponent extends BaseComponent<WeatherMapProps> {
    private windyDiv!: HTMLDivElement;

    constructor(controller: WeatherMapController, router: Router) {
        super('weather-map', { controller, router }, 'div');
    }

    protected render() {
        this.windyDiv = document.createElement('div');
        this.windyDiv.id = 'windy';

        this.element.append(this.windyDiv);

        this.drawWeatherMap(this.windyDiv);
    }

    private async drawWeatherMap(windyDiv: HTMLDivElement) {
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
            displayPosition(coord, event);
        });

        windyDiv.addEventListener('mouseout', () => {
            if (document.getElementById('weather-data-value-display')) {
                document.getElementById('weather-data-value-display')?.remove();
            }
        });
    }
}

export default WeatherMapComponent;
