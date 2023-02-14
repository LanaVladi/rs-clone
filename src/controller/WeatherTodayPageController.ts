import { WeatherTodayPageComponent } from '../view/pages/weather-today-page/WeatherTodayPageComponent';
import { BaseController } from './BaseController';
import { Router } from '../view/Router';
import { ObserverToView } from '../model/ObserverToView';

export class WeatherTodayPageController extends BaseController<WeatherTodayPageComponent> {
    public component: WeatherTodayPageComponent;

    constructor(router: Router, observerToView: ObserverToView) {
        super();
        this.component = new WeatherTodayPageComponent(this, router, observerToView);
    }
}
