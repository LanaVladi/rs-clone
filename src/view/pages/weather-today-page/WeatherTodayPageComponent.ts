import { DataToBGStyle, HALF_CIRCLE_DEG, weatherIconImgFormat, weatherIconUrl } from '../../../constants';
import { WeatherTodayPageController } from '../../../controller/WeatherTodayPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { TranslatorModel } from '../../../model/TranslatorModel';
import INotify, { ModelEvent, NotifyParameters, pagesLang, WeatherId, weatherIndicators } from '../../../types';
import { convertUnixToDate, convertUnixToDayNight } from '../../../utils';
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
    private currentConditions!: HTMLDivElement;
    private currentConditionsTitleLocation!: HTMLHeadingElement;
    private currentConditionsTitleTimestampName!: HTMLSpanElement;
    private currentConditionsTitleTimestampValue!: HTMLSpanElement;
    private boxTempValue!: HTMLSpanElement;
    private boxTempPhrase!: HTMLSpanElement;
    private currentConditionsIcon!: HTMLImageElement;
    private todayDetailsTitleName!: HTMLHeadingElement;
    private todayDetailsTitleValue!: HTMLHeadingElement;
    private sunriseSunsetAnimationBox!: HTMLDivElement;
    private sunriseSunsetTimeSunriseTime!: HTMLParagraphElement;
    private sunriseSunsetTimeSunsetTime!: HTMLParagraphElement;
    private feelsLikeTempValue!: HTMLSpanElement;
    private feelsLikeTempLabel!: HTMLSpanElement;
    private todayDetailsItemLabelMaxMinTemp!: HTMLDivElement;
    private todayDetailsItemLabelHumidity!: HTMLDivElement;
    private todayDetailsItemInfoHumidity!: HTMLSpanElement;
    private todayDetailsItemInfoMaxTemp!: HTMLSpanElement;
    private todayDetailsItemInfoMinTemp!: HTMLSpanElement;
    private todayDetailsItemLabelWind!: HTMLDivElement;
    private todayDetailsItemInfoWind!: HTMLSpanElement;
    private todayDetailsItemInfoWindUnit!: HTMLSpanElement;
    private todayDetailsItemLabelCloudiness!: HTMLDivElement;
    private todayDetailsItemInfoCloudiness!: HTMLSpanElement;
    private todayDetailsItemLabelPressure!: HTMLDivElement;
    private todayDetailsItemInfoPressure!: HTMLSpanElement;
    private todayDetailsItemInfoPressureUnit!: HTMLSpanElement;
    private todayDetailsItemLabelVisibility!: HTMLDivElement;
    private todayDetailsItemInfoVisibility!: HTMLSpanElement;
    private todayDetailsItemInfoVisibilityUnit!: HTMLSpanElement;

    private observerToView: ObserverToView;
    private language: TranslatorModel;
    private lang!: string;
    private storageKeyLang = 'lang';
    private startLang!: pagesLang;

    constructor(
        controller: WeatherTodayPageController,
        router: Router,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super('weather-today', { controller, router, observerToView, language }, 'div');
        this.observerToView = observerToView;
        this.language = language;
        this.startLang = this.checkLocalStorageLanguage();
        this.notify({ message: this.startLang, typeEvents: ModelEvent.language });
        this.observerToView.subscribe(ModelEvent.today_weather_indicators, this);
        this.observerToView.subscribe(ModelEvent.language, this);
        this.observerToView.subscribe(ModelEvent.temp_unit, this);
    }

    protected checkLocalStorageLanguage() {
        if (!JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`)) {
            const startLangInit = 'ru';
            localStorage.setItem('lang', JSON.stringify(startLangInit));
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
                this.currentConditionsTitleTimestampName.textContent = langObject.asOf;
                this.todayDetailsTitleName.textContent = langObject.weatherToday;
                this.feelsLikeTempLabel.textContent = langObject.feelsLike;
                this.todayDetailsItemLabelMaxMinTemp.textContent = `${langObject.high}/${langObject.low}`;
                this.todayDetailsItemLabelHumidity.textContent = `${langObject.humidity}`;
                this.todayDetailsItemLabelWind.textContent = `${langObject.wind}`;
                this.todayDetailsItemInfoWindUnit.textContent = `${langObject.kmH}`;
                this.todayDetailsItemLabelCloudiness.textContent = `${langObject.cloudiness}`;
                this.todayDetailsItemLabelPressure.textContent = `${langObject.pressure}`;
                this.todayDetailsItemInfoPressureUnit.textContent = `${langObject.mb}`;
                this.todayDetailsItemLabelVisibility.textContent = `${langObject.visibility}`;
                this.todayDetailsItemInfoVisibilityUnit.textContent = `${langObject.km}`;

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
                    timezone,
                    cityName,
                    countryCode,
                    dataCalcTime,
                } = <weatherIndicators>params.message;
                this.currentConditionsTitleLocation.textContent = `${cityName}, ${countryCode}`;
                this.currentConditionsTitleTimestampValue.textContent = `${convertUnixToDate(
                    timezone,
                    dataCalcTime
                )}, GMT ${timezone}:00`;
                this.boxTempValue.textContent = `${temp}??`;
                this.boxTempPhrase.textContent = `${description}`;
                this.currentConditionsIcon.src = `${weatherIconUrl}${icon}${weatherIconImgFormat}`;
                this.feelsLikeTempValue.textContent = `${feelsLike}??`;
                this.todayDetailsTitleValue.textContent = `${cityName}, ${countryCode}`;
                this.sunriseSunsetTimeSunriseTime.textContent = `${convertUnixToDate(timezone, sunrise)}`;
                this.sunriseSunsetTimeSunsetTime.textContent = `${convertUnixToDate(timezone, sunset)}`;
                this.todayDetailsItemInfoMaxTemp.textContent = `${tempMax}??/`;
                this.todayDetailsItemInfoMinTemp.textContent = `${tempMin}??`;
                this.todayDetailsItemInfoHumidity.textContent = `${humidity}%`;
                this.todayDetailsItemInfoWind.textContent = `${windSpeed}`;
                this.todayDetailsItemInfoCloudiness.textContent = `${clouds}%`;
                this.todayDetailsItemInfoPressure.textContent = `${pressure}`;
                this.todayDetailsItemInfoVisibility.textContent = `${visibility}`;

                this.updateBackground(id, dataCalcTime, sunrise, sunset);
                this.updateSunAnimation(sunrise, sunset, dataCalcTime);
            }
        }
    }

    protected render(): void {
        this.currentConditions = document.createElement('div');
        this.currentConditions.className = 'current-conditions-card container';

        const currentConditionsTitle = document.createElement('div');
        currentConditionsTitle.className = 'current-conditions-card-title';

        this.currentConditionsTitleLocation = document.createElement('h2');
        this.currentConditionsTitleLocation.className = 'current-conditions-card-title__location';

        const currentConditionsTitleTimestamp = document.createElement('div');
        currentConditionsTitleTimestamp.className = 'current-conditions-card-title__timestamp';

        this.currentConditionsTitleTimestampName = document.createElement('span');
        this.currentConditionsTitleTimestampName.className = 'current-conditions-card-title__timestamp_name';
        this.currentConditionsTitleTimestampName.textContent = this.props.language.getTranslateRu().asOf;

        this.currentConditionsTitleTimestampValue = document.createElement('span');
        this.currentConditionsTitleTimestampValue.className = 'current-conditions-card-title__timestamp_value';

        currentConditionsTitleTimestamp.append(
            this.currentConditionsTitleTimestampName,
            this.currentConditionsTitleTimestampValue
        );
        currentConditionsTitle.append(this.currentConditionsTitleLocation, currentConditionsTitleTimestamp);

        const currentConditionsBox = document.createElement('div');
        currentConditionsBox.className = 'current-conditions-box';

        const currentConditionsBoxTemp = document.createElement('div');
        currentConditionsBoxTemp.className = 'current-conditions-box-temp';

        const currentConditionsBoxIcon = document.createElement('div');
        currentConditionsBoxIcon.className = 'current-conditions-box-icon';
        this.currentConditionsIcon = document.createElement('img');
        this.currentConditionsIcon.className = 'current-conditions-icon';

        this.boxTempValue = document.createElement('div');
        this.boxTempValue.className = 'box-temp-value';

        this.boxTempPhrase = document.createElement('div');
        this.boxTempPhrase.className = 'box-temp-phrase';

        currentConditionsBoxIcon.append(this.currentConditionsIcon);
        currentConditionsBoxTemp.append(this.boxTempValue, this.boxTempPhrase);
        currentConditionsBox.append(currentConditionsBoxTemp, currentConditionsBoxIcon);

        this.currentConditions.append(currentConditionsTitle, currentConditionsBox);

        const todayDetailsCard = document.createElement('div');
        todayDetailsCard.className = 'today-details-card container';

        const todayDetailsTitle = document.createElement('div');
        todayDetailsTitle.className = 'today-details-title';

        this.todayDetailsTitleName = document.createElement('h2');
        this.todayDetailsTitleName.className = 'today-details-title__name';
        this.todayDetailsTitleName.innerText = this.props.language.getTranslateRu().weatherToday;

        this.todayDetailsTitleValue = document.createElement('h2');
        this.todayDetailsTitleValue.className = 'today-details-title__value';

        todayDetailsTitle.append(this.todayDetailsTitleName, this.todayDetailsTitleValue);

        const todayDetailsHeader = document.createElement('div');
        todayDetailsHeader.className = 'today-details-header';

        const feelsLikeTempBox = document.createElement('div');
        feelsLikeTempBox.className = 'today-details-header__feels-like-temp';

        this.feelsLikeTempValue = document.createElement('span');
        this.feelsLikeTempValue.className = 'today-details-header__feels-like-temp_value';

        this.feelsLikeTempLabel = document.createElement('span');
        this.feelsLikeTempLabel.className = 'today-details-header__feels-like-temp_label';
        this.feelsLikeTempLabel.textContent = this.props.language.getTranslateRu().feelsLike;

        feelsLikeTempBox.append(this.feelsLikeTempValue, this.feelsLikeTempLabel);

        const sunriseSunsetBox = document.createElement('div');
        sunriseSunsetBox.className = 'sunrise-sunset-box';

        const sunriseSunsetSvgBox = document.createElement('div');
        sunriseSunsetSvgBox.className = 'sunrise-sunset-svg-box';

        sunriseSunsetBox.insertAdjacentHTML(
            'beforeend',
            `
       <svg  class="sunrise-sunset">
       <path d="M -13.5 26.5 a 1 1 0 0 0 80 0" class="sunrise-sunset-path" style="transform-origin: 40px 40px;"></path></svg>
       `
        );

        const sunriseSunsetAnimation = document.createElement('div');
        sunriseSunsetAnimation.className = 'sunrise-sunset-animation';
        this.sunriseSunsetAnimationBox = document.createElement('div');
        this.sunriseSunsetAnimationBox.className = 'sunrise-sunset-animation-box';
        const sunIcon = document.createElement('div');
        sunIcon.className = 'sunrise-sunset-animation-sun-icon';
        this.sunriseSunsetAnimationBox.append(sunIcon);
        sunriseSunsetAnimation.append(this.sunriseSunsetAnimationBox);

        const sunriseSunsetTime = document.createElement('div');
        sunriseSunsetTime.className = 'sunrise-sunset-time';

        this.sunriseSunsetTimeSunriseTime = document.createElement('p');
        this.sunriseSunsetTimeSunriseTime.className = 'sunrise-time';
        this.sunriseSunsetTimeSunsetTime = document.createElement('p');
        this.sunriseSunsetTimeSunsetTime.className = 'sunset-time';

        sunriseSunsetTime.append(this.sunriseSunsetTimeSunriseTime, this.sunriseSunsetTimeSunsetTime);
        sunriseSunsetBox.append(sunriseSunsetTime, sunriseSunsetAnimation);

        todayDetailsHeader.append(feelsLikeTempBox, sunriseSunsetBox);

        // block todayDetailsIndicators
        const todayDetailsIndicators = document.createElement('div');
        todayDetailsIndicators.className = 'today-details-indicators';

        // todayDetailsItemMaxMinTemp
        const todayDetailsItemMaxMinTemp = document.createElement('div');
        todayDetailsItemMaxMinTemp.className = 'todays-details-item max-min-temp';

        const todayDetailsIconContainerTemp = document.createElement('div');
        todayDetailsIconContainerTemp.className = 'icon-container-max-min-temp';

        this.todayDetailsItemLabelMaxMinTemp = document.createElement('div');
        this.todayDetailsItemLabelMaxMinTemp.className = 'today-details-item-label max-min-temp';
        this.todayDetailsItemLabelMaxMinTemp.textContent = `${this.props.language.getTranslateRu().high}/${
            this.props.language.getTranslateRu().low
        }`;

        const todayDetailsItemInfoMaxMinTemp = document.createElement('div');
        todayDetailsItemInfoMaxMinTemp.className = 'today-details-item-info max-min-temp';

        this.todayDetailsItemInfoMaxTemp = document.createElement('span');
        this.todayDetailsItemInfoMaxTemp.className = 'today-details-item-info max-temp';

        this.todayDetailsItemInfoMinTemp = document.createElement('span');
        this.todayDetailsItemInfoMinTemp.className = 'today-details-item-info min-temp';

        todayDetailsItemMaxMinTemp.append(
            todayDetailsIconContainerTemp,
            this.todayDetailsItemLabelMaxMinTemp,
            todayDetailsItemInfoMaxMinTemp,
            this.todayDetailsItemInfoMaxTemp,
            this.todayDetailsItemInfoMinTemp
        );

        // todayDetailsItemHumidity
        const todayDetailsItemHumidity = document.createElement('div');
        todayDetailsItemHumidity.className = 'todays-details-item';

        const todayDetailsIconContainerHumidity = document.createElement('div');
        todayDetailsIconContainerHumidity.className = 'icon-container-humidity-item';

        this.todayDetailsItemLabelHumidity = document.createElement('div');
        this.todayDetailsItemLabelHumidity.className = 'today-details-item-label humidity';
        this.todayDetailsItemLabelHumidity.textContent = `${this.props.language.getTranslateRu().humidity}`;

        this.todayDetailsItemInfoHumidity = document.createElement('span');
        this.todayDetailsItemInfoHumidity.className = 'today-details-item-info humidity';

        todayDetailsItemHumidity.append(
            todayDetailsIconContainerHumidity,
            this.todayDetailsItemLabelHumidity,
            this.todayDetailsItemInfoHumidity
        );

        // todayDetailsItemWind
        const todayDetailsItemWind = document.createElement('div');
        todayDetailsItemWind.className = 'todays-details-item';

        const todayDetailsIconContainerWind = document.createElement('div');
        todayDetailsIconContainerWind.className = 'icon-container-wind-item';

        this.todayDetailsItemLabelWind = document.createElement('div');
        this.todayDetailsItemLabelWind.className = 'today-details-item-label wind';
        this.todayDetailsItemLabelWind.textContent = `${this.props.language.getTranslateRu().wind}`;

        const todayDetailsItemInfoBoxWind = document.createElement('div');
        todayDetailsItemInfoBoxWind.className = 'today-details-item-info-box wind';

        this.todayDetailsItemInfoWind = document.createElement('span');
        this.todayDetailsItemInfoWind.className = 'today-details-item-info wind';

        this.todayDetailsItemInfoWindUnit = document.createElement('span');
        this.todayDetailsItemInfoWindUnit.className = 'today-details-item-info-unit wind';
        this.todayDetailsItemInfoWindUnit.textContent = `${this.props.language.getTranslateRu().kmH}`;

        todayDetailsItemInfoBoxWind.append(this.todayDetailsItemInfoWind, this.todayDetailsItemInfoWindUnit);

        todayDetailsItemWind.append(
            todayDetailsIconContainerWind,
            this.todayDetailsItemLabelWind,
            todayDetailsItemInfoBoxWind
        );

        // todayDetailsItemCloudiness
        const todayDetailsItemCloudiness = document.createElement('div');
        todayDetailsItemCloudiness.className = 'todays-details-item';

        const todayDetailsIconContainerCloudiness = document.createElement('div');
        todayDetailsIconContainerCloudiness.className = 'icon-container-cloudiness-item';

        this.todayDetailsItemLabelCloudiness = document.createElement('div');
        this.todayDetailsItemLabelCloudiness.className = 'today-details-item-label cloudiness';
        this.todayDetailsItemLabelCloudiness.textContent = `${this.props.language.getTranslateRu().cloudiness}`;

        this.todayDetailsItemInfoCloudiness = document.createElement('span');
        this.todayDetailsItemInfoCloudiness.className = 'today-details-item-info cloudiness';

        todayDetailsItemCloudiness.append(
            todayDetailsIconContainerCloudiness,
            this.todayDetailsItemLabelCloudiness,
            this.todayDetailsItemInfoCloudiness
        );

        // todayDetailsItemPressure
        const todayDetailsItemPressure = document.createElement('div');
        todayDetailsItemPressure.className = 'todays-details-item';

        const todayDetailsIconContainerPressure = document.createElement('div');
        todayDetailsIconContainerPressure.className = 'icon-container-pressure-item';

        this.todayDetailsItemLabelPressure = document.createElement('div');
        this.todayDetailsItemLabelPressure.className = 'today-details-item-label pressure';
        this.todayDetailsItemLabelPressure.textContent = `${this.props.language.getTranslateRu().pressure}`;

        const todayDetailsItemInfoBoxPressure = document.createElement('div');
        todayDetailsItemInfoBoxPressure.className = 'today-details-item-info-box pressure';

        this.todayDetailsItemInfoPressure = document.createElement('span');
        this.todayDetailsItemInfoPressure.className = 'today-details-item-info pressure';

        this.todayDetailsItemInfoPressureUnit = document.createElement('span');
        this.todayDetailsItemInfoPressureUnit.className = 'today-details-item-info-unit pressure';
        this.todayDetailsItemInfoPressureUnit.textContent = `${this.props.language.getTranslateRu().mb}`;

        todayDetailsItemInfoBoxPressure.append(
            this.todayDetailsItemInfoPressure,
            this.todayDetailsItemInfoPressureUnit
        );
        todayDetailsItemPressure.append(
            todayDetailsIconContainerPressure,
            this.todayDetailsItemLabelPressure,
            todayDetailsItemInfoBoxPressure
        );

        // todayDetailsItemPressure
        const todayDetailsItemVisibility = document.createElement('div');
        todayDetailsItemVisibility.className = 'todays-details-item';

        const todayDetailsIconContainerVisibility = document.createElement('div');
        todayDetailsIconContainerVisibility.className = 'icon-container-visibility-item';

        this.todayDetailsItemLabelVisibility = document.createElement('div');
        this.todayDetailsItemLabelVisibility.className = 'today-details-item-label visibility';
        this.todayDetailsItemLabelVisibility.textContent = `${this.props.language.getTranslateRu().visibility}`;

        const todayDetailsItemInfoBoxVisibility = document.createElement('div');
        todayDetailsItemInfoBoxVisibility.className = 'today-details-item-info-box visibility';

        this.todayDetailsItemInfoVisibility = document.createElement('span');
        this.todayDetailsItemInfoVisibility.className = 'today-details-item-info visibility';

        this.todayDetailsItemInfoVisibilityUnit = document.createElement('span');
        this.todayDetailsItemInfoVisibilityUnit.className = 'today-details-item-info-unit visibility';
        this.todayDetailsItemInfoVisibilityUnit.textContent = `${this.props.language.getTranslateRu().km}`;

        todayDetailsItemInfoBoxVisibility.append(
            this.todayDetailsItemInfoVisibility,
            this.todayDetailsItemInfoVisibilityUnit
        );

        todayDetailsItemVisibility.append(
            todayDetailsIconContainerVisibility,
            this.todayDetailsItemLabelVisibility,
            todayDetailsItemInfoBoxVisibility
        );

        todayDetailsIndicators.append(
            todayDetailsItemMaxMinTemp,
            todayDetailsItemHumidity,
            todayDetailsItemWind,
            todayDetailsItemCloudiness,
            todayDetailsItemPressure,
            todayDetailsItemVisibility
        );

        todayDetailsCard.append(todayDetailsTitle, todayDetailsHeader, todayDetailsIndicators);
        this.element.append(this.currentConditions, todayDetailsCard);
    }

    public show() {
        return this.element;
    }

    private updateSunAnimation(sunrise: number, sunset: number, currentTime: number) {
        const day = sunset - sunrise;
        const sunPos = currentTime - sunrise;
        const deg = (sunPos * HALF_CIRCLE_DEG) / day;
        this.sunriseSunsetAnimationBox.style.transform = `rotate(${deg}deg)`;
    }

    private updateBackground(id: number, dataCalcTime: number, sunrise: number, sunset: number) {
        const weatherId = id.toString() as WeatherId;
        const dayNight = convertUnixToDayNight(dataCalcTime, sunrise, sunset);
        this.currentConditions.style.backgroundImage = `url(${DataToBGStyle[dayNight][weatherId].img})`;
    }
}
