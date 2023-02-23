import { WeatherFiveDaysPageController } from '../../../controller/WeatherFiveDaysPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { TranslatorModel } from '../../../model/TranslatorModel';
import INotify, {
    ModelEvent,
    NotifyParameters,
    pagesLang,
    weatherFiveDaysData,
    weatherIndicatorsFiveDays,
    weatherOneDayData,
} from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import './WeatherFiveDaysPageComponent.css';
import { WeatherOneDayComponent } from './WeatherOneDayComponent';
interface WeatherFiveDaysPageComponentProps {
    controller: WeatherFiveDaysPageController;
    router: Router;
    observerToView: ObserverToView;
    language: TranslatorModel;
}

export class WeatherFiveDaysPageComponent extends BaseComponent<WeatherFiveDaysPageComponentProps> implements INotify {
    // private title!: HTMLHeadingElement;
    private observerToView: ObserverToView;
    private language: TranslatorModel;
    private pageName!: HTMLHeadingElement;
    private dailyForecastTimestamp!: HTMLSpanElement;
    private locationTitle!: HTMLSpanElement;
    private dailyForecastTime!: HTMLSpanElement;
    private dailyForecastDisclosureList!: HTMLDivElement;
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
        this.observerToView.subscribe(ModelEvent.language, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.language: {
                const langObject = <pagesLang>params.message;
                this.pageName.textContent = langObject.forecastFiveDay;
                this.dailyForecastTimestamp.textContent = langObject.asOf;
                break;
            }
            case ModelEvent.five_days_weather_indicators: {
                const { list, timezone, cityName, countryCode, dataCalcTime } = <weatherIndicatorsFiveDays>(
                    params.message
                );
                this.locationTitle.textContent = `${cityName}`;
                this.dailyForecastTime.textContent = `${dataCalcTime}`;

                let filteredArrayDay = list.filter(function (el, index) {
                    let day = new Date(el.dt_txt);
                    if (day.getHours() === 12) {
                        return el;
                    }
                });
                let filtredArrayNight = list.filter(function (el, index) {
                    let day = new Date(el.dt_txt);
                    if (day.getHours() === 0) {
                        return el;
                    }
                });

                let newRes = filteredArrayDay.map((el, index) => {
                    el.night = filtredArrayNight[index];
                    return el;
                });
                console.log(newRes)
                newRes.forEach((el: weatherOneDayData) => {
                    const day = new WeatherOneDayComponent(this.observerToView, this.language, el);
                    this.dailyForecastDisclosureList.append(day.element);
                });
            }
        }
    }

    protected render(): void {
        const daysConatainer = document.createElement('div');
        daysConatainer.className = 'five-days-container';
        const locationPageTitle = document.createElement('div');
        locationPageTitle.className = 'location-page-title';

        this.pageName = document.createElement('h1');
        this.pageName.textContent = this.props.language.getTranslateRu().forecastFiveDay;
        this.pageName.className = 'page-name';

        this.locationTitle = document.createElement('span');
        this.locationTitle.className = 'location-title';

        const dailyForecastTimestampBox = document.createElement('div');
        this.dailyForecastTimestamp = document.createElement('span');
        this.dailyForecastTimestamp.className = 'daily-forecast-timestamp';
        this.dailyForecastTimestamp.textContent = this.props.language.getTranslateRu().asOf;

        this.dailyForecastTime = document.createElement('span');

        this.dailyForecastTimestamp.append(this.dailyForecastTime);
        this.dailyForecastDisclosureList = document.createElement('div');
        this.dailyForecastDisclosureList.className = 'daily-forecast-disclosure-list';
        dailyForecastTimestampBox.append(this.dailyForecastTimestamp, this.dailyForecastTime);

        locationPageTitle.append(this.pageName, this.locationTitle);

        daysConatainer.append(locationPageTitle, dailyForecastTimestampBox, this.dailyForecastDisclosureList);
        this.element.append(daysConatainer);
    }
}
