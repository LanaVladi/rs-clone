import { HeaderController } from '../../controller/HeaderController';
import { BaseComponent } from '../BaseComponent';
import { Router } from '../Router';
import './header.css';

interface HeaderComponentProps {
    controller: HeaderController;
    router: Router;
}

export class HeaderComponent extends BaseComponent<HeaderComponentProps> {
    private logo!: HTMLDivElement;
    private search!: HTMLDivElement;
    private searchInput!: HTMLInputElement;
    private searchIcon!: HTMLDivElement;
    private conversion!: HTMLDivElement;
    private langName!: HTMLDivElement;
    private langLogo!: HTMLDivElement;
    private temperature!: HTMLSelectElement;
    private celsius!: HTMLOptionElement;
    private fahrenheit!: HTMLOptionElement;
    private headerNav!: HTMLUListElement;
    private componentToday!: HTMLLIElement;
    private componentTimeWeather!: HTMLLIElement;
    private componentTenDays!: HTMLLIElement;
    private componentWeekend!: HTMLLIElement;
    private componentMonth!: HTMLLIElement;
    private componentRadar!: HTMLLIElement;
    private componentOtherForecast!: HTMLLIElement;
    private weatherPicture!: HTMLDivElement;
    private nameLocation!: HTMLDivElement;
    constructor(controller: HeaderController, router: Router) {
        super('header', { controller, router }, 'header');
    }

    protected render(): void {
        const headerContainer = document.createElement('div');
        headerContainer.className = 'header-container';

        const headerTools = document.createElement('div');
        headerTools.className = 'header-tools';

        this.logo = document.createElement('div');
        this.logo.textContent = 'Logo';
        this.logo.className = 'header-logo';

        this.search = document.createElement('div');
        this.search.className = 'search';

        this.searchInput = document.createElement('input');
        this.searchInput.placeholder = 'Поиск по городу или индексу';
        this.searchInput.type = 'search';

        this.searchIcon = document.createElement('div');
        this.searchIcon.className = 'search-icon';

        this.conversion = document.createElement('div');
        this.conversion.className = 'conversion';

        this.langName = document.createElement('div');
        this.langName.className = 'lang-name';
        this.langName.textContent = 'RU';

        this.langLogo = document.createElement('div');
        this.langLogo.className = 'lang-logo';

        this.temperature = document.createElement('select');
        this.temperature.className = 'temperature';

        this.celsius = document.createElement('option');
        this.celsius.text = 'C°';

        this.fahrenheit = document.createElement('option');
        this.fahrenheit.text = '°F';

        this.temperature.append(this.celsius, this.fahrenheit);

        this.search.append(this.searchInput, this.searchIcon);
        this.conversion.append(this.langLogo, this.langName, this.temperature);
        headerTools.append(this.logo, this.search, this.conversion);

        this.headerNav = document.createElement('ul');
        this.headerNav.className = 'header-nav';

        this.componentToday = document.createElement('li');
        this.componentToday.textContent = 'Сегодня';

        this.componentTimeWeather = document.createElement('li');
        this.componentTimeWeather.textContent = 'Почасовой прогноз';

        this.componentTenDays = document.createElement('li');
        this.componentTenDays.textContent = 'На 10 дней';

        this.componentWeekend = document.createElement('li');
        this.componentWeekend.textContent = 'Выходные';

        this.componentMonth = document.createElement('li');
        this.componentMonth.textContent = 'На месяц';

        this.componentRadar = document.createElement('li');
        this.componentRadar.textContent = 'Радар';

        this.componentOtherForecast = document.createElement('li');
        this.componentOtherForecast.textContent = 'Другие прогнозы';

        this.headerNav.append(
            this.componentToday,
            this.componentTimeWeather,
            this.componentTenDays,
            this.componentWeekend,
            this.componentMonth,
            this.componentRadar,
            this.componentOtherForecast
        );

        const headerLocation = document.createElement('div');
        headerLocation.className = 'header-location';

        this.weatherPicture = document.createElement('div');

        this.nameLocation = document.createElement('div');
        this.nameLocation.textContent = 'Ташкент Узбекистан';

        headerLocation.append(this.nameLocation);

        headerContainer.append(headerTools, headerLocation, this.headerNav);
        this.element.append(headerContainer);
    }

    protected addListeners(): void {
        this.componentRadar.addEventListener('click', () => {
            this.props.router.goTo('radar');
        })

        this.headerNav.addEventListener('click', (event): void => {
            if (event.target === this.componentRadar) {
                this.props.router.goTo('radar');
            }
            if (event.target === this.componentToday) {
                this.props.router.goTo('today');
            }
            if (event.target === this.componentTimeWeather) {
                this.props.router.goTo('hourbyhour');
            }
            if (event.target === this.componentTenDays) {
                this.props.router.goTo('tenday');
            }
            if (event.target === this.componentWeekend) {
                this.props.router.goTo('weekend');
            }
            if (event.target === this.componentMonth) {
                this.props.router.goTo('monthly');
            }
        });
        // this.componentOtherForecast.addEventListener('click', (event): void => {
        //     if (event.target === this.componentForecastAllergy) {
        //         this.props.router.goTo('allergy');
        //     }
        //     if (event.target === this.componentAirQuality) {
        //         this.props.router.goTo('air-quality');
        //     }
        // });
    }
}
