import { WeatherFiveDaysPageController } from '../../../controller/WeatherFiveDaysPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { TranslatorModel } from '../../../model/TranslatorModel';
import INotify, { ModelEvent, NotifyParameters, pagesLang } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import './WeatherFiveDaysPageComponent.css';
import { WeatherDayComponent } from './WeatherDayComponent';
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
        const daysConatainer = document.createElement('div');
        daysConatainer.className = 'five-days-container';

        const pageName = document.createElement('span');
        pageName.textContent = 'Прогноз на 5 дней  ';
        pageName.className = 'page-name';

        const locationPageTitle = document.createElement('h1');
        const locationTitle = document.createElement('span');
        locationTitle.className = 'location-title';
        locationTitle.textContent = 'Location';

        const dailyForecastTimestamp = document.createElement('div');
        dailyForecastTimestamp.className = 'daily-forecast-timestamp';
        dailyForecastTimestamp.textContent = 'По состоянию на ';

        const dailyForecastTime = document.createElement('span');
        dailyForecastTime.textContent='time'
        dailyForecastTimestamp.append(dailyForecastTime)
        const dailyForecastDisclosureList = document.createElement('div');
        dailyForecastDisclosureList.className = 'daily-forecast-disclosure-list';

        locationPageTitle.append(pageName, locationTitle);

        daysConatainer.append(locationPageTitle, dailyForecastTimestamp, dailyForecastDisclosureList);
        this.element.append(daysConatainer);
    }
}
