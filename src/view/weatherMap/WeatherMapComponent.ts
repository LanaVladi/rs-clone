import { Map } from 'leaflet';
import { WeatherMapController } from '../../controller/WeatherMapController';
import { apiKeyMapForecast, displayPosition, getGeolocation, latLonToDMS } from '../../utils';
import { BaseComponent } from '../BaseComponent';
import { Router } from '../Router';
import MapControls from './mapControls';
import './weatherMap.css';

interface WeatherMapProps {
    controller: WeatherMapController;
    router: Router;
}

const [latitude, longitude] = await getGeolocation();

const options = {
    key: apiKeyMapForecast,

    verbose: true,

    lat: latitude,
    lon: longitude,
    zoom: 5,
};

class WeatherMapComponent extends BaseComponent<WeatherMapProps> {
    private windyDiv!: HTMLDivElement;
    private mapControls!: MapControls;

    constructor(controller: WeatherMapController, router: Router) {
        super('weather-map', { controller, router }, 'div');
    }

    protected render() {
        this.windyDiv = document.createElement('div');
        this.windyDiv.id = 'windy';

        this.mapControls = new MapControls();
        this.element.append(this.windyDiv, this.mapControls.getElement());

        this.drawWeatherMap(this.windyDiv, this.mapControls);
    }

    private async drawWeatherMap(windyDiv: HTMLDivElement, mapControls: MapControls) {
        // @ts-ignore
        windyInit(options, (windyAPI) => {
            this.addListenersToMap(windyDiv, mapControls, windyAPI);
        });
    }

    private addListenersToMap(windyDiv: HTMLDivElement, mapControls: MapControls, windyAPI: any) {
        const { picker, utils, broadcast, store, overlays } = windyAPI;
        const map: Map = windyAPI.map;

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

        mapControls.addListner(store);
    }
}

export default WeatherMapComponent;
