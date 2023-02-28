import { BaseController } from './BaseController';
import { Router } from '../view/Router';
import { ObserverToView } from '../model/ObserverToView';
import { WeatherFiveDaysPageComponent } from '../view/pages/5-days-weather-page/WeatherFiveDaysPageComponent';
import { TranslatorModel } from '../model/TranslatorModel';
import { ObserverToModel } from '../model/ObserverToModel';

export class WeatherFiveDaysPageController extends BaseController<WeatherFiveDaysPageComponent> {
    public component: WeatherFiveDaysPageComponent;
    private language: TranslatorModel;

    constructor(router: Router,observerToModel: ObserverToModel, observerToView: ObserverToView, language: TranslatorModel) {
        super();
        this.language = language;
        this.component = new WeatherFiveDaysPageComponent(this, router, observerToView, language);
    }
}
