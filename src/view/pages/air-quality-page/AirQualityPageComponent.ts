import './AirQualityPageComponent.css';
import { AirQualityPageController } from '../../../controller/AirQualityPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import INotify, {
    LevelInfoKey,
    LevelKey,
    ModelEvent,
    NotifyParameters,
    pagesLang,
    PollutantNameKey,
    Pollutants,
    PollutantSettings,
    PollutantsIndicator,
} from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import { TranslatorModel } from '../../../model/TranslatorModel';
import aqiLib from 'aqi-us';

interface AirQualityPageComponentProps {
    controller: AirQualityPageController;
    router: Router;
    observerToView: ObserverToView;
    language: TranslatorModel;
}

export class AirQualityPageComponent extends BaseComponent<AirQualityPageComponentProps> implements INotify {
    private observerToView: ObserverToView;
    private airQualityMoreDetails!: HTMLDivElement;
    private popover!: HTMLDivElement;
    private popoverClose!: HTMLDivElement;
    private language: TranslatorModel;

    // private storageKeyLang = 'lang';
    // private startLang!: pagesLang;

    private title!: HTMLElement;
    private locationPageTitle!: HTMLSpanElement;
    private allPollutantsTitle!: HTMLDivElement;
    private primaryPollutantInfoTitle!: HTMLHeadingElement;
    private allPollutantCharts!: HTMLDivElement;
    private primaryPollutantContainer!: HTMLDivElement;
    private levelTitle!: HTMLSpanElement;
    private levelInfo!: HTMLParagraphElement;
    private bigChart!: HTMLDivElement;
    private primaryPollutantName!: HTMLSpanElement;
    private pollutantName!: HTMLSpanElement;
    private moreDetailsText!: HTMLSpanElement;
    private airQualityLevelsCaption!: HTMLHeadingElement;
    private AirQualityPopOverTitle!: HTMLHeadingElement;
    private AirQualityPopOverBody!: HTMLParagraphElement;
    private airQualityLevelsList!: HTMLDListElement;

    private MOLECULAR_WEIGHT_CO = 28.01;
    private MOLECULAR_WEIGHT_NO2 = 46.01;
    private MOLECULAR_WEIGHT_O3 = 48;
    private MOLECULAR_WEIGHT_SO2 = 64.06;
    private MICRO_G_IN_MILI_G = 1000;
    private VOLUME_BY_NORMAL_CONDITIONS = 24.45;
    private BIG_CYRCLE_LENGTH = 320.4424506661589;
    private CYRCLE_LENGTH = 169.64600329384882;
    private SEGMENT_COUNT = 6;

    private levelInfoObj = {
        goodInfo: 'Качество воздуха удовлетворительное, уровень загрязнений почти не вызывает опасений.',
        moderateInfo:
            'Качество воздуха приемлемое, однако для некоторых типов загрязнений есть средний риск воздействия на самочувствие малой части людей, чувствительных к загрязнению воздуха.',
        unhealthyForGroupsInfo:
            'Чувствительные люди могут испытывать проблемы со здоровьем. Вероятно, это не повлияет на остальные слои населения.',
        unhealthyInfo:
            'У любого человека могут начаться проблемы со здоровьем, воздействие на чувствительных людей может быть более серьезным.',
        veryUnhealthyInfo:
            'Предупреждения касательно здоровья, означающие экстренную ситуацию. Вполне возможно, что это повлияет на все население.',
        hazardousInfo:
            'Оповещение в отношении здоровья: все люди могут испытывать более серьезные проблемы со здоровьем.',
    };

    constructor(
        controller: AirQualityPageController,
        router: Router,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super('other-forecast-air-quality', { controller, router, observerToView, language }, 'div');
        this.observerToView = observerToView;
        this.language = language;

        // this.startLang = this.checkLocalStorageLanguage();
        // this.notify({ message: this.startLang, typeEvents: ModelEvent.language });

        this.observerToView.subscribe(ModelEvent.air_quality_forecast_indicators, this);
        this.observerToView.subscribe(ModelEvent.language, this);
        this.observerToView.subscribe(ModelEvent.temp_unit, this);
    }

    // protected checkLocalStorageLanguage() {
    //     if (!JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`)) {
    //         const startLangInit = 'ru';
    //         localStorage.setItem(this.storageKeyLang, JSON.stringify(startLangInit));
    //         return this.language.getTranslateRu();
    //     } else {
    //         const startLangInit = JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`);
    //         if (startLangInit === 'en') {
    //             return this.language.getTranslateEn();
    //         } else {
    //             return this.language.getTranslateRu();
    //         }
    //     }
    // }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.language: {
                const langObject = <pagesLang>params.message;
                this.title.textContent = langObject.airQualityToday;
                this.allPollutantsTitle.textContent = langObject.allPollutants;
                this.primaryPollutantInfoTitle.textContent = langObject.primaryPollutant;
                this.moreDetailsText.textContent = langObject.moreDetailsText;
                this.airQualityLevelsCaption.textContent = langObject.airQualityLevelsCaption;
                this.AirQualityPopOverTitle.textContent = langObject.AirQualityPopOverTitle;
                this.AirQualityPopOverBody.textContent = langObject.AirQualityPopOverBody;

                this.translatePrimaryPollutant(langObject);
                this.translateAllPollutantCharts(langObject);
                this.translateLevelList(langObject);
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
        this.title.textContent = 'Качество воздуха сегодня';

        this.locationPageTitle = document.createElement('span');
        this.locationPageTitle.textContent = 'Location'; //////DATA FROM HEADER
        titleContainer.append(this.title, ' - ', this.locationPageTitle);

        this.primaryPollutantContainer = document.createElement('div');
        this.primaryPollutantContainer.className = 'primary-pollutant-container';

        const allPollutantsContainer = document.createElement('div');
        allPollutantsContainer.className = 'all-pollutants-container';

        this.allPollutantsTitle = document.createElement('h2');
        this.allPollutantsTitle.className = 'all-pollutants-title';
        this.allPollutantsTitle.textContent = 'Все загрязняющие вещества';

        this.allPollutantCharts = document.createElement('div');
        this.allPollutantCharts.className = 'all-pollutant-charts';

        airQualityContainer.append(titleContainer, this.primaryPollutantContainer);
        allPollutantsContainer.append(this.allPollutantsTitle, this.allPollutantCharts, this.getAllPollutantsFooter());
        this.element.append(airQualityContainer, allPollutantsContainer);
    }

    public show() {
        return this.element;
    }

    private getAllPollutantsFooter(): HTMLDivElement {
        const element = document.createElement('div');
        element.className = 'all-pollutants-footer';

        this.airQualityMoreDetails = document.createElement('div');
        this.airQualityMoreDetails.className = 'air-quality-moreDetails';

        const infoIcon = document.createElement('span');
        infoIcon.className = 'info-icon';

        this.moreDetailsText = document.createElement('span');
        this.moreDetailsText.textContent = 'Индекс качества воздуха';

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
        AirQualityPopOverText.className = 'air-quality-popover-text';

        this.AirQualityPopOverTitle = document.createElement('h4');
        this.AirQualityPopOverTitle.className = 'air-quality-popover-title';
        this.AirQualityPopOverTitle.textContent = 'Источник';

        this.AirQualityPopOverBody = document.createElement('p');
        this.AirQualityPopOverBody.className = 'air-quality-popover-body';
        this.AirQualityPopOverBody.textContent =
            'Содержит данные службы мониторинга атмосферы Copernicus Atmosphere Monitoring Service за 2023 г. и/или измененные данные службы Copernicus Atmosphere Monitoring Service за 2023 г. Европейская комиссия и ЕЦСПП не несут ответственность за любое использование данной информации.';

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
        this.airQualityLevelsCaption.textContent = 'Уровни';

        this.airQualityLevelsList = document.createElement('ul');
        this.airQualityLevelsList.className = 'air-quality-levels-list';

        for (let i = 0; i < 6; i++) {
            const levels = [
                'Хорошее',
                'Среднее',
                'Вредное для чувствительных людей',
                'Вредные условия',
                'Очень вредные условия',
                'Опасно',
            ];
            const airQualityLevel = document.createElement('li');
            airQualityLevel.className = 'air-quality-level';

            const airQualityLevelColor = document.createElement('div');
            airQualityLevelColor.className = 'air-quality-levelColor';

            const airQualityLevelText = document.createElement('span');
            airQualityLevelText.textContent = levels[i];

            airQualityLevel.append(airQualityLevelColor, airQualityLevelText);
            this.airQualityLevelsList.append(airQualityLevel);
        }

        airQualityLevels.append(this.airQualityLevelsCaption, this.airQualityLevelsList);
        return airQualityLevels;
    }

    private openMoreDetails(): void {
        this.popover.classList.add('popover-active');
    }

    private closeMoreDetails(): void {
        this.popover.classList.remove('popover-active');
    }

    private renderPrymaryPollutant(pollutants: Pollutants): void {
        this.primaryPollutantContainer.innerHTML = '';
        const primaryPollutant = this.getPrimaryPollutant(pollutants);
        const pollutantShortName = primaryPollutant[0];
        const pollutantFullName = this.getPollutantFullName(pollutantShortName);
        const aqi = primaryPollutant[1];
        const { level, levelInfo, levelAttribute } = this.getPollutantSettings(aqi);

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
        this.primaryPollutantInfoTitle.textContent = 'Первичный загрязнитель:';

        this.primaryPollutantName = document.createElement('span');
        this.primaryPollutantName.textContent = pollutantFullName;

        primaryPollutantInfo.append(this.primaryPollutantInfoTitle, this.primaryPollutantName);

        this.primaryPollutantContainer.setAttribute('data-pollutant', pollutantShortName);
        this.primaryPollutantContainer.setAttribute('data-level', levelAttribute);
        this.primaryPollutantContainer.append(primaryIndicator, primaryPollutantInfo);
    }

    private getPrimaryPollutant(pollutants: Pollutants): [string, number] {
        const prymaryPollutant = Object.entries(pollutants)
            .filter((pollutant) => pollutant[0] !== 'nh3' && pollutant[0] !== 'no')
            .map((pollutant) => {
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
        this.allPollutantCharts.innerHTML = '';
        Object.entries(pollutants)
            .filter((pollutant) => pollutant[0] !== 'nh3' && pollutant[0] !== 'no')
            .forEach((pollutant) => {
                const airQualityItem = this.getAirQualityItem(pollutant);
                this.allPollutantCharts.append(airQualityItem);
            });
    }

    private getAirQualityItem(pollutant: [string, number]): HTMLDivElement {
        const aqi = this.convertToAqi(pollutant);
        const { level, levelAttribute } = this.getPollutantSettings(aqi);

        const item = document.createElement('div');
        item.className = 'air-quality-item';

        const chart = document.createElement('div');
        chart.className = 'air-quality-item__chart';
        chart.innerHTML = this.getChart(aqi);

        const pollutantInfo = document.createElement('div');
        pollutantInfo.className = 'air-quality-item__pollutant-info';

        this.pollutantName = document.createElement('span');
        this.pollutantName.className = 'pollutant-info__name';
        this.pollutantName.textContent = this.getPollutantFullName(pollutant[0]);

        const pollutantLevel = document.createElement('span');
        pollutantLevel.className = 'pollutant-info__lavel';
        pollutantLevel.setAttribute('data-level', levelAttribute);
        pollutantLevel.textContent = level;

        const concentration = document.createElement('span');
        concentration.className = 'pollutant-info__concentration';
        concentration.textContent = `${pollutant[1]} `;

        const units = document.createElement('span');
        units.textContent = 'мкг/м3';
        concentration.append(units);

        pollutantInfo.append(this.pollutantName, pollutantLevel, concentration);
        item.append(chart, pollutantInfo);
        return item;
    }

    // IMPLEMENT TRANSLATE!!!
    private getPollutantFullName(pollutantShortName: string): string {
        switch (pollutantShortName) {
            case 'co':
                return 'CO (Монооксид углерода)';
            case 'no2':
                return 'NO2 (Оксид азота)';
            case 'o3':
                return 'O3 (Озон)';
            case 'pm2_5':
                return 'PM2.5 (Взвешенных частиц меньше 2,5 микрона)';
            case 'pm10':
                return 'PM10 (Взвешенных частиц меньше 10 микрон)';
            case 'so2':
                return 'SO2 (Диоксид серы)';
            default:
                return '';
        }
    }

    private getBigChart(aqi: number): string {
        const { color, factor } = this.getPollutantSettings(aqi);
        const currentSector = (this.BIG_CYRCLE_LENGTH / this.SEGMENT_COUNT) * factor;
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
        const currentSector = (this.CYRCLE_LENGTH / this.SEGMENT_COUNT) * factor;
        return `
            <svg width="54" height="54" style="border-radius: 50%;display: block;">
                <circle r="27" cx="27" cy="27" transform="rotate(90 27 27)" style="stroke-width:10;stroke: #e7ecf1;" fill='#0000'></circle>
                <circle r="27" cx="27" cy="27" transform="rotate(90 27 27)" style="stroke-width:10;stroke-dasharray:${currentSector} 169.64600329384882;stroke: ${color};transition: stroke-dasharray .3s ease;" fill='#0000'></circle>
                <text x="50%" y="55%" dominant-baseline="middle" alignment-baseline="middle" text-anchor="middle" style="font-size: 1.6rem">${aqi}</text>
            </svg>
        `;
    }

    // IMPLEMENT TRANSLATE!!!
    private getPollutantSettings(aqi: number): PollutantSettings {
        let color: string;
        let factor: number;
        let level: string;
        let levelInfo: string;
        let levelAttribute: string;

        if (aqi >= 0 && aqi < 50) {
            color = '#00E838';
            factor = 1;
            level = 'Хорошее';
            levelInfo = this.levelInfoObj.goodInfo;
            levelAttribute = 'good';
        } else if (aqi >= 50 && aqi < 100) {
            color = '#FFFF24';
            factor = 2;
            level = 'Среднее';
            levelInfo = this.levelInfoObj.moderateInfo;
            levelAttribute = 'moderate';
        } else if (aqi >= 100 && aqi < 150) {
            color = '#FF7200';
            factor = 3;
            level = 'Вредное для чувствительных людей';
            levelInfo = this.levelInfoObj.unhealthyForGroupsInfo;
            levelAttribute = 'unhealthyForGroups';
        } else if (aqi >= 150 && aqi < 200) {
            color = '#f00';
            factor = 4;
            level = 'Вредные условия';
            levelInfo = this.levelInfoObj.unhealthyInfo;
            levelAttribute = 'unhealthy';
        } else if (aqi >= 200 && aqi < 300) {
            color = '#9d3d8c';
            factor = 5;
            level = 'Очень вредные условия';
            levelInfo = this.levelInfoObj.veryUnhealthyInfo;
            levelAttribute = 'veryUnhealthy';
        } else {
            color = '#8d0021';
            factor = 6;
            level = 'Опасно';
            levelInfo = this.levelInfoObj.hazardousInfo;
            levelAttribute = 'hazardous';
        }
        return { color, factor, level, levelInfo, levelAttribute };
    }

    private convertToAqi(pollutant: [string, number]): number {
        const name = pollutant[0];
        const value = pollutant[1];

        switch (name) {
            case 'co': {
                const co_ppm =
                    (this.VOLUME_BY_NORMAL_CONDITIONS * value) / this.MICRO_G_IN_MILI_G / this.MOLECULAR_WEIGHT_CO;
                return aqiLib.co(co_ppm);
            }
            case 'no2': {
                const no2_ppb = (this.VOLUME_BY_NORMAL_CONDITIONS * value) / this.MOLECULAR_WEIGHT_NO2;
                return aqiLib.no2(no2_ppb);
            }
            case 'o3': {
                const o3_ppb = (this.VOLUME_BY_NORMAL_CONDITIONS * value) / this.MOLECULAR_WEIGHT_O3;
                const o3_1hr_aqi = aqiLib.o3_1hr(o3_ppb);
                const o3_8hr_aqi = aqiLib.o3_8hr(o3_ppb);
                return o3_1hr_aqi || o3_8hr_aqi;
            }
            case 'pm10': {
                return aqiLib.pm10(value);
            }
            case 'pm2_5': {
                return aqiLib.pm25(value);
            }
            case 'so2': {
                const so2_ppb = (this.VOLUME_BY_NORMAL_CONDITIONS * value) / this.MOLECULAR_WEIGHT_SO2;
                return aqiLib.so2(so2_ppb);
            }
            default: {
                return 0;
            }
        }
    }

    private translateLevelList(langObject: pagesLang) {
        const keys: Array<LevelKey> = [
            'good',
            'moderate',
            'unhealthyForGroups',
            'unhealthy',
            'veryUnhealthy',
            'hazardous',
        ];
        const list = this.airQualityLevelsList.childNodes;

        list.forEach((el, i) => {
            const levelText = el.childNodes[1];
            levelText.textContent = langObject[keys[i]];
        });
    }

    private translateAllPollutantCharts(langObject: pagesLang) {
        const keys: Array<PollutantNameKey> = ['co', 'no2', 'o3', 'so2', 'pm2_5', 'pm10'];
        const list = this.allPollutantCharts.childNodes;

        list.forEach((el, i) => {
            const pollutantName = el.childNodes[1].childNodes[0];
            const pollutantLevel = el.childNodes[1].childNodes[1] as HTMLSpanElement;
            const pollutantUnits = el.childNodes[1].childNodes[2].childNodes[1];
            const levelAttribute = pollutantLevel.getAttribute('data-level') as LevelKey;

            pollutantLevel.textContent = langObject[levelAttribute];
            pollutantName.textContent = langObject[keys[i]];
            pollutantUnits.textContent = langObject.pollutantUnits;
        });
    }

    private translatePrimaryPollutant(langObject: pagesLang) {
        const level = this.primaryPollutantContainer.childNodes[0].childNodes[1].childNodes[0];
        const levelInfo = this.primaryPollutantContainer.childNodes[0].childNodes[1].childNodes[1];
        const pollutantName = this.primaryPollutantContainer.childNodes[1].childNodes[1];

        const levelKey = this.primaryPollutantContainer.getAttribute('data-level') as LevelKey;
        const levelInfoKey: LevelInfoKey = `${levelKey}Info`;
        const pollutantKey = this.primaryPollutantContainer.getAttribute('data-pollutant') as PollutantNameKey;

        level.textContent = langObject[levelKey];
        levelInfo.textContent = langObject[levelInfoKey];
        pollutantName.textContent = langObject[pollutantKey];
    }
}
