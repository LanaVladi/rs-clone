import { BaseController } from './BaseController';
import { Router } from '../view/Router';
import { ObserverToView } from '../model/ObserverToView';
import { WeatherFiveDaysPageComponent } from '../view/pages/5-days-weather-page/WeatherFiveDaysPageComponent';
import { TranslatorModel } from '../model/TranslatorModel';
import { WeatherOneDayController } from './WeatherOneDayController';
import { ObserverToModel } from '../model/ObserverToModel';

export class WeatherFiveDaysPageController extends BaseController<WeatherFiveDaysPageComponent> {
    public component: WeatherFiveDaysPageComponent;
    private language: TranslatorModel;

    // public weatherOneDayController: WeatherOneDayController;
    constructor(
        router: Router,
        observerToModel: ObserverToModel,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super();
        this.language = language;
        // this.weatherOneDayController = new WeatherOneDayController( observerToView, language);
        this.component = new WeatherFiveDaysPageComponent(this, router, observerToView, language);
    }
}
