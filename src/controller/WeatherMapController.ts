import { Router } from "../view/Router";
import WeatherMapComponent from "../view/pages/weatherMap/WeatherMapComponent";
import { BaseController } from "./BaseController";

export class WeatherMapController extends BaseController<WeatherMapComponent> {
    public component: WeatherMapComponent;

    constructor(router: Router) {
        super();
        this.component = new WeatherMapComponent(this, router);
    }
}
