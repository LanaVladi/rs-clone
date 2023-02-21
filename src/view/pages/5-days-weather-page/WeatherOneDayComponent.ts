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
    private detailsTableLabelHumidity!: HTMLSpanElement;
    private detailsTableLabelPressure!: HTMLSpanElement;
    private detailsTableLabelFeelLike!: HTMLSpanElement;
    private detailsTableValueFeelLike!:HTMLSpanElement
    private observerToView: ObserverToView;
    private day: weatherOneDayData;
    private language: TranslatorModel;
    private dayName!:HTMLHeadingElement;
    private detailsSummaryHighTempValue!: HTMLSpanElement;
    private detailsSummaryLowTempValue!:HTMLSpanElement;
    private detailsSummaryPrecipText!:HTMLSpanElement;
    private detailsSummaryExtended!:HTMLDivElement;
    private detailsSummaryWindText!:HTMLSpanElement;
    private detailsTableValueHumidity!:HTMLSpanElement;
    private detailsTableValuePressure!:HTMLSpanElement;
    private detailsTableValueVisibility!:HTMLSpanElement;
    private detailsSummaryConditionIcon!:HTMLImageElement;
    private weatherIcon!:HTMLImageElement;
    private temperatureValue!:HTMLSpanElement;
    private dayOfTheWeek!:HTMLDivElement
    private percentageValueDraft!:HTMLSpanElement;
    private percentageValueSpeed!:HTMLSpanElement;
    constructor(observerToView: ObserverToView, language: TranslatorModel, day: weatherOneDayData) {
        super('searcher-container', { observerToView, language }, 'div');
        this.day = day;
        this.observerToView = observerToView;
        this.language = language;
        console.log(this.day)
        this.detailsSummaryConditionIcon.src=(`http://openweathermap.org/img/wn/${this.day.weather[0].icon}@2x.png`)
        this.weatherIcon.src=(`http://openweathermap.org/img/wn/${this.day.weather[0].icon}@2x.png`)
        this.dayName.textContent=`${this.getDayofWeek(this.day.dt_txt)}`
        this.detailsSummaryHighTempValue.textContent = `${this.day.main.temp_max}°`;
        this.detailsSummaryLowTempValue.textContent = `${this.day.main.temp_min}°`;
        this.detailsSummaryPrecipText.textContent = `${Math.round(this.day.pop*100)}%`;
        this.detailsSummaryExtended.textContent = `${this.day.weather[0].main}`;
        this.detailsSummaryWindText.textContent=`${(this.day.wind.speed*3.6).toFixed(1)}км/ч`
        this.detailsTableValueHumidity.textContent=`${this.day.main.humidity} %`
        this.detailsTableValueFeelLike.textContent=`${this.day.main.feels_like}°`
        this.detailsTableValuePressure.textContent=`${this.day.main.pressure} мбар`
        this.detailsTableValueVisibility.textContent=`${this.day.visibility}`
        this.temperatureValue.textContent=`${Math.round(this.day.main.temp)}°`
        this.dayOfTheWeek.textContent = `${this.getDayofWeek(this.day.dt_txt)}`
        this.percentageValueDraft.textContent=`${Math.round(this.day.pop*100)}%`;
        this.percentageValueSpeed.textContent=`${(this.day.wind.speed*3.6).toFixed(1)}км/ч`
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

        this.detailsSummaryConditionIcon= document.createElement('img');
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

        detailsSummaryCondition.append(this.detailsSummaryConditionIcon,this.detailsSummaryExtended);

        detailsSummaryWind.append(detailsSummaryWindIcon,  this.detailsSummaryWindText);

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
        

        const conditionsSummary = document.createElement('div');
        conditionsSummary.className = 'conditions-summary';

        this.temperatureValue = document.createElement('span');
        this.temperatureValue.className = 'temperature-value';
        this.temperatureValue.textContent = ``;

        this.weatherIcon = document.createElement('img');
        this.weatherIcon.className = 'weather-icon';

        const dataPoints = document.createElement('div');
        dataPoints.className = 'data-points';

        const dailyContentLabelDraft = document.createElement('div');
        dailyContentLabelDraft.className = 'daily-content--label';

        const precipIconBlockDraft = document.createElement('div');
        precipIconBlockDraft.className = 'icon-container precip-item';

        this.percentageValueDraft = document.createElement('span');
        this.percentageValueDraft.textContent = ``;

        dailyContentLabelDraft.append(precipIconBlockDraft, this.percentageValueDraft);

        const dailyContentLabelSpeed = document.createElement('div');
        dailyContentLabelSpeed.className = 'daily-content--label';

        const precipIconBlockSpeed = document.createElement('div');
        precipIconBlockSpeed.className = 'icon-container wind-item';

        this.percentageValueSpeed = document.createElement('span');
        this.percentageValueSpeed.textContent = ``;
        dailyContentLabelSpeed.append(precipIconBlockSpeed, this.percentageValueSpeed);

        dataPoints.append(dailyContentLabelDraft, dailyContentLabelSpeed);

        const detailsTableContainer = document.createElement('div');
        detailsTableContainer.className = 'details-table-container';

        const detailsTable = document.createElement('ul');
        detailsTable.className = 'details-table';

        const listItemHumidity = document.createElement('li');
        listItemHumidity.className = 'list-item';

        const humidityIcon = document.createElement('div');
        humidityIcon.className = 'icon-container humidity-item';

        const detailsTabeleFieldHumidity = document.createElement('div');
        detailsTabeleFieldHumidity.className = 'details-table--field';

        this.detailsTableLabelHumidity = document.createElement('span');
        this.detailsTableLabelHumidity.className = 'details-table--label';
        this.detailsTableLabelHumidity.textContent = this.props.language.getTranslateRu().humidity;

        this.detailsTableValueHumidity = document.createElement('span');
        this.detailsTableValueHumidity.className = 'details-table--value';
        this.detailsTableValueHumidity.textContent = ``;

        detailsTabeleFieldHumidity.append(this.detailsTableLabelHumidity, this.detailsTableValueHumidity);

        listItemHumidity.append(humidityIcon, detailsTabeleFieldHumidity);

        const listItemPressure = document.createElement('li');
        listItemPressure.className = 'list-item';

        const pressureIcon = document.createElement('div');
        pressureIcon.className = 'icon-container  pressure-item';

        const detailsTabeleFieldPressure = document.createElement('div');
        detailsTabeleFieldPressure.className = 'details-table--field';

        this.detailsTableLabelPressure = document.createElement('span');
        this.detailsTableLabelPressure.className = 'details-table--label';
        this.detailsTableLabelPressure.textContent = this.props.language.getTranslateRu().pressure;

        this.detailsTableValuePressure = document.createElement('span');
        this.detailsTableValuePressure.className = 'details-table--value';
        this.detailsTableValuePressure.textContent = ``;

        detailsTabeleFieldPressure.append(this.detailsTableLabelPressure, this.detailsTableValuePressure);

        listItemPressure.append(pressureIcon, detailsTabeleFieldPressure);

        const listItemFeelLike = document.createElement('li');
        listItemFeelLike.className = 'list-item';

        const feelLikeIcon = document.createElement('div');
        feelLikeIcon.className = 'icon-container temp-item';

        const detailsTabeleFieldFeelLike = document.createElement('div');
        detailsTabeleFieldFeelLike.className = 'details-table--field';

        this.detailsTableLabelFeelLike = document.createElement('span');
        this.detailsTableLabelFeelLike.className = 'details-table--label';
        this.detailsTableLabelFeelLike.textContent = this.props.language.getTranslateRu().feelsLike;

        this.detailsTableValueFeelLike = document.createElement('span');
        this.detailsTableValueFeelLike.className = 'details-table--value';
        this.detailsTableValueFeelLike.textContent = ``;

        detailsTabeleFieldFeelLike.append(this.detailsTableLabelFeelLike, this.detailsTableValueFeelLike);

        listItemFeelLike.append(feelLikeIcon, detailsTabeleFieldFeelLike);

        const listItemVisibility = document.createElement('li');
        listItemVisibility.className = 'list-item';

        const visibilityIcon = document.createElement('div');
        visibilityIcon.className = 'icon-container  visibility-item';

        const detailsTabeleFieldVisibility = document.createElement('div');
        detailsTabeleFieldVisibility.className = 'details-table--field';

        this.detailsTableLabelVisibility = document.createElement('span');
        this.detailsTableLabelVisibility.className = 'details-table--label';
        this.detailsTableLabelVisibility.textContent = this.props.language.getTranslateRu().visibility;

        this.detailsTableValueVisibility = document.createElement('span');
        this.detailsTableValueVisibility.className = 'details-table--value';
        this.detailsTableValueVisibility.textContent = ``;

        detailsTabeleFieldVisibility.append(this.detailsTableLabelVisibility, this.detailsTableValueVisibility);

        listItemVisibility.append(visibilityIcon, detailsTabeleFieldVisibility);

        conditionsSummary.append(this.temperatureValue, this.weatherIcon, dataPoints);
        dailyContent.append(this.dayOfTheWeek, conditionsSummary);
        detailsTable.append(listItemHumidity, listItemPressure, listItemFeelLike, listItemVisibility);
        detailsTableContainer.append(detailsTable);
        this.daypartDetails.append(dailyContent, detailsTableContainer);
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
   
    getDayofWeek(day:string){
        let date=new Date(day)
        let days=['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[date.getDay()]+ ' '+date.getDate();
    }
       
    
}
