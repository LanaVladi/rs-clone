import { ObserverToView } from '../model/ObserverToView';
import { WeatherMapPageComponent } from '../view/pages/weather-map-page/WeatherMapPageComponent';
import { Router } from "../view/Router";
import { BaseController } from "./BaseController";

export class WeatherMapPageController extends BaseController<WeatherMapPageComponent> {
    public component: WeatherMapPageComponent;

    constructor(router: Router, observerToView: ObserverToView) {
        super();
        this.component = new WeatherMapPageComponent(this, router, observerToView);
    }
}