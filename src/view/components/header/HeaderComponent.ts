import { HeaderController } from '../../../controller/HeaderController';
import { NotifyParameters, WeatherTodayData } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import './header.css';
import { ObserverToView } from '../../../model/ObserverToView';
import { lang, langObj, weatherIconUrl } from '../../../constants';

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
    private componentAirQuality!: HTMLLIElement;
    private observerToView: ObserverToView;
    private weatherIcon!: HTMLImageElement;

    constructor(controller: HeaderController, router: Router, observerToView: ObserverToView) {
        super('header', { controller, router, observerToView }, 'header');
        this.observerToView = observerToView;
        this.observerToView.subscribe(<T>(params: NotifyParameters<T>) => this.setWeatherIndicatorsHeader(params));
    }

    setWeatherIndicatorsHeader<T>(params: NotifyParameters<T>) {
        const weatherData = <WeatherTodayData>params.message;
        console.log('weatherData :', weatherData);

        this.temperature.innerText = `${Math.round(weatherData.main.temp)}°`;
        console.log(' this.temperature.innerText  :',  this.temperature.innerText );

        this.locationName.innerText = `${weatherData.name}`;

        this.weatherIcon.src = `${weatherIconUrl}${weatherData.weather[0].icon}@2x.png`;
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
        this.componentToday.textContent = langObj[lang].today;

        this.componentFiveDays = document.createElement('li');
        this.componentFiveDays.textContent = langObj[lang].fiveDay;

        this.componentMap = document.createElement('li');
        this.componentMap.textContent = langObj[lang].map;

        this.componentAirQuality = document.createElement('li');
        this.componentAirQuality.textContent = langObj[lang].airQuality;

        this.headerNav.append(
            this.componentToday,
            this.componentFiveDays,
            this.componentMap,
            this.componentAirQuality
        );

        this.headerLocation = document.createElement('div');
        this.headerLocation.className = 'header-location';

        // this.headerLocation.textContent = ' this.headerLocation'

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
            // console.log(' this.logo :', this.logo);
            this.props.router.goTo('today');
        });
    }
}
