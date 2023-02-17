import { lang, langObj } from '../../../constants';
import { WeatherTodayPageController } from '../../../controller/WeatherTodayPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { TranslatorModel } from '../../../model/TranslatorModel';
import INotify, { ModelEvent, NotifyParameters, pagesLang, weatherIndicators } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import './weather-today-page.css';

interface WeatherTodayPageProps {
    controller: WeatherTodayPageController;
    router: Router;
    observerToView: ObserverToView;
    language: TranslatorModel;
}

export class WeatherTodayPageComponent extends BaseComponent<WeatherTodayPageProps> implements INotify {
    private currentConditionsTitleLocation!: HTMLHeadingElement;
    private currentConditionsTitleTimestampTitle!: HTMLSpanElement;
    private currentConditionsTitleTimestampValue!: HTMLSpanElement;

    private boxTempValue!: HTMLSpanElement;
    private boxTempPhrase!: HTMLSpanElement;
    private todayWeatherCardTitle!: HTMLHeadingElement;
    private title!: HTMLHeadingElement;
    private feelsLikeTempValue!: HTMLSpanElement;
    private observerToView: ObserverToView;
    private language: TranslatorModel;

    constructor(
        controller: WeatherTodayPageController,
        router: Router,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super('weather-today', { controller, router, observerToView, language }, 'div');
        this.observerToView = observerToView;
        this.language = language;
        this.observerToView.subscribe(ModelEvent.today_weather_indicators, this);
        this.observerToView.subscribe(ModelEvent.language, this);
        this.observerToView.subscribe(ModelEvent.temp_unit, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.language: {
                const langObject = <pagesLang>params.message;
                this.currentConditionsTitleTimestampTitle.textContent = langObject.asOf;
                break;
            }
            case ModelEvent.today_weather_indicators: {
                const {
                    temp,
                    tempMin,
                    tempMax,
                    feelsLike,
                    humidity,
                    pressure,
                    visibility,
                    windSpeed,
                    clouds,
                    sunrise,
                    sunset,
                    icon,
                    description,
                    id,
                    mainWeather,
                    timezone,
                    cityName,
                    countryCode,
                    dataCalcTime,
                    country,
                } = <weatherIndicators>params.message;

                this.currentConditionsTitleLocation.textContent = `${cityName}, ${country}`;
                this.currentConditionsTitleTimestampValue.textContent = `${dataCalcTime}, GMT +0${timezone}:00`;
            }
        }
    }

    protected render(): void {
        const currentConditions = document.createElement('div');
        currentConditions.className = 'current-conditions';

        const currentConditionsTitle = document.createElement('div');
        currentConditionsTitle.className = 'current-conditions-title';

        this.currentConditionsTitleLocation = document.createElement('h2');
        this.currentConditionsTitleLocation.className = 'current-conditions-title__location';
        this.currentConditionsTitleLocation.textContent = `town, country`;

        const currentConditionsTitleTimestamp = document.createElement('div');
        currentConditionsTitleTimestamp.className = 'current-conditions-title__timestamp';

        this.currentConditionsTitleTimestampTitle = document.createElement('span');
        this.currentConditionsTitleTimestampTitle.className = 'current-conditions-title__timestamp_title';
        this.currentConditionsTitleTimestampTitle.textContent = `По состоянию на: `;

        this.currentConditionsTitleTimestampValue = document.createElement('span');
        this.currentConditionsTitleTimestampValue.className = 'current-conditions-title__timestamp_value';

        currentConditionsTitleTimestamp.append(
            this.currentConditionsTitleTimestampTitle,
            this.currentConditionsTitleTimestampValue
        );
        currentConditionsTitle.append(this.currentConditionsTitleLocation, currentConditionsTitleTimestamp);

        const currentConditionsBox = document.createElement('div');
        currentConditionsBox.className = 'current-conditions-box';

        const currentConditionsBoxTemp = document.createElement('div');
        currentConditionsBoxTemp.className = 'current-conditions-box-temp';

        const currentConditionsBoxIcon = document.createElement('div');
        currentConditionsBoxIcon.className = 'current-conditions-box-icon';

        const currentConditionsIcon = document.createElement('div');
        currentConditionsIcon.className = 'current-conditions-icon';

        this.boxTempValue = document.createElement('div');
        this.boxTempValue.className = 'box-temp-value';
        this.boxTempValue.textContent = '+5 ';

        this.boxTempPhrase = document.createElement('div');
        this.boxTempPhrase.className = 'box-temp-phrase';
        this.boxTempPhrase.textContent = 'Ясно';

        currentConditionsBoxIcon.append(currentConditionsIcon);
        currentConditionsBoxTemp.append(this.boxTempValue, this.boxTempPhrase);
        currentConditionsBox.append(currentConditionsBoxTemp, currentConditionsBoxIcon);

        currentConditions.append(currentConditionsTitle, currentConditionsBox);

        const todayWeatherCard = document.createElement('div');
        todayWeatherCard.className = 'today-weather-card';

        this.todayWeatherCardTitle = document.createElement('h2');
        this.todayWeatherCardTitle.className = 'today-weather-card-title';
        this.todayWeatherCardTitle.textContent = `${langObj[lang].forecastToday}: town, country`;

        const todayWeatherCardTableWrapper = document.createElement('div');
        todayWeatherCardTableWrapper.className = 'today-weather-card--tableWrapper';

        const weatherTableColumns = document.createElement('ul');
        weatherTableColumns.className = 'weather-table--columns';

        weatherTableColumns.insertAdjacentHTML(
            'beforeend',
            `
        <li class="colomn-times-of-day">
            <h3 class="colomn-label">${langObj[lang].morning}</h3>
            <div class="colomn-label">-23</div>
            <div class="colomn-icon"></div>
            <div class="colomn-precip">
                <svg class="colomn-precip-icon"></svg>
                <span class="colomn-precip-humidity">2%</span>
            </div>
        </li>
        <li class="colomn-times-of-day">
            <h3 class="colomn-label">${langObj[lang].afternoon}</h3>
            <div class="colomn-label">-23</div>
            <div class="colomn-icon"></div>
            <div class="colomn-precip">
                <svg class="colomn-precip-icon"></svg>
                <span class="colomn-precip-humidity">2%</span>
        </div>
        </li>
        <li class="colomn-times-of-day">
            <h3 class="colomn-label">${langObj[lang].evening}</h3>
            <div class="colomn-label">-23</div>
            <div class="colomn-icon"></div>
            <div class="colomn-precip">
             <svg class="colomn-precip-icon"></svg>
             <span class="colomn-precip-humidity">2%</span>
        </div>
        </li>
        <li class="colomn-times-of-day">
            <h3 class="colomn-label">${langObj[lang].night}</h3>
            <div class="colomn-label">-23</div>
            <div class="colomn-icon"></div>
            <div class="colomn-precip">
             <svg class="colomn-precip-icon"></svg>
                <span class="colomn-precip-humidity">2%</span>
        </div>
         </li>`
        );

        todayWeatherCardTableWrapper.append(weatherTableColumns);
        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer';

        const buttonPrimery = document.createElement('a');
        buttonPrimery.className = 'button-primery';
        buttonPrimery.textContent = langObj[lang].nextHours;

        cardFooter.append(buttonPrimery);
        todayWeatherCard.append(this.todayWeatherCardTitle, todayWeatherCardTableWrapper, cardFooter);

        this.title = document.createElement('h2');
        this.title.className = 'component__title';

        this.title.innerText = `${langObj[lang].forecastToday}: town, country`;

        const todaysDetails = document.createElement('div');
        todaysDetails.className = 'today-details';

        const todaysDetailsHeader = document.createElement('div');
        todaysDetailsHeader.className = 'todays-details-header';

        const feelsLikeTempBox = document.createElement('div');
        feelsLikeTempBox.className = 'todays-details-header__feels-like-temp';

        this.feelsLikeTempValue = document.createElement('span');
        this.feelsLikeTempValue.className = 'todays-details-header__feels-like-temp_value';
        this.feelsLikeTempValue.textContent = '-26';

        const feelsLikeTempLabel = document.createElement('span');
        feelsLikeTempLabel.className = 'todays-details-header__feels-like-temp_label';
        feelsLikeTempLabel.textContent = langObj[lang].feelsLike;

        const sunriseSunsetBox = document.createElement('div');
        sunriseSunsetBox.className = 'sunrise-sunset-box';

        const sunriseSunsetSvgBox = document.createElement('div');
        sunriseSunsetSvgBox.className = 'sunrise-sunset-svg-box';

        const sunriseSunsetDates = document.createElement('div');
        sunriseSunsetDates.className = 'sunrise-sunset-dates';
        sunriseSunsetDates.insertAdjacentHTML(
            'beforeend',
            `
        <div class='sunrise-value'>
            <p>7:56</p>
        </div>
        <div class='sunrise-value'>
            <p>17:21</p>
        </div>
        `
        );

        sunriseSunsetBox.insertAdjacentHTML(
            'beforeend',
            `
       <svg  class="sunrise-sunset">
       <path d="M -13.5 26.5 a 1 1 0 0 0 80 0" class="sunrise-sunset-path" style="transform-origin: 40px 40px;"></path></svg>
       `
        );

        sunriseSunsetBox.append(sunriseSunsetDates);

        const todaysDetailsCard = document.createElement('div');
        todaysDetailsCard.className = 'today-details-card';

        todaysDetailsCard.insertAdjacentHTML(
            'beforeend',
            `
        <div class='todays-details-item'>
            <img class='weather-details-item-icon' src="" alt=""></img>
            <div class='weather-details-item-label'>${langObj[lang].high}/${langObj[lang].low}</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
            </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon'></svg>
            <div class='weather-details-item-label'>${langObj[lang].wind}</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                 /
                <span >-28°</span>
            </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon'></svg>
            <div class='weather-details-item-label'>${langObj[lang].humidity}</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
             </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon'></svg>
            <div class='weather-details-item-label'>${langObj[lang].cloudiness}</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
             </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon'></svg>
            <div class='weather-details-item-label'>${langObj[lang].pressure}</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
             </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon'></svg>
            <div class='weather-details-item-label'>${langObj[lang].visibility}</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
             </div>
        </div>
        `
        );

        feelsLikeTempBox.append(this.feelsLikeTempValue, feelsLikeTempLabel);
        sunriseSunsetBox.append(sunriseSunsetSvgBox);
        todaysDetailsHeader.append(feelsLikeTempBox, sunriseSunsetBox);
        todaysDetails.append(this.title, todaysDetailsHeader, todaysDetailsCard);
        this.element.append(currentConditions, todayWeatherCard, todaysDetails);
    }

    public show() {
        return this.element;
    }
}
