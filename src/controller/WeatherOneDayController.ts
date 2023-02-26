// import { BaseController } from './BaseController';
// import { ObserverToModel } from '../model/ObserverToModel';
// import { TranslatorModel } from '../model/TranslatorModel';
// import { ObserverToView } from '../model/ObserverToView';
// import { WeatherOneDayComponent } from '../view/pages/5-days-weather-page/WeatherOneDayComponent';
// import { weatherOneDayData } from '../types';

// export class WeatherOneDayController {
//     public component: WeatherOneDayComponent;
//     private observerToView: ObserverToView;
//     private language: TranslatorModel;
//     day!: weatherOneDayData;
//     constructor(observerToView: ObserverToView, language: TranslatorModel, day: weatherOneDayData) {
//         this.language = language;
//         this.observerToView = observerToView;
//         this.component = new WeatherOneDayComponent(observerToView, language, day);
//     }
// }


import { TranslatorModel } from '../model/TranslatorModel';
import { ObserverToView } from '../model/ObserverToView';
import { WeatherOneDayComponent } from '../view/pages/5-days-weather-page/WeatherOneDayComponent';
import { weatherOneDayData } from '../types';

export class WeatherOneDayController {
    public component: WeatherOneDayComponent;
    private observerToView: ObserverToView;
    private language: TranslatorModel;
    day!: weatherOneDayData;
    constructor(observerToView: ObserverToView, language: TranslatorModel, day: weatherOneDayData) {
        this.language = language;
        this.observerToView = observerToView;
        this.component = new WeatherOneDayComponent(observerToView, language, day);
    }
}
