import { ObserverToView } from '../model/ObserverToView';
import { TranslatorModel } from '../model/TranslatorModel';
import { WeatherMapPageComponent } from '../view/pages/weather-map-page/WeatherMapPageComponent';
import { Router } from '../view/Router';
import { BaseController } from './BaseController';

export class WeatherMapPageController extends BaseController<WeatherMapPageComponent> {
    public component: WeatherMapPageComponent;
    private language: TranslatorModel;

    constructor(router: Router, observerToView: ObserverToView, language: TranslatorModel) {
        super();
        this.language = language;
        this.component = new WeatherMapPageComponent(this, router, observerToView, language);
    }
}
