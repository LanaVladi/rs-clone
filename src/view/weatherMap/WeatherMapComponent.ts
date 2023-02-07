import { Map } from 'leaflet';
import { WeatherMapController } from '../../controller/WeatherMapController';
import { apiKeyMapForecast, getGeolocation, latLonToDMS } from '../../utils';
import { BaseComponent } from '../BaseComponent';
import { Router } from '../Router';
import MapControls from './mapControls';
import './weatherMap.css'

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
            const { picker, utils, broadcast, store, overlays } = windyAPI;
            const map: Map = windyAPI.map;

            windyDiv.addEventListener('pointerup', (event) => {
                const { lat, lng: lon } = map.mouseEventToLatLng(event);
                picker.open({ lat, lon });
            });

            windyDiv.addEventListener('mousemove', (event) => {
                const { lat, lng: lon } = map.mouseEventToLatLng(event);
                const coord = latLonToDMS(lat, lon);

                if (document.getElementById('weather-data-value-display')) {
                    document.getElementById('weather-data-value-display')?.remove();
                }

                const valueDisplay = document.createElement('div');
                valueDisplay.id = 'weather-data-value-display'
                valueDisplay.innerHTML = `${coord.lat.degrees}°${coord.lat.minutes}'${coord.lat.seconds}", ${coord.lon.degrees}°${coord.lon.minutes}'${coord.lon.seconds}"`;
                document.body.appendChild(valueDisplay);
                valueDisplay.style.left = `${event.clientX + 10}px`;
                valueDisplay.style.top = `${event.clientY + 10}px`;
            });

            mapControls.addListner(store);
        });
    }
}

export default WeatherMapComponent;
