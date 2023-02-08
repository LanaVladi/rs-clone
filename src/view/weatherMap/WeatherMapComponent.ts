import { Map } from 'leaflet';
import { WeatherMapController } from '../../controller/WeatherMapController';
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
    private mapColorLegend!: MapColorLegend;

    constructor(controller: WeatherMapController, router: Router) {
        super('weather-map', { controller, router }, 'div');
    }

    protected render() {
        this.windyDiv = document.createElement('div');
        this.windyDiv.id = 'windy';

        this.mapControls = new MapControls();
        this.mapColorLegend = new MapColorLegend();
        this.element.append(this.windyDiv, this.mapControls.getElement());

        this.drawWeatherMap(this.windyDiv, this.mapControls, this.mapColorLegend);
    }

    private async drawWeatherMap(windyDiv: HTMLDivElement, mapControls: MapControls, mapColorLegend: MapColorLegend) {
        // @ts-ignore
        windyInit(options, (windyAPI) => {
            const { picker, utils, broadcast, store, overlays } = windyAPI;
            const map: Map = windyAPI.map;

            this.addListenersToMap(windyDiv, mapControls, picker, store, map);
            mapColorLegend.createCalendar(store);
        });
    }

    private addListenersToMap(windyDiv: HTMLDivElement, mapControls: MapControls, picker: any, store: any, map: Map) {
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
