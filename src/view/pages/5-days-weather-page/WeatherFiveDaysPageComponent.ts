import { WeatherFiveDaysPageController } from '../../../controller/WeatherFiveDaysPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { TranslatorModel } from '../../../model/TranslatorModel';
import INotify, {
    ModelEvent,
    NotifyParameters,
    pagesLang,
    weatherIndicatorsFiveDays,
    weatherOneDayData,
} from '../../../types';
import { convertUnixToDate } from '../../../utils';
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
    private arrayOneDayComponent = new Array<WeatherOneDayComponent>();
    private storageKeyLang = 'lang';
    private startLang!: pagesLang;

    constructor(
        controller: WeatherFiveDaysPageController,
        router: Router,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super('five-days-weather', { controller, router, observerToView, language }, 'div');
        this.observerToView = observerToView;
        this.language = language;
        this.startLang = this.checkLocalStorageLanguage();
        this.notify({ message: this.startLang, typeEvents: ModelEvent.language });
        this.observerToView.subscribe(ModelEvent.five_days_weather_indicators, this);
        this.observerToView.subscribe(ModelEvent.language, this);
    }


    protected checkLocalStorageLanguage() {
        if (!JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`)) {
            const startLangInit = 'ru';
            localStorage.setItem(this.storageKeyLang, JSON.stringify(startLangInit));
            return this.language.getTranslateRu();
        } else {
            const startLangInit = JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`);
            if (startLangInit === 'en') {
                return this.language.getTranslateEn();
            } else {
                return this.language.getTranslateRu();
            }
        }
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
                const { list, timezone, cityName, dataCalcTime } = <weatherIndicatorsFiveDays>params.message;
               
               
                this.dailyForecastTime.textContent = `${convertUnixToDate(timezone, dataCalcTime)}, GMT ${timezone}:00`;
                
                
                const filteredArrayDay = list.filter(function (el) {
                    const day = new Date(el.dt_txt);
                    if (day.getHours() === 12) {
                        return el;
                    }
                });
                const filtredArrayNight = list.filter(function (el) {
                    const day = new Date(el.dt_txt);
                    if (day.getHours() === 0) {
                        return el;
                    }
                });

                const newRes = filteredArrayDay.map((el, index) => {
                    el.night = filtredArrayNight[index];
                    return el;
                });
                if (this.locationTitle.textContent === '') {
                    this.dailyForecastDisclosureList.innerHTML = '';

                    newRes.forEach((el: weatherOneDayData) => {
                        const day = new WeatherOneDayComponent(this.observerToView, this.language, el);
                        this.dailyForecastDisclosureList.append(day.element);
                        this.arrayOneDayComponent.push(day);
                    });
                } else {
                    this.arrayOneDayComponent.forEach((day, index) => {
                        day.update(newRes[index]);
                    });
                }
                
                this.locationTitle.textContent = `${cityName}`;

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
