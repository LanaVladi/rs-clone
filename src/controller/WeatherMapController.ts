import WeatherMapComponent from "../view/weatherMap/WeatherMapComponent";
import { BaseController } from "./BaseController";

export class WeatherMapController extends BaseController<WeatherMapComponent> {
    public component: WeatherMapComponent;

    constructor() {
        super();
        this.component = new WeatherMapComponent(this);
    }
}
