import { WeatherTodayPageComponent } from '../view/pages/weather-today-page/WeatherTodayPageComponent';
import { BaseController } from './BaseController';
import { Router } from '../view/Router';
import { ObserverToView } from '../model/ObserverToView';
import { TranslatorModel } from '../model/TranslatorModel';

export class WeatherTodayPageController extends BaseController<WeatherTodayPageComponent> {
    public component: WeatherTodayPageComponent;
    private language: TranslatorModel;

    constructor(router: Router, observerToView: ObserverToView, language: TranslatorModel) {
        super();
        this.language = language;
        this.component = new WeatherTodayPageComponent(this, router, observerToView, language);
    }

    public show() {
        this.component.show();
    }
}
