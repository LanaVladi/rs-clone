import { WeatherFiveDaysPageController } from '../../../controller/WeatherFiveDaysPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { TranslatorModel } from '../../../model/TranslatorModel';
import INotify, { ModelEvent, NotifyParameters, pagesLang } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';

interface WeatherFiveDaysPageComponentProps {
    controller: WeatherFiveDaysPageController;
    router: Router;
    observerToView: ObserverToView;
    language: TranslatorModel;
}

export class WeatherFiveDaysPageComponent extends BaseComponent<WeatherFiveDaysPageComponentProps> implements INotify {
    private title!: HTMLHeadingElement;
    private observerToView: ObserverToView;
    private language: TranslatorModel;

    constructor(
        controller: WeatherFiveDaysPageController,
        router: Router,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super('five-days-weather', { controller, router, observerToView, language }, 'div');
        this.observerToView = observerToView;
        this.language = language;
        this.observerToView.subscribe(ModelEvent.five_days_weather_indicators, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.language: {
                const langObject = <pagesLang>params.message;

                break;
            }
            case ModelEvent.five_days_weather_indicators: {
                // const {
                //     temp,
                //     tempMin,
                //     tempMax,
                //     feelsLike,
                //     humidity,
                //     pressure,
                //     visibility,
                //     windSpeed,
                //     clouds,
                //     sunrise,
                //     sunset,
                //     icon,
                //     description,
                //     id,
                //     mainWeather,
                //     timezone,
                //     cityName,
                //     countryCode,
                //     dataCalcTime,
                //     country,
                // } = <weatherIndicators>params.message;
                // this.title.innerText = `Прогноз на 5 дней: ${cityName}`;
            }
        }
    }

    protected render(): void {
        this.title = document.createElement('h2');
        this.title.className = 'component__title';
        this.title.innerText = `Прогноз на 5 дней: `;

        this.element.append(this.title);
    }
}
