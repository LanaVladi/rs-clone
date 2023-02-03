import MapControls from './mapControls';
import './weatherMap.css'

class WeatherMap {
    private component: HTMLDivElement = document.createElement('div');
    private windyDiv: HTMLDivElement = document.createElement('div');
    private mapControls: MapControls;

    constructor() {
        this.mapControls = new MapControls();
        this.createComponent();
        this.renderMap();
    }

    createComponent() {
        this.component.className = 'weatherMap-container'; 
        this.windyDiv.id = 'windy';
        this.component.append(this.windyDiv);
        this.component.append(this.mapControls.getComponent());
    }

    renderMap() {
        const options = {
            key: 'xXzWFyvlQ5v6hx3VoAyja2ss9hpFgVRi',
        
            verbose: true,
        
            lat: 50.4,
            lon: 14.3,
            zoom: 5,
        };
        // @ts-ignore
        windyInit(options, (windyAPI) => {
            const { store, overlays } = windyAPI;
        });
    }

    getComponent() {
        return this.component;
    }
}

export default WeatherMap;
