import { HeaderController } from '../../../controller/HeaderController';
import { NotifyParameters, WeatherTodayData } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import './header.css';
import { ObserverToView } from '../../../model/ObserverToView';

interface HeaderComponentProps {
    controller: HeaderController;
    router: Router;
    observerToView: ObserverToView;
}

export class HeaderComponent extends BaseComponent<HeaderComponentProps> {
    private logo!: HTMLDivElement;
    private conversion!: HTMLDivElement;
    private langName!: HTMLDivElement;
    private langLogo!: HTMLDivElement;
    private temperatureUnit!: HTMLSelectElement;
    private headerLocation!: HTMLDivElement;
    private locationName!: HTMLSpanElement;
    private celsius!: HTMLOptionElement;
    private fahrenheit!: HTMLOptionElement;
    private temperature!: HTMLSpanElement;
    private headerNav!: HTMLUListElement;
    public componentToday!: HTMLLIElement;
    private componentFiveDays!: HTMLLIElement;
    public componentMap!: HTMLLIElement;
    private componentOtherForecast!: HTMLLIElement;
    private observerToView: ObserverToView;

    constructor(controller: HeaderController, router: Router, observerToView: ObserverToView) {
        super('header', { controller, router, observerToView }, 'header');
        this.observerToView = observerToView;
        this.observerToView.subscribe(<T>(params: NotifyParameters<T>) => this.setWeatherIndicators(params));
    }

    setWeatherIndicators<T>(params: NotifyParameters<T>) {
        const weatherData = <WeatherTodayData>params.message;

        this.temperature.textContent = `${Math.floor(weatherData.main.temp)}°`;

        this.locationName.textContent = `${weatherData.name}`;
    }

    protected render(): void {
        const headerContainer = document.createElement('div');
        headerContainer.className = 'header-container';

        const headerTools = document.createElement('div');
        headerTools.className = 'header-tools';

        this.logo = document.createElement('div');
        this.logo.textContent = 'Logo';
        this.logo.classList.add('header-logo');

        this.conversion = document.createElement('div');
        this.conversion.className = 'conversion';

        this.langName = document.createElement('div');
        this.langName.className = 'lang-name';
        this.langName.textContent = 'RU';

        this.langLogo = document.createElement('div');
        this.langLogo.className = 'lang-logo';

        this.temperatureUnit = document.createElement('select');
        this.temperatureUnit.className = 'temperature-unit';

        this.celsius = document.createElement('option');
        this.celsius.text = 'C°';

        this.fahrenheit = document.createElement('option');
        this.fahrenheit.text = '°F';

        this.temperatureUnit.append(this.celsius, this.fahrenheit);

        this.conversion.append(this.langLogo, this.langName, this.temperatureUnit);
        headerTools.append(this.logo, this.props.controller.searcherController.component.element, this.conversion);

        this.headerNav = document.createElement('ul');
        this.headerNav.classList.add('header-nav');

        this.componentToday = document.createElement('li');
        this.componentToday.textContent = 'Сегодня';

        this.componentFiveDays = document.createElement('li');
        this.componentFiveDays.textContent = 'На 5 дней';

        this.componentMap = document.createElement('li');
        this.componentMap.textContent = 'Карта';

        this.componentOtherForecast = document.createElement('li');
        this.componentOtherForecast.textContent = 'Другие прогнозы';

        this.headerNav.append(
            this.componentToday,
            this.componentFiveDays,
            this.componentMap,
            this.componentOtherForecast
        );

        this.headerLocation = document.createElement('div');
        this.headerLocation.className = 'header-location';
        const weatherPicture = document.createElement('div');
        this.temperature = document.createElement('span');
        this.locationName = document.createElement('span');

        this.headerLocation.append(weatherPicture, this.temperature, this.locationName);

        headerContainer.append(headerTools, this.headerLocation, this.headerNav);
        this.element.append(headerContainer);
    }

    protected addListeners(): void {
        this.headerNav.addEventListener('click', (event): void => {
            console.log(' this.headerNav :', this.headerNav);
            if (event.target === this.componentMap) {
                console.log('this.componentRadar :', this.componentMap);
                this.props.router.goTo('radar');
            }
            if (event.target === this.componentToday) {
                this.props.router.goTo('today');
            }
            if (event.target === this.componentFiveDays) {
                this.props.router.goTo('tenday');
            }
        });

        this.logo.addEventListener('click', (): void => {
            console.log(' this.logo :', this.logo);
            this.props.router.goTo('today');
        });
        this.componentOtherForecast.addEventListener('click', (): void => {
            // if (event.target === this.componentAirQuality) {
            this.props.router.goTo('air-quality');
            // }
        });
    }
}
