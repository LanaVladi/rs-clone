import getGeolocation from '../geolocation/geolocation';
import MapControls from './mapControls';
import './weatherMap.css'

class WeatherMap {
    private element: HTMLDivElement = document.createElement('div');
    private windyDiv: HTMLDivElement = document.createElement('div');
    private mapControls: MapControls;

    constructor() {
        this.mapControls = new MapControls();
        this.render();
        this.drawWeatherMap();
    }

    private render() {
        this.element.className = 'weatherMap-container'; 
        this.windyDiv.id = 'windy';
        this.element.append(this.windyDiv);
        this.element.append(this.mapControls.getElement());
    }

    async drawWeatherMap() {
        const [latitude, longitude] = await getGeolocation();
       
        const options = {
            key: 'xXzWFyvlQ5v6hx3VoAyja2ss9hpFgVRi',
        
            verbose: true,
        
            lat: latitude,
            lon: longitude,
            zoom: 5,
        };
        // @ts-ignore
        windyInit(options, (windyAPI) => {
            const { store, overlays } = windyAPI;

            this.mapControls.addListner(store);
        });
    }

    getElement() {
        return this.element;
    }
}

export default WeatherMap;
