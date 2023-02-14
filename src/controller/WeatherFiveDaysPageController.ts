import { BaseController } from './BaseController';
import { Router } from '../view/Router';
import { ObserverToView } from '../model/ObserverToView';
import { WeatherFiveDaysPageComponent } from '../view/pages/5-days-weather-page/WeatherFiveDaysPageComponent';

export class WeatherFiveDaysPageController extends BaseController<WeatherFiveDaysPageComponent> {
    public component: WeatherFiveDaysPageComponent;

    constructor(router: Router, observerToView: ObserverToView) {
        super();
        this.component = new WeatherFiveDaysPageComponent(this, router, observerToView);
    }
}
