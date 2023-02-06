import { WeatherMapController } from '../../controller/WeatherMapController';
import { apiKeyMapForecast, getGeolocation } from '../../utils';
import { BaseComponent } from '../BaseComponent';
import MapControls from './mapControls';
import './weatherMap.css'

interface WeatherMapProps {
    controller: WeatherMapController;
}

class WeatherMapComponent extends BaseComponent<WeatherMapProps> {
    private windyDiv!: HTMLDivElement;
    private mapControls!: MapControls;

    constructor(controller: WeatherMapController) {
        super('weather-map', { controller }, 'div');
    }

    protected render() {
        this.windyDiv = document.createElement('div');
        this.windyDiv.id = 'windy';

        this.mapControls = new MapControls();
        this.element.append(this.windyDiv, this.mapControls.getElement());

        this.drawWeatherMap(this.mapControls);
    }
    
    private async drawWeatherMap(mapControls: MapControls) {
        const [latitude, longitude] = await getGeolocation();
       
        const options = {
            key: apiKeyMapForecast,
        
            verbose: true,
        
            lat: latitude,
            lon: longitude,
            zoom: 5,
        };
        // @ts-ignore
        windyInit(options, (windyAPI) => {
            const { store, overlays } = windyAPI;
            
            mapControls.addListner(store);
        });
    }
}

export default WeatherMapComponent;
