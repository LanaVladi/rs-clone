import WeatherMap from "./weatherMap/weatherMap";

class App {
    constructor() {
        const weatherMap = new WeatherMap();
        document.body.append(weatherMap.getComponent());
    }
}
export default App;