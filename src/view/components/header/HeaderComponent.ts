import { HeaderController } from '../../../controller/HeaderController';
import INotify, { ModelEvent, NotifyParameters, pagesLang, weatherIndicators } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import { ObserverToView } from '../../../model/ObserverToView';
import { weatherIconUrl, weatherIconImgFormat } from '../../../constants';
import './header.css';

interface HeaderComponentProps {
    controller: HeaderController;
    observerToView: ObserverToView;
    router: Router;
}

export class HeaderComponent extends BaseComponent<HeaderComponentProps> implements INotify {
    private logo!: HTMLImageElement;
    private conversion!: HTMLDivElement;
    private headerLocation!: HTMLDivElement;
    private locationName!: HTMLSpanElement;
    private temperature!: HTMLSpanElement;
    private headerNav!: HTMLUListElement;
    public componentToday!: HTMLLIElement;
    private componentFiveDays!: HTMLLIElement;
    public componentMap!: HTMLLIElement;
    private componentAirQuality!: HTMLLIElement;
    private weatherIcon!: HTMLImageElement;
    private observerToView: ObserverToView;

    constructor(controller: HeaderController, router: Router, observerToView: ObserverToView) {
        super('header', { controller, router, observerToView }, 'header');
        this.observerToView = observerToView;
        this.observerToView.subscribe(ModelEvent.today_weather_indicators, this);
        this.observerToView.subscribe(ModelEvent.language, this);
        this.observerToView.subscribe(ModelEvent.temp_unit, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.language: {
                const langObject = <pagesLang>params.message;

                this.componentToday.textContent = langObject.today;
                this.componentFiveDays.innerText = langObject.fiveDay;
                this.componentMap.innerText = langObject.map;
                this.componentAirQuality.textContent = langObject.airQuality;
                break;
            }
            case ModelEvent.today_weather_indicators: {
                const { temp, icon, cityName, countryCode } = <weatherIndicators>params.message;

                this.temperature.innerText = `${temp}°`;
                this.locationName.innerText = `${cityName}, ${countryCode}`;
                this.weatherIcon.src = `${weatherIconUrl}${icon}${weatherIconImgFormat}`;
            }
        }
    }

    protected render(): void {
        const headerContainer = document.createElement('div');
        headerContainer.className = 'header-container';

        const headerTools = document.createElement('div');
        headerTools.className = 'header-tools';

        this.logo = document.createElement('img');
        this.logo.classList.add('header-logo');

        this.conversion = document.createElement('div');
        this.conversion.className = 'conversion';

        this.conversion.append(
            this.props.controller.languageController.component.element,
            this.props.controller.tempUnitController.component.element
        );

        headerTools.append(
            this.logo,
            this.props.controller.searcherController.component.element,
            this.props.controller.geolocationController.component.element,
            this.props.controller.voiceControl.component.element,
            this.conversion
        );

        this.headerNav = document.createElement('ul');
        this.headerNav.classList.add('header-nav');

        this.componentToday = document.createElement('li');
        this.componentToday.textContent = this.props.controller.language.getTranslateRu().today;

        this.componentFiveDays = document.createElement('li');
        this.componentFiveDays.textContent = this.props.controller.language.getTranslateRu().fiveDay;

        this.componentMap = document.createElement('li');
        this.componentMap.textContent = this.props.controller.language.getTranslateRu().map;

        this.componentAirQuality = document.createElement('li');
        this.componentAirQuality.textContent = this.props.controller.language.getTranslateRu().airQuality;

        this.headerNav.append(this.componentToday, this.componentFiveDays, this.componentMap, this.componentAirQuality);

        this.headerLocation = document.createElement('div');
        this.headerLocation.className = 'header-location';

        this.weatherIcon = document.createElement('img');
        this.weatherIcon.className = 'header__weather-icon';

        this.temperature = document.createElement('span');
        this.locationName = document.createElement('span');

        this.headerLocation.append(this.weatherIcon, this.temperature, this.locationName);

        headerContainer.append(headerTools, this.headerLocation, this.headerNav);
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
    }
}
