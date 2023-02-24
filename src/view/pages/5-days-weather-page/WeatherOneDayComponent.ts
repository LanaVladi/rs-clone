import { langObj, dayName } from './../../../constants';
// import { langObj, lang } from '../../../constants';
import './WeatherDayComponent.css';
import { WeatherOneDayController } from '../../../controller/WeatherOneDayController';
import { ObserverToModel } from '../../../model/ObserverToModel';
import { ObserverToView } from '../../../model/ObserverToView';
import { TranslatorModel } from '../../../model/TranslatorModel';
import {
    ModelEvent,
    NotifyParameters,
    pagesLang,
    ViewEvent,
    weatherIndicatorsFiveDays,
    weatherOneDayData,
} from '../../../types';
import { BaseComponent } from '../../BaseComponent';

interface WeatherOneDayComponentProps {
    observerToView: ObserverToView;
    language: TranslatorModel;
}
export class WeatherOneDayComponent extends BaseComponent<WeatherOneDayComponentProps> {
    private dayWrapper!: HTMLDivElement;
    private daypartDetails!: HTMLDivElement;
    private daysContainer!: HTMLDivElement;
    private summaryIcon!: HTMLDivElement;
    private detailsTableLabelVisibility!: HTMLSpanElement;
    private detailsTableLabelVisibilityNight!: HTMLSpanElement;
    private detailsTableLabelHumidity!: HTMLSpanElement;
    private detailsTableLabelHumidityNight!: HTMLSpanElement;
    private detailsTableLabelPressure!: HTMLSpanElement;
    private detailsTableLabelPressureNight!: HTMLSpanElement;
    private detailsTableLabelFeelLike!: HTMLSpanElement;
    private detailsTableLabelFeelLikeNight!: HTMLSpanElement;
    private detailsTableValueFeelLike!: HTMLSpanElement;
    private detailsTableValueFeelLikeNight!: HTMLSpanElement;
    private observerToView: ObserverToView;
    private day: weatherOneDayData;
    private language: TranslatorModel;
    private dayName!: HTMLHeadingElement;
    private detailsSummaryHighTempValue!: HTMLSpanElement;
    private detailsSummaryLowTempValue!: HTMLSpanElement;
    private detailsSummaryPrecipText!: HTMLSpanElement;
    private detailsSummaryExtended!: HTMLDivElement;
    private detailsSummaryWindText!: HTMLSpanElement;
    private detailsTableValueHumidity!: HTMLSpanElement;
    private detailsTableValueHumidityNight!: HTMLSpanElement;
    private detailsTableValuePressure!: HTMLSpanElement;
    private detailsTableValuePressureNight!: HTMLSpanElement;
    private detailsTableValueVisibility!: HTMLSpanElement;
    private detailsTableValueVisibilityNight!: HTMLSpanElement;
    private detailsSummaryConditionIcon!: HTMLImageElement;
    private weatherIcon!: HTMLImageElement;
    private weatherIconNight!: HTMLImageElement;
    private temperatureValue!: HTMLSpanElement;
    private temperatureValueNight!: HTMLSpanElement;
    private dayOfTheWeek!: HTMLDivElement;
    private nightOftheWeek!: HTMLDivElement;
    private percentageValueDraft!: HTMLSpanElement;
    private percentageValueDraftNight!: HTMLSpanElement;
    private percentageValueSpeed!: HTMLSpanElement;
    private percentageValueSpeedNight!: HTMLSpanElement;
    constructor(observerToView: ObserverToView, language: TranslatorModel, day: weatherOneDayData) {
        super('weather-one-day-container', { observerToView, language }, 'div');
        this.day = day;
        this.observerToView = observerToView;
        this.language = language;
        this.detailsSummaryConditionIcon.src = `http://openweathermap.org/img/wn/${this.day.weather[0].icon}@2x.png`;
        this.weatherIcon.src = `http://openweathermap.org/img/wn/${this.day.weather[0].icon}@2x.png`;
        this.weatherIconNight.src = `http://openweathermap.org/img/wn/${this.day.night.weather[0].icon}@2x.png`;
        this.dayName.textContent = `${this.getDayofWeek(this.day.dt_txt)}`;
        this.nightOftheWeek.textContent = `${this.getDayofWeek(this.day.night.dt_txt)} ${this.props.language.getTranslateRu().night}`;
        this.detailsSummaryHighTempValue.textContent = `${Math.floor(this.day.main.temp_max)}°`;
        this.detailsSummaryLowTempValue.textContent = `${Math.floor(this.day.night.main.temp)}°`;
        this.detailsSummaryPrecipText.textContent = `${Math.round(this.day.pop * 100)}%`;
        this.detailsSummaryExtended.textContent = `${(this.day.weather[0].description)}`;
        this.detailsSummaryWindText.textContent = `${Math.floor(this.day.wind.speed * 3.6)} ${this.props.language.getTranslateRu().kmH}`;
        this.detailsTableValueHumidity.textContent = `${this.day.main.humidity} %`;
        this.detailsTableValueHumidityNight.textContent = `${this.day.night.main.humidity} %`;
        this.detailsTableValueFeelLike.textContent = `${Math.floor(this.day.main.feels_like)}°`;
        this.detailsTableValueFeelLikeNight.textContent = `${Math.floor(this.day.night.main.feels_like)}°`;
        this.detailsTableValuePressure.textContent = `${this.day.main.pressure} ${this.props.language.getTranslateRu().mb}`;
        this.detailsTableValuePressureNight.textContent = `${this.day.night.main.pressure} ${this.props.language.getTranslateRu().mb}`;
        this.detailsTableValueVisibility.textContent = `${Math.round(this.day.visibility / 1000)} ${this.props.language.getTranslateRu().km}`;
        this.detailsTableValueVisibilityNight.textContent = `${Math.round(this.day.night.visibility / 1000)} ${this.props.language.getTranslateRu().km}`;
        this.temperatureValue.textContent = `${Math.floor(this.day.main.temp)}°`;
        this.temperatureValueNight.textContent = `${Math.floor(this.day.night.main.temp)}°`;
        this.dayOfTheWeek.textContent = `${this.getDayofWeek(this.day.night.dt_txt)} ${this.props.language.getTranslateRu().afternoon}`;
        this.percentageValueDraft.textContent = `${Math.round(this.day.pop * 100)}%`;
        this.percentageValueDraftNight.textContent = `${Math.round(this.day.night.pop * 100)}%`;
        this.percentageValueSpeed.textContent = `${Math.floor(this.day.wind.speed * 3.6)} ${this.props.language.getTranslateRu().kmH}`;
        this.percentageValueSpeedNight.textContent = `${Math.floor(this.day.night.wind.speed * 3.6)} ${this.props.language.getTranslateRu().kmH}`;
        this.observerToView.subscribe(ModelEvent.language, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.language: {
                const langObject = <pagesLang>params.message;
                this.detailsTableLabelVisibility.textContent = langObject.visibility;
                this.detailsTableLabelHumidity.textContent = langObject.humidity;
                this.detailsTableLabelFeelLike.textContent = langObject.feelsLike;
                this.detailsTableLabelPressure.textContent = langObject.pressure;
                this.detailsTableLabelVisibilityNight.textContent = langObject.visibility;
                this.detailsTableLabelHumidityNight.textContent = langObject.humidity;
                this.detailsTableLabelFeelLikeNight.textContent = langObject.feelsLike;
                this.detailsTableLabelPressureNight.textContent = langObject.pressure;
                this.nightOftheWeek.textContent = `${this.getDayofWeek(this.day.night.dt_txt)} ${langObject.night}`;
                this.detailsSummaryWindText.textContent=`${Math.floor(this.day.wind.speed * 3.6)} ${langObject.kmH}`
                this.dayOfTheWeek.textContent = `${this.getDayofWeek(this.day.night.dt_txt)} ${langObject.afternoon}`;
                this.detailsTableValueVisibility.textContent = `${Math.round(this.day.visibility / 1000)} ${langObject.km}`
                this.percentageValueSpeed.textContent = `${Math.floor(this.day.wind.speed * 3.6)} ${langObject.kmH}`;
                this.percentageValueSpeedNight.textContent = `${Math.floor(this.day.night.wind.speed * 3.6)} ${langObject.kmH}`;
                this.detailsTableValueVisibilityNight.textContent = `${Math.round(this.day.night.visibility / 1000)} ${langObject.km}`;
                this.detailsTableValuePressure.textContent = `${this.day.main.pressure} ${langObject.mb}`;
                this.detailsTableValuePressureNight.textContent = `${this.day.night.main.pressure} ${langObject.mb}`;
                // this.detailsSummaryExtended.textContent = `${this.day.weather[0].main}${langObject.clear}`;
                break;
            }
        }
    }

    protected render(): void {
        this.element.className = 'day';
        this.dayWrapper = document.createElement('div');
        this.dayWrapper.className = 'day-wrapper';
        const detailsSummary = document.createElement('div');
        detailsSummary.className = 'details-summary';

        this.dayName = document.createElement('h3');
        this.dayName.className = 'day-name';
        this.dayName.textContent = ``;

        const detailsTemperature = document.createElement('div');
        detailsTemperature.className = 'details-temperature';

        this.detailsSummaryHighTempValue = document.createElement('span');
        this.detailsSummaryHighTempValue.className = 'details-summary--highTempValue';

        const lowTempValue = document.createElement('span');
        lowTempValue.className = 'low-temp-value';
        lowTempValue.textContent = '/';

        this.detailsSummaryLowTempValue = document.createElement('span');
        this.detailsSummaryLowTempValue.className = 'details-summary--lowTempValue';

        const detailsSummaryCondition = document.createElement('div');
        detailsSummaryCondition.className = 'details-summary--condition';

        this.detailsSummaryConditionIcon = document.createElement('img');
        this.detailsSummaryConditionIcon.className = 'details-summary--condition-icon';

        this.detailsSummaryExtended = document.createElement('div');
        this.detailsSummaryExtended.textContent = ``;

        const detailsSummaryPrecip = document.createElement('div');
        detailsSummaryPrecip.className = 'details-summary--precip';

        this.detailsSummaryPrecipText = document.createElement('span');
        this.detailsSummaryPrecipText.textContent = ` %`;

        const detailsSummaryPrecipIcon = document.createElement('div');
        detailsSummaryPrecipIcon.className = 'icon-container precip-item';

        const detailsSummaryWind = document.createElement('div');
        detailsSummaryWind.className = 'details-summary--wind';

        this.detailsSummaryWindText = document.createElement('span');
        this.detailsSummaryWindText.textContent = ``;

        const detailsSummaryWindIcon = document.createElement('div');
        detailsSummaryWindIcon.className = 'icon-container wind-item';

        lowTempValue.append(this.detailsSummaryLowTempValue);
        detailsTemperature.append(this.detailsSummaryHighTempValue, lowTempValue);

        detailsSummaryCondition.append(this.detailsSummaryConditionIcon, this.detailsSummaryExtended);

        detailsSummaryWind.append(detailsSummaryWindIcon, this.detailsSummaryWindText);

        detailsSummaryPrecip.append(detailsSummaryPrecipIcon, this.detailsSummaryPrecipText);
        detailsSummary.append(
            this.dayName,
            detailsTemperature,
            detailsSummaryCondition,
            detailsSummaryPrecip,
            detailsSummaryWind
        );
        this.dayWrapper.append(detailsSummary);

        this.daysContainer = document.createElement('div');
        this.daysContainer.className = 'day-container';

        this.summaryIcon = document.createElement('div');
        this.summaryIcon.className = 'button';

        this.daypartDetails = document.createElement('div');
        this.daypartDetails.className = 'daypart-details';

        const dailyContent = document.createElement('div');
        dailyContent.className = 'daily-content';

        this.dayOfTheWeek = document.createElement('h3');

        this.nightOftheWeek = document.createElement('h3');

        const dailyContentNight = document.createElement('div');
        dailyContentNight.className = 'daily-content';

        const conditionsSummary = document.createElement('div');
        conditionsSummary.className = 'conditions-summary';

        const conditionsSummaryNight = document.createElement('div');
        conditionsSummaryNight.className = 'conditions-summary';

        this.temperatureValue = document.createElement('span');
        this.temperatureValue.className = 'temperature-value';
        this.temperatureValue.textContent = ``;

        this.temperatureValueNight = document.createElement('span');
        this.temperatureValueNight.className = 'temperature-value';

        this.weatherIcon = document.createElement('img');
        this.weatherIcon.className = 'weather-icon';

        this.weatherIconNight = document.createElement('img');
        this.weatherIconNight.className = 'weather-icon';

        const dataPoints = document.createElement('div');
        dataPoints.className = 'data-points';

        const dataPointsNight = document.createElement('div');
        dataPointsNight.className = 'data-points';

        const dailyContentLabelDraft = document.createElement('div');
        dailyContentLabelDraft.className = 'daily-content--label';

        const precipIconBlockDraft = document.createElement('div');
        precipIconBlockDraft.className = 'icon-container precip-item';

        this.percentageValueDraft = document.createElement('span');
        this.percentageValueDraft.textContent = ``;

        const dailyContentLabelDraftNight = document.createElement('div');
        dailyContentLabelDraftNight.className = 'daily-content--label';

        const precipIconBlockDraftNight = document.createElement('div');
        precipIconBlockDraftNight.className = 'icon-container precip-item';

        this.percentageValueDraftNight = document.createElement('span');
        this.percentageValueDraftNight.textContent = ``;

        dailyContentLabelDraft.append(precipIconBlockDraft, this.percentageValueDraft);
        dailyContentLabelDraftNight.append(precipIconBlockDraftNight, this.percentageValueDraftNight);

        const dailyContentLabelSpeed = document.createElement('div');
        dailyContentLabelSpeed.className = 'daily-content--label';

        const precipIconBlockSpeed = document.createElement('div');
        precipIconBlockSpeed.className = 'icon-container wind-item';

        this.percentageValueSpeed = document.createElement('span');
        this.percentageValueSpeed.textContent = ``;
        dailyContentLabelSpeed.append(precipIconBlockSpeed, this.percentageValueSpeed);

        const dailyContentLabelSpeedNigth = document.createElement('div');
        dailyContentLabelSpeedNigth.className = 'daily-content--label';

        const precipIconBlockSpeedNigth = document.createElement('div');
        precipIconBlockSpeedNigth.className = 'icon-container wind-item';

        this.percentageValueSpeedNight = document.createElement('span');
        this.percentageValueSpeedNight.textContent = ``;
        dailyContentLabelSpeedNigth.append(precipIconBlockSpeedNigth, this.percentageValueSpeedNight);

        dataPoints.append(dailyContentLabelDraft, dailyContentLabelSpeed);

        dataPointsNight.append(dailyContentLabelDraftNight, dailyContentLabelSpeedNigth);

        const detailsTableContainer = document.createElement('div');
        detailsTableContainer.className = 'details-table-container';

        const detailsTableContainerNight = document.createElement('div');
        detailsTableContainerNight.className = 'details-table-container';

        const detailsTable = document.createElement('ul');
        detailsTable.className = 'details-table';

        const detailsTableNight = document.createElement('ul');
        detailsTableNight.className = 'details-table';

        const listItemHumidity = document.createElement('li');
        listItemHumidity.className = 'list-item';

        const listItemHumidityNigth = document.createElement('li');
        listItemHumidityNigth.className = 'list-item';

        const humidityIcon = document.createElement('div');
        humidityIcon.className = 'icon-container humidity-item';

        const humidityIconNight = document.createElement('div');
        humidityIconNight.className = 'icon-container humidity-item';

        const detailsTabeleFieldHumidity = document.createElement('div');
        detailsTabeleFieldHumidity.className = 'details-table--field';

        const detailsTabeleFieldHumidityNight = document.createElement('div');
        detailsTabeleFieldHumidityNight.className = 'details-table--field';

        this.detailsTableLabelHumidity = document.createElement('span');
        this.detailsTableLabelHumidity.className = 'details-table--label';
        this.detailsTableLabelHumidity.textContent = this.props.language.getTranslateRu().humidity;

        this.detailsTableLabelHumidityNight = document.createElement('span');
        this.detailsTableLabelHumidityNight.className = 'details-table--label';
        this.detailsTableLabelHumidityNight.textContent = this.props.language.getTranslateRu().humidity;

        this.detailsTableValueHumidity = document.createElement('span');
        this.detailsTableValueHumidity.className = 'details-table--value';
        this.detailsTableValueHumidity.textContent = ``;

        this.detailsTableValueHumidityNight = document.createElement('span');
        this.detailsTableValueHumidityNight.className = 'details-table--value';
        this.detailsTableValueHumidityNight.textContent = ``;

        detailsTabeleFieldHumidity.append(this.detailsTableLabelHumidity, this.detailsTableValueHumidity);

        detailsTabeleFieldHumidityNight.append(
            this.detailsTableLabelHumidityNight,
            this.detailsTableValueHumidityNight
        );

        listItemHumidity.append(humidityIcon, detailsTabeleFieldHumidity);

        listItemHumidityNigth.append(humidityIconNight, detailsTabeleFieldHumidityNight);

        const listItemPressure = document.createElement('li');
        listItemPressure.className = 'list-item';

        const listItemPressureNight = document.createElement('li');
        listItemPressureNight.className = 'list-item';

        const pressureIcon = document.createElement('div');
        pressureIcon.className = 'icon-container  pressure-item';

        const pressureIconNight = document.createElement('div');
        pressureIconNight.className = 'icon-container  pressure-item';

        const detailsTabeleFieldPressure = document.createElement('div');
        detailsTabeleFieldPressure.className = 'details-table--field';

        const detailsTabeleFieldPressureNight = document.createElement('div');
        detailsTabeleFieldPressureNight.className = 'details-table--field';

        this.detailsTableLabelPressure = document.createElement('span');
        this.detailsTableLabelPressure.className = 'details-table--label';
        this.detailsTableLabelPressure.textContent = this.props.language.getTranslateRu().pressure;

        this.detailsTableLabelPressureNight = document.createElement('span');
        this.detailsTableLabelPressureNight.className = 'details-table--label';
        this.detailsTableLabelPressureNight.textContent = this.props.language.getTranslateRu().pressure;

        this.detailsTableValuePressure = document.createElement('span');
        this.detailsTableValuePressure.className = 'details-table--value';
        this.detailsTableValuePressure.textContent = ``;

        this.detailsTableValuePressureNight = document.createElement('span');
        this.detailsTableValuePressureNight.className = 'details-table--value';
        this.detailsTableValuePressureNight.textContent = ``;

        detailsTabeleFieldPressure.append(this.detailsTableLabelPressure, this.detailsTableValuePressure);

        detailsTabeleFieldPressureNight.append(
            this.detailsTableLabelPressureNight,
            this.detailsTableValuePressureNight
        );

        listItemPressure.append(pressureIcon, detailsTabeleFieldPressure);

        listItemPressureNight.append(pressureIconNight, detailsTabeleFieldPressureNight);

        const listItemFeelLike = document.createElement('li');
        listItemFeelLike.className = 'list-item';

        const listItemFeelLikeNight = document.createElement('li');
        listItemFeelLikeNight.className = 'list-item';

        const feelLikeIcon = document.createElement('div');
        feelLikeIcon.className = 'icon-container temp-item';

        const feelLikeIconNight = document.createElement('div');
        feelLikeIconNight.className = 'icon-container temp-item';

        const detailsTabeleFieldFeelLike = document.createElement('div');
        detailsTabeleFieldFeelLike.className = 'details-table--field';

        const detailsTabeleFieldFeelLikeNight = document.createElement('div');
        detailsTabeleFieldFeelLikeNight.className = 'details-table--field';

        this.detailsTableLabelFeelLike = document.createElement('span');
        this.detailsTableLabelFeelLike.className = 'details-table--label';
        this.detailsTableLabelFeelLike.textContent = this.props.language.getTranslateRu().feelsLike;

        this.detailsTableLabelFeelLikeNight = document.createElement('span');
        this.detailsTableLabelFeelLikeNight.className = 'details-table--label';
        this.detailsTableLabelFeelLikeNight.textContent = this.props.language.getTranslateRu().feelsLike;

        this.detailsTableValueFeelLike = document.createElement('span');
        this.detailsTableValueFeelLike.className = 'details-table--value';
        this.detailsTableValueFeelLike.textContent = ``;

        this.detailsTableValueFeelLikeNight = document.createElement('span');
        this.detailsTableValueFeelLikeNight.className = 'details-table--value';
        this.detailsTableValueFeelLikeNight.textContent = ``;

        detailsTabeleFieldFeelLike.append(this.detailsTableLabelFeelLike, this.detailsTableValueFeelLike);

        detailsTabeleFieldFeelLikeNight.append(
            this.detailsTableLabelFeelLikeNight,
            this.detailsTableValueFeelLikeNight
        );

        listItemFeelLike.append(feelLikeIcon, detailsTabeleFieldFeelLike);

        listItemFeelLikeNight.append(feelLikeIconNight, detailsTabeleFieldFeelLikeNight);

        const listItemVisibility = document.createElement('li');
        listItemVisibility.className = 'list-item';

        const listItemVisibilityNight = document.createElement('li');
        listItemVisibilityNight.className = 'list-item';

        const visibilityIcon = document.createElement('div');
        visibilityIcon.className = 'icon-container  visibility-item';

        const visibilityIconNight = document.createElement('div');
        visibilityIconNight.className = 'icon-container  visibility-item';

        const detailsTabeleFieldVisibility = document.createElement('div');
        detailsTabeleFieldVisibility.className = 'details-table--field';

        const detailsTabeleFieldVisibilityNight = document.createElement('div');
        detailsTabeleFieldVisibilityNight.className = 'details-table--field';

        this.detailsTableLabelVisibility = document.createElement('span');
        this.detailsTableLabelVisibility.className = 'details-table--label';
        this.detailsTableLabelVisibility.textContent = this.props.language.getTranslateRu().visibility;

        this.detailsTableLabelVisibilityNight = document.createElement('span');
        this.detailsTableLabelVisibilityNight.className = 'details-table--label';
        this.detailsTableLabelVisibilityNight.textContent = this.props.language.getTranslateRu().visibility;

        this.detailsTableValueVisibility = document.createElement('span');
        this.detailsTableValueVisibility.className = 'details-table--value';
        this.detailsTableValueVisibility.textContent = ``;

        this.detailsTableValueVisibilityNight = document.createElement('span');
        this.detailsTableValueVisibilityNight.className = 'details-table--value';
        this.detailsTableValueVisibilityNight.textContent = ``;

        detailsTabeleFieldVisibility.append(this.detailsTableLabelVisibility, this.detailsTableValueVisibility);

        detailsTabeleFieldVisibilityNight.append(
            this.detailsTableLabelVisibilityNight,
            this.detailsTableValueVisibilityNight
        );

        listItemVisibility.append(visibilityIcon, detailsTabeleFieldVisibility);

        listItemVisibilityNight.append(visibilityIconNight, detailsTabeleFieldVisibilityNight);

        conditionsSummary.append(this.temperatureValue, this.weatherIcon, dataPoints);
        conditionsSummaryNight.append(this.temperatureValueNight, this.weatherIconNight, dataPointsNight);

        dailyContent.append(this.dayOfTheWeek, conditionsSummary);
        dailyContentNight.append(this.nightOftheWeek, conditionsSummaryNight);

        detailsTable.append(listItemHumidity, listItemPressure, listItemFeelLike, listItemVisibility);
        detailsTableNight.append(
            listItemHumidityNigth,
            listItemPressureNight,
            listItemFeelLikeNight,
            listItemVisibilityNight
        );

        detailsTableContainer.append(detailsTable);
        detailsTableContainerNight.append(detailsTableNight);
        this.daypartDetails.append(dailyContent, dailyContentNight, detailsTableContainer, detailsTableContainerNight);
        this.daysContainer.append(this.dayWrapper, this.daypartDetails, this.summaryIcon);

        this.element.append(this.daysContainer);
    }

    protected addListeners(): void {
        this.summaryIcon.addEventListener('click', this.extendedWindow.bind(this));
    }
    extendedWindow() {
        this.dayWrapper.classList.toggle('day-wrapper-none');
        this.daypartDetails.classList.toggle('daypart-details-active');
        this.summaryIcon.classList.toggle('button-up');
        this.summaryIcon.classList.toggle('button');
    }

    getDayofWeek(day: string) {
        let date = new Date(day);
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        let daysEn=['SUN','MON','TUE','WED','THU','FRI','SAT']
        return days[date.getDay()] + ' ' + date.getDate();
    }

}
