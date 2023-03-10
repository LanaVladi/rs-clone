import { HeaderController } from '../../../controller/HeaderController';
import INotify, { ModelEvent, NotifyParameters, pagesLang, WeatherId, weatherIndicators } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import { ObserverToView } from '../../../model/ObserverToView';
import { weatherIconUrl, weatherIconImgFormat, DataToBGStyle } from '../../../constants';
import './header.css';
import { TranslatorModel } from '../../../model/TranslatorModel';
import { convertUnixToDayNight } from '../../../utils';

interface HeaderComponentProps {
    controller: HeaderController;
    observerToView: ObserverToView;
    router: Router;
    language: TranslatorModel;
}

export class HeaderComponent extends BaseComponent<HeaderComponentProps> implements INotify {
    private logo!: HTMLDivElement;
    private conversion!: HTMLDivElement;
    private headerTools!: HTMLDivElement;
    private headerLocation!: HTMLDivElement;
    private headerBurgerButton!: HTMLDivElement;
    private locationName!: HTMLSpanElement;
    private temperature!: HTMLSpanElement;
    private weatherIcon!: HTMLImageElement;
    private headerNav!: HTMLUListElement;
    public componentToday!: HTMLLIElement;
    private componentFiveDays!: HTMLLIElement;
    public componentMap!: HTMLLIElement;
    private componentAirQuality!: HTMLLIElement;
    private observerToView: ObserverToView;
    public language: TranslatorModel;

    private storageKeyLang = 'lang';
    private startLang!: pagesLang;

    constructor(
        controller: HeaderController,
        router: Router,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super('header', { controller, router, observerToView, language }, 'header');
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

                this.componentToday.textContent = langObject.today;
                this.componentFiveDays.textContent = langObject.fiveDay;
                this.componentMap.textContent = langObject.map;
                this.componentAirQuality.textContent = langObject.airQuality;
                break;
            }
            case ModelEvent.today_weather_indicators: {
                const { temp, icon, cityName, countryCode, id, dataCalcTime, sunrise, sunset } = <weatherIndicators>(
                    params.message
                );
                this.temperature.textContent = `${temp}??`;
                this.locationName.textContent = `${cityName}, ${countryCode}`;
                this.weatherIcon.src = `${weatherIconUrl}${icon}${weatherIconImgFormat}`;

                this.updateBackground(id, dataCalcTime, sunrise, sunset);
            }
        }
    }

    protected render(): void {
        const headerContainer = document.createElement('div');
        headerContainer.className = 'header-container';

        const headerToolsWrapper = document.createElement('div');
        headerToolsWrapper.className = 'header-tools-wrapper';

        this.headerTools = document.createElement('div');
        this.headerTools.className = 'header-tools';

        this.logo = document.createElement('div');
        this.logo.classList.add('header-logo');

        this.conversion = document.createElement('div');
        this.conversion.className = 'conversion';

        this.conversion.append(
            this.props.controller.languageController.component.element,
            this.props.controller.tempUnitController.component.element
        );

        this.headerTools.append(
            this.props.controller.searcherController.component.element,
            this.props.controller.voiceControl.component.element,
            this.props.controller.geolocationController.component.element,
            this.conversion
        );

        this.headerBurgerButton = document.createElement('div');
        this.headerBurgerButton.id = 'header-burger-button';
        this.headerBurgerButton.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        headerToolsWrapper.append(this.logo, this.headerTools, this.headerBurgerButton);

        const headerNavContainer = document.createElement('nav');
        headerNavContainer.className = 'header-nav-container';

        this.headerNav = document.createElement('ul');
        this.headerNav.classList.add('header-nav');

        this.componentToday = document.createElement('li');
        this.componentToday.classList.add('header-nav-li');
        this.componentToday.textContent = this.props.language.getTranslateRu().today;

        this.componentFiveDays = document.createElement('li');
        this.componentFiveDays.classList.add('header-nav-li');
        this.componentFiveDays.textContent = this.props.language.getTranslateRu().fiveDay;

        this.componentMap = document.createElement('li');
        this.componentMap.classList.add('header-nav-li');
        this.componentMap.textContent = this.props.language.getTranslateRu().map;

        this.componentAirQuality = document.createElement('li');
        this.componentAirQuality.classList.add('header-nav-li');
        this.componentAirQuality.textContent = this.props.controller.language.getTranslateRu().airQuality;

        this.headerNav.append(this.componentToday, this.componentFiveDays, this.componentMap, this.componentAirQuality);
        headerNavContainer.append(this.headerNav);

        const headerLocationContainer = document.createElement('div');
        headerLocationContainer.className = 'header-location-container';

        const headerLocationItem = document.createElement('div');
        headerLocationItem.className = 'header-location-item';

        this.headerLocation = document.createElement('div');
        this.headerLocation.className = 'header-location';

        this.weatherIcon = document.createElement('img');
        this.weatherIcon.className = 'header__weather-icon';

        this.temperature = document.createElement('span');
        this.locationName = document.createElement('span');

        headerLocationItem.append(this.weatherIcon, this.temperature, this.locationName);
        this.headerLocation.append(headerLocationItem);
        headerLocationContainer.append(this.headerLocation);

        headerContainer.append(headerToolsWrapper, headerLocationContainer, headerNavContainer);
        this.element.append(headerContainer);
    }

    protected addListeners(): void {
        this.headerNav.addEventListener('click', (event): void => {
            if (event.target === this.componentToday) {
                this.props.router.goTo('today');
            }
            if (event.target === this.componentFiveDays) {
                this.props.router.goTo('five-days');
            }
            if (event.target === this.componentMap) {
                this.props.router.goTo('map');
            }
            if (event.target === this.componentAirQuality) {
                this.props.router.goTo('air-quality');
            }
        });

        this.logo.addEventListener('click', (): void => {
            this.props.router.goTo('today');
        });

        this.headerBurgerButton.addEventListener('click', () => {
            this.headerBurgerButton.classList.toggle('open');
            this.headerTools.classList.toggle('burger-open');
            document.body.classList.toggle('no-scroll-page');
        });
    }

    private updateBackground(id: number, dataCalcTime: number, sunrise: number, sunset: number) {
        const weatherId = id.toString() as WeatherId;
        const dayNight = convertUnixToDayNight(dataCalcTime, sunrise, sunset);
        const root = document.getElementById('root');
        const footer = document.querySelector<HTMLElement>('.footer');
        if (root && footer) {
            root.style.backgroundColor = DataToBGStyle[dayNight][weatherId].headerColor;
            root.style.backgroundImage = DataToBGStyle[dayNight][weatherId].backgroundGradient;
            footer.style.backgroundColor = DataToBGStyle[dayNight][weatherId].headerColor;
        }
    }
}
