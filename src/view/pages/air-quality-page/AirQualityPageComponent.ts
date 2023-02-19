import './AirQualityPageComponent.css'
import { AirQualityPageController } from '../../../controller/AirQualityPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import INotify, { ModelEvent, NotifyParameters, pagesLang, Pollutants, PollutantsIndicator, WeatherTodayData } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import { TranslatorModel } from '../../../model/TranslatorModel';
import aqiLib from 'aqi-us';

const MOLECULAR_WEIGHT_CO = 28.01;
const MOLECULAR_WEIGHT_NO2 = 46.01;
const MOLECULAR_WEIGHT_O3 = 48;
const MOLECULAR_WEIGHT_SO2 = 64.06;
const MICRO_G_IN_MILI_G = 1000;
const VOLUME_BY_NORMAL_CONDITIONS = 24.45;
const BIG_CYRCLE_LENGTH = 320.4424506661589;
const CYRCLE_LENGTH = 169.64600329384882;
const SEGMENT_COUNT = 6;

type PollutantSettings = {
    color: string;
    factor: number;
    level: string;
    levelInfo: string;
}

interface AirQualityPageComponentProps {
    controller: AirQualityPageController;
    router: Router;
    observerToView: ObserverToView;
    language: TranslatorModel;
}

const language = {
    "Today's Air Quality": "",
    "Primary Pollutant:": "",
    "All Pollutants": "",
    "Air Quality Index": "",
    "Levels": "",
    "Good": "Хорошее",
    "Moderate": "Среднее",
    "Unhealthy for Sensitive Groups": "Вредное для чувствительных людей",
    "Unhealthy": "Вредные условия",
    "Very Unhealthy": "Очень вредные условия",
    "Hazardous": "Опасно",
    "Contains Copernicus Atmosphere Monitoring Service information 2023 and/or modified Copernicus Atmosphere Monitoring Service information 2023": "",
    "Neither the European Commission nor ECMWF is responsible for any use of this information": "",
    "Ozone": "",
    "Carbon Monoxide": "",
    "Nitrogen Dioxide": "",
    "Particulate matter less than 10 microns": "",
    "PM2.5 (Particulate matter less than 2.5 microns": "",
    "Sulfur Dioxide": "",
    "µg/m3": "",
    "Air quality is considered satisfactory, and air pollution poses little or no risk.": "",
    "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.": "Качество воздуха приемлемое, однако для некоторых типов загрязнений есть средний риск воздействия на самочувствие малой части людей, чувствительных к загрязнению воздуха.",
    "Members of sensitive groups may experience health effects. The general public is not likely to be affected.": "",
    "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.": "Предупреждения касательно здоровья, означающие экстренную ситуацию. Вполне возможно, что это повлияет на все население.",
    "Health warnings of emergency conditions. The entire population is more likely to be affected.": "",

}

export class AirQualityPageComponent extends BaseComponent<AirQualityPageComponentProps> implements INotify {
    private observerToView: ObserverToView;
    private airQualityMoreDetails!: HTMLDivElement;
    private popover!: HTMLDivElement;
    private popoverClose!: HTMLDivElement;
    private language: TranslatorModel;
    
    
    private title!: HTMLElement;
    private locationPageTitle!: HTMLSpanElement;
    private allPollutantsHeader!: HTMLDivElement;
    private primaryPollutantInfoTitle!: HTMLHeadingElement;
    private allPollutantCharts!: HTMLDivElement;
    private primaryPollutantContainer!: HTMLDivElement;
    private levelTitle!: HTMLSpanElement;
    private levelInfo!: HTMLParagraphElement;
    private bigChart!: HTMLDivElement;
    private primaryPollutantName!: HTMLSpanElement;
    private pollutantName!: HTMLSpanElement;
    private units!: HTMLSpanElement;
    private moreDetailsText!: HTMLSpanElement;
    private airQualityLevelsCaption!: HTMLHeadingElement;
    private AirQualityPopOverTitle!: HTMLSpanElement;
    private AirQualityPopOverBody!: HTMLParagraphElement;



    constructor(
        controller: AirQualityPageController,
        router: Router,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super('other-forecast-air-quality', { controller, router, observerToView, language }, 'div');
        this.observerToView = observerToView;
        this.language = language;
        this.observerToView.subscribe(ModelEvent.air_quality_forecast_indicators, this);
        this.observerToView.subscribe(ModelEvent.language, this);
        this.observerToView.subscribe(ModelEvent.temp_unit, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.language: {
                const langObject = <pagesLang>params.message;
                this.title.textContent = langObject.airQualityToday
                this.allPollutantsHeader.textContent = langObject.allPollutants;
                this.primaryPollutantInfoTitle.textContent = langObject.primaryPollutant;
                this.units.textContent = langObject.pollutantUnits;
                this.moreDetailsText.textContent = langObject.moreDetailsText;
                this.airQualityLevelsCaption.textContent = langObject.airQualityLevelsCaption;
                this.AirQualityPopOverTitle.textContent = langObject.AirQualityPopOverTitle;
                this.AirQualityPopOverBody.textContent = langObject.AirQualityPopOverBody;
                break;
            }
            case ModelEvent.air_quality_forecast_indicators: {
                const { pollutants } = <PollutantsIndicator>params.message;
                this.renderPrymaryPollutant(pollutants);
                this.renderAllPollutants(pollutants);
            }
        }
    }

    protected render(): void {
        const airQualityContainer = document.createElement('div');
        airQualityContainer.className = 'air-quality-container';

        const titleContainer = document.createElement('h1');
        titleContainer.className = 'air-quality-title';

        this.title = document.createElement('strong');

        this.locationPageTitle = document.createElement('span');
        this.locationPageTitle.textContent = 'Location';//////DATA FROM HEADER
        titleContainer.append(this.title, ' - ', this.locationPageTitle);

        this.primaryPollutantContainer = document.createElement('div');
        this.primaryPollutantContainer.className = 'primary-pollutant-container';

        const allPollutantsContainer = document.createElement('div');
        allPollutantsContainer.className = 'all-pollutants-container';

        this.allPollutantsHeader = document.createElement('h2');

        this.allPollutantCharts = document.createElement('div');
        this.allPollutantCharts.className = 'all-pollutant-charts';

        airQualityContainer.append(titleContainer, this.primaryPollutantContainer);
        allPollutantsContainer.append(this.allPollutantsHeader, this.allPollutantCharts, this.getAllPollutantsFooter());
        this.element.append(airQualityContainer, allPollutantsContainer);
    }

    getAllPollutantsFooter(): HTMLDivElement {
        const element = document.createElement('div');
        element.className = 'all-pollutants-footer';

        this.airQualityMoreDetails = document.createElement('div');
        this.airQualityMoreDetails.className = 'air-quality-moreDetails';

        const infoIcon = document.createElement('span');
        infoIcon.className = 'info-icon';

        this.moreDetailsText = document.createElement('span');

        this.airQualityMoreDetails.append(infoIcon, this.moreDetailsText);
        this.airQualityMoreDetails.addEventListener('click', this.openMoreDetails.bind(this));

        this.popover = document.createElement('div');
        this.popover.className = 'popover';

        const popoverCloseContainer = document.createElement('div');
        popoverCloseContainer.className = 'popover-close-container';

        this.popoverClose = document.createElement('div');
        this.popoverClose.className = 'popover-close';

        this.popoverClose.addEventListener('click', this.closeMoreDetails.bind(this));

        const popoverClosePad = document.createElement('div');
        popoverClosePad.className = 'popover-closepad';

        const airQualityPopOverContent = document.createElement('div');
        airQualityPopOverContent.className = 'air-quality-popover-content';
        
        const AirQualityPopOverText = document.createElement('div');
        AirQualityPopOverText.className = 'air-Quality-popover-text';

        this.AirQualityPopOverTitle = document.createElement('span');
        this.AirQualityPopOverTitle.className = 'air-Quality-popover-title';

        this.AirQualityPopOverBody = document.createElement('p');
        this.AirQualityPopOverBody.className = 'air-Quality-popover-body';

        AirQualityPopOverText.append(this.AirQualityPopOverTitle, this.AirQualityPopOverBody);
        airQualityPopOverContent.append(this.getAirQualityLevels(), AirQualityPopOverText);
        popoverClosePad.append(airQualityPopOverContent);
        popoverCloseContainer.append(this.popoverClose, popoverClosePad);
        this.popover.append(popoverCloseContainer);
        element.append(this.airQualityMoreDetails, this.popover);
        return element;
    }

    // IMPLEMENT TRANSLATE!!!
    private getAirQualityLevels(): HTMLDivElement {
        const airQualityLevels = document.createElement('div');
        airQualityLevels.className = 'air-quality-levels';

        this.airQualityLevelsCaption = document.createElement('h4');
        this.airQualityLevelsCaption.className = 'air-quality-levels-caption';

        const airQualityLevelsList = document.createElement('ul');
        airQualityLevelsList.className = 'air-quality-levels-list';

        for (let i = 0; i < 6; i++) {
            const levels = ['Хорошее', 'Среднее', 'Вредное для чувствительных людей', 'Вредные условия', 'Очень вредные условия', 'Опасно' ];
            const airQualityLevel = document.createElement('li');
            airQualityLevel.className = 'air-quality-level;'
            
            const airQualityLevelColor = document.createElement('div');
            airQualityLevelColor.className = 'air-quality-levelColor';

            const airQualityLevelText = document.createElement('span');
            airQualityLevelText.textContent = levels[i];

            airQualityLevel.append(airQualityLevelColor, airQualityLevelText);
            airQualityLevelsList.append(airQualityLevel);
        }

        airQualityLevels.append(this.airQualityLevelsCaption, airQualityLevelsList);
        return airQualityLevels;
    }

    private openMoreDetails() {
        this.popover.classList.add('popover-active');
    }

    private closeMoreDetails() {
        this.popover.classList.remove('popover-active');
    }

    private renderPrymaryPollutant(pollutants: Pollutants): void {
        const primaryPollutant = this.getPrimaryPollutant(pollutants);
        const pollutantShortName = primaryPollutant[0];
        const pollutantFullName = this.getPollutantFullName(pollutantShortName);
        const aqi = primaryPollutant[1];
        const { level, levelInfo } = this.getPollutantSettings(aqi);

        const primaryIndicator = document.createElement('div');
        primaryIndicator.className = 'primary-indicator';

        this.bigChart = document.createElement('div');
        this.bigChart.innerHTML = this.getBigChart(aqi);

        const indicatorLevel = document.createElement('div');
        indicatorLevel.className = 'primary-indicator__level';

        this.levelTitle = document.createElement('span');
        this.levelTitle.textContent = level;

        this.levelInfo = document.createElement('p');
        this.levelInfo.textContent = levelInfo;

        indicatorLevel.append(this.levelTitle, this.levelInfo);
        primaryIndicator.append(this.bigChart, indicatorLevel);

        const primaryPollutantInfo = document.createElement('div');
        primaryPollutantInfo.className = 'primary-pollutant__info';

        this.primaryPollutantInfoTitle = document.createElement('h4');

        this.primaryPollutantName = document.createElement('span');
        this.primaryPollutantName.textContent = pollutantFullName;/////////

        primaryPollutantInfo.append(this.primaryPollutantInfoTitle, this.primaryPollutantName)

        this.primaryPollutantContainer.append(primaryIndicator, primaryPollutantInfo);
    }

    private getPrimaryPollutant(pollutants: Pollutants): [string, number] {
        const prymaryPollutant = Object.entries(pollutants)
            .filter(pollutant => pollutant[0] !== 'nh3' && pollutant[0] !== 'no')
            .map(pollutant => {
                pollutant[1] = this.convertToAqi(pollutant);
                return pollutant;
            })
            .sort((a, b) => {
                if (a[1] > b[1]) return -1;
                if (a[1] < b[1]) return 1;
                return 0;
            })[0];
        return prymaryPollutant;
    }

    private renderAllPollutants(pollutants: Pollutants): void {
        Object.entries(pollutants)
            .filter(pollutant => pollutant[0] !== 'nh3' && pollutant[0] !== 'no')
            .forEach((pollutant) => {
                const airQualityItem = this.getAirQualityItem(pollutant);
                this.allPollutantCharts.append(airQualityItem);
            });
    }

    private getAirQualityItem(pollutant: [string, number]): HTMLDivElement {
        const aqi = this.convertToAqi(pollutant);
        const { level } = this.getPollutantSettings(aqi)

        const item = document.createElement('div');
        item.className = 'air-quality-item';

        const chart = document.createElement('div');
        chart.className = 'air-quality-item__chart';
        chart.innerHTML = this.getChart(aqi);

        const pollutantInfo = document.createElement('div');
        pollutantInfo.className = 'air-quality-item__pollutant-info';

        this.pollutantName = document.createElement('span');
        this.pollutantName.className = 'pollutant-info__name';
        this.pollutantName.textContent = `${pollutant[0] === 'pm2_5' ? 'PM2.5' : pollutant[0].toUpperCase()} (${this.getPollutantFullName(pollutant[0])})`;

        const pollutantLevel = document.createElement('span');
        pollutantLevel.className = 'pollutant-info__lavel';
        pollutantLevel.textContent = level;

        const concentration = document.createElement('span');
        concentration.className = 'pollutant-info__concentration';
        concentration.textContent = `${pollutant[1]} `

        this.units = document.createElement('span');
        concentration.append(this.units);

        pollutantInfo.append(this.pollutantName, pollutantLevel, concentration);
        item.append(chart, pollutantInfo);
        return item;
    }

    // IMPLEMENT TRANSLATE!!!
    private getPollutantFullName(pollutantShortName: string): string {
        switch (pollutantShortName) {
            case 'co':
                return 'Carbon Monoxide';
            case 'no2':
                return 'Nitrogen Dioxide';
            case 'o3':
                return 'Ozone';
            case 'pm2_5':
                return 'Particulate matter less than 2.5 microns';
            case 'pm10':
                return 'Particulate matter less than 10 microns';
            case 'so2':
                return 'Sulfur Dioxide';
            default:
                return '';
        }
    }

    private getBigChart(aqi: number): string {
        const { color, factor } = this.getPollutantSettings(aqi);
        const currentSector = BIG_CYRCLE_LENGTH / SEGMENT_COUNT * factor;
        return `
            <svg width="102" height="102" style="border-radius: 50%;display: block;">
                <circle r="51" cx="51" cy="51" transform="rotate(90 51 51)" style="stroke-width:10;stroke: #e7ecf1;" fill='#0000'></circle>
                <circle r="51" cx="51" cy="51" transform="rotate(90 51 51)" style="stroke-width:10;stroke-dasharray:${currentSector} 320.4424506661589;stroke: ${color};transition: stroke-dasharray .3s ease;" fill='#0000'></circle>
                <text x="50%" y="55%" dominant-baseline="middle" alignment-baseline="middle" text-anchor="middle" style="font-size: 4.2rem">${aqi}</text>
            </svg>
        `;
    }

    private getChart(aqi: number): string {
        const { color, factor } = this.getPollutantSettings(aqi);
        const currentSector = CYRCLE_LENGTH / SEGMENT_COUNT * factor;
        return `
            <svg width="54" height="54" style="border-radius: 50%;display: block;">
                <circle r="27" cx="27" cy="27" transform="rotate(90 27 27)" style="stroke-width:10;stroke: #e7ecf1;" fill='#0000'></circle>
                <circle r="27" cx="27" cy="27" transform="rotate(90 27 27)" style="stroke-width:10;stroke-dasharray:${currentSector} 169.64600329384882;stroke: ${color};transition: stroke-dasharray .3s ease;" fill='#0000'></circle>
                <text x="50%" y="55%" dominant-baseline="middle" alignment-baseline="middle" text-anchor="middle">${aqi}</text>
            </svg>
        `;
    }

    // IMPLEMENT TRANSLATE!!!
    private getPollutantSettings(aqi: number): PollutantSettings {
        let color: string;
        let factor: number;
        let level: string;
        let levelInfo: string;

        if (aqi >= 0 && aqi < 50) {
            color = '#00E838';
            factor = 1;
            level = 'Good';
            levelInfo = 'goodInfo';
        } else if (aqi >= 50 && aqi < 100) {
            color = '#FFFF24';
            factor = 2;
            level = 'Moderate';
            levelInfo = 'moderateInfo';
        } else if (aqi >= 100 && aqi < 150) {
            color = '#FF7200';
            factor = 3;
            level = 'Unhealthy for Sensitive Groups';
            levelInfo = 'unhealthyForGroupsInfo';
        } else if (aqi >= 150 && aqi < 200) {
            color = '#f00';
            factor = 4;
            level = 'Unhealthy';
            levelInfo = 'unhealthyInfo';
        } else if (aqi >= 200 && aqi < 300) {
            color = '#9d3d8c';
            factor = 5;
            level = 'Very Unhealthy';
            levelInfo = 'veryUnhealthyInfo';
        } else {
            color = '#8d0021';
            factor = 6;
            level = 'Hazardous';
            levelInfo = 'hazardousInfo';
        }
        return { color, factor, level, levelInfo };
    }

    private convertToAqi(pollutant: [string, number]): number {
        const name = pollutant[0];
        const value = pollutant[1];

        switch (name) {
            case 'co':
                const co_ppm = VOLUME_BY_NORMAL_CONDITIONS * value / MICRO_G_IN_MILI_G / MOLECULAR_WEIGHT_CO;
                return aqiLib.co(co_ppm);
            case 'no2':
                const no2_ppb = VOLUME_BY_NORMAL_CONDITIONS * value / MOLECULAR_WEIGHT_NO2;
                return aqiLib.no2(no2_ppb);
            case 'o3':
                const o3_ppb = VOLUME_BY_NORMAL_CONDITIONS * value / MOLECULAR_WEIGHT_O3;
                const o3_1hr_aqi = aqiLib.o3_1hr(o3_ppb);
                const o3_8hr_aqi = aqiLib.o3_8hr(o3_ppb);
                return o3_1hr_aqi || o3_8hr_aqi;
            case 'pm10':
                return aqiLib.pm10(value);
            case 'pm2_5':
                return aqiLib.pm25(value);
            case 'so2':
                const so2_ppb = VOLUME_BY_NORMAL_CONDITIONS * value / MOLECULAR_WEIGHT_SO2;
                return aqiLib.so2(so2_ppb);
            default:
                return 0;
        }
    }
}
