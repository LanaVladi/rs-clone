import { lang, langObj } from '../../../constants';
import { WeatherTodayPageController } from '../../../controller/WeatherTodayPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { NotifyParameters, WeatherTodayData } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import './weather-today-page.css';

interface WeatherTodayPageProps {
    controller: WeatherTodayPageController;
    router: Router;
    observerToView: ObserverToView;
}

export class WeatherTodayPageComponent extends BaseComponent<WeatherTodayPageProps> {
    private currentConditionsHeaderLocation!: HTMLHeadingElement;
    private boxTempValue!: HTMLSpanElement;
    private boxTempPhrase!: HTMLSpanElement;
    private todayWeatherCardTitle!: HTMLHeadingElement;
    private title!: HTMLHeadingElement;
    private feelsLikeTempValue!: HTMLSpanElement;
    private observerToView: ObserverToView;

    constructor(controller: WeatherTodayPageController, router: Router, observerToView: ObserverToView) {
        super('weather-today', { controller, router, observerToView }, 'div');
        this.observerToView = observerToView;
        this.observerToView.subscribe(<T>(params: NotifyParameters<T>) => this.setWeatherIndicatorsToday(params));
    }

    setWeatherIndicatorsToday<T>(params: NotifyParameters<T>) {
        const weatherData = <WeatherTodayData>params.message;
        this.title.innerText = `${langObj[lang].weatherToday}: ${weatherData.name}`;
    }

    protected render(): void {
        const currentConditions = document.createElement('div');
        currentConditions.className = 'current-conditions';

        const currentConditionsHeader = document.createElement('div');
        currentConditionsHeader.className = 'current-conditions-header';

        const currentConditionsBox = document.createElement('div');
        currentConditionsBox.className = 'current-conditions-box';

        this.currentConditionsHeaderLocation = document.createElement('h2');
        this.currentConditionsHeaderLocation.className = 'current-conditions-header__location';
        this.currentConditionsHeaderLocation.textContent = `town, country`;

        const currentConditionsHeaderTimestamp = document.createElement('span');
        currentConditionsHeaderTimestamp.className = 'current-conditions-header__timestamp';
        currentConditionsHeaderTimestamp.textContent = `${langObj[lang].asOf} time, GMT`;

        const currentConditionsBoxTemp = document.createElement('div');
        currentConditionsBoxTemp.className = 'current-conditions-box-temp';

        const currentConditionsBoxIcon = document.createElement('div');
        currentConditionsBoxIcon.className = 'current-conditions-box-icon';

        const currentConditionsIcon = document.createElement('div');
        currentConditionsIcon.className = 'current-conditions-icon';

        this.boxTempValue = document.createElement('div');
        this.boxTempValue.className = 'box-temp-value';
        this.boxTempValue.textContent = '+5 ';

        this.boxTempPhrase = document.createElement('div');
        this.boxTempPhrase.className = 'box-temp-phrase';
        this.boxTempPhrase.textContent = 'Ясно';

        currentConditionsHeader.append(this.currentConditionsHeaderLocation, currentConditionsHeaderTimestamp);

        currentConditionsBoxIcon.append(currentConditionsIcon);
        currentConditionsBoxTemp.append(this.boxTempValue, this.boxTempPhrase);
        currentConditionsBox.append(currentConditionsBoxTemp, currentConditionsBoxIcon);
        currentConditions.append(currentConditionsHeader, currentConditionsBox);

        const todayWeatherCard = document.createElement('div');
        todayWeatherCard.className = 'today-weather-card';

        this.todayWeatherCardTitle = document.createElement('h2');
        this.todayWeatherCardTitle.className = 'today-weather-card-title';
        this.todayWeatherCardTitle.textContent = `${langObj[lang].forecastToday}: town, country`;

        const todayWeatherCardTableWrapper = document.createElement('div');
        todayWeatherCardTableWrapper.className = 'today-weather-card--tableWrapper';

        const weatherTableColumns = document.createElement('ul');
        weatherTableColumns.className = 'weather-table--columns';

        weatherTableColumns.insertAdjacentHTML(
            'beforeend',
            `
        <li class="colomn-times-of-day">
            <h3 class="colomn-label">${langObj[lang].morning}</h3>
            <div class="colomn-label">-23</div>
            <div class="colomn-icon"></div>
            <div class="colomn-precip">
                <svg class="colomn-precip-icon"></svg>
                <span class="colomn-precip-humidity">2%</span>
            </div>
        </li>
        <li class="colomn-times-of-day">
            <h3 class="colomn-label">${langObj[lang].afternoon}</h3>
            <div class="colomn-label">-23</div>
            <div class="colomn-icon"></div>
            <div class="colomn-precip">
                <svg class="colomn-precip-icon"></svg>
                <span class="colomn-precip-humidity">2%</span>
        </div>
        </li>
        <li class="colomn-times-of-day">
            <h3 class="colomn-label">${langObj[lang].evening}</h3>
            <div class="colomn-label">-23</div>
            <div class="colomn-icon"></div>
            <div class="colomn-precip">
             <svg class="colomn-precip-icon"></svg>
             <span class="colomn-precip-humidity">2%</span>
        </div>
        </li>
        <li class="colomn-times-of-day">
            <h3 class="colomn-label">${langObj[lang].nigth}</h3>
            <div class="colomn-label">-23</div>
            <div class="colomn-icon"></div>
            <div class="colomn-precip">
             <svg class="colomn-precip-icon"></svg>
                <span class="colomn-precip-humidity">2%</span>
        </div>
         </li>`
        );

        todayWeatherCardTableWrapper.append(weatherTableColumns);
        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer';

        const buttonPrimery = document.createElement('a');
        buttonPrimery.className = 'button-primery';
        buttonPrimery.textContent = langObj[lang].nextHours;

        cardFooter.append(buttonPrimery);
        todayWeatherCard.append(this.todayWeatherCardTitle, todayWeatherCardTableWrapper, cardFooter);

        this.title = document.createElement('h2');
        this.title.className = 'component__title';

        this.title.innerText = `${langObj[lang].forecastToday}: town, country`;

        const todaysDetails = document.createElement('div');
        todaysDetails.className = 'today-details';

        const todaysDetailsHeader = document.createElement('div');
        todaysDetailsHeader.className = 'todays-details-header';

        const feelsLikeTempBox = document.createElement('div');
        feelsLikeTempBox.className = 'todays-details-header__feels-like-temp';

        this.feelsLikeTempValue = document.createElement('span');
        this.feelsLikeTempValue.className = 'todays-details-header__feels-like-temp_value';
        this.feelsLikeTempValue.textContent = '-26';

        const feelsLikeTempLabel = document.createElement('span');
        feelsLikeTempLabel.className = 'todays-details-header__feels-like-temp_label';
        feelsLikeTempLabel.textContent = langObj[lang].feelsLike;

        const sunriseSunsetBox = document.createElement('div');
        sunriseSunsetBox.className = 'sunrise-sunset-box';

        const sunriseSunsetSvgBox = document.createElement('div');
        sunriseSunsetSvgBox.className = 'sunrise-sunset-svg-box';

        const sunriseSunsetDates = document.createElement('div');
        sunriseSunsetDates.className = 'sunrise-sunset-dates';
        sunriseSunsetDates.insertAdjacentHTML(
            'beforeend',
            `
        <div class='sunrise-value'>
            <p>7:56</p>
        </div>
        <div class='sunrise-value'>
            <p>17:21</p>
        </div>
        `
        );

        sunriseSunsetBox.insertAdjacentHTML(
            'beforeend',
            `
       <svg  class="sunrise-sunset">
       <path d="M -13.5 26.5 a 1 1 0 0 0 80 0" class="sunrise-sunset-path" style="transform-origin: 40px 40px;"></path></svg>
       `
        );

        sunriseSunsetBox.append(sunriseSunsetDates);

        const todaysDetailsCard = document.createElement('div');
        todaysDetailsCard.className = 'today-details-card';

        todaysDetailsCard.insertAdjacentHTML(
            'beforeend',
            `
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon' viewBox="0 0 24 24">
                <path d="M10.333 15.48v.321c.971.357 1.667 1.322 1.667 2.456 0 1.438-1.12 2.604-2.5 2.604S7 19.695 7 18.257c0-1.134.696-2.099 1.667-2.456v-.322a2.084 2.084 0 0 1-1.25-1.91V5.583a2.083 2.083 0 1 1 4.166 0v7.986c0 .855-.514 1.589-1.25 1.91zM15.8 8.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm0-1.85a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            </svg>
            <div class='weather-details-item-label'>${langObj[lang].high}/${langObj[lang].low}</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
            </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon' viewBox="0 0 24 24">
            <path d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742" stroke-width="2" stroke="currentColor" stroke-linecap="round" fill="none"></path>
            </svg>
            <div class='weather-details-item-label'>${langObj[lang].wind}</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                 /
                <span >-28°</span>
            </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon' viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4"></path>
            </svg>
            <div class='weather-details-item-label'>${langObj[lang].humidity}</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
             </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon' viewBox="0 0 24 24">
            <path d="M21.786 11.898a3.322 3.322 0 0 0-4.04-2.357l-.356.095a4.911 4.911 0 0 0-9.599.546l-.129-.034a2.804 2.804 0 0 0-3.486 3.032l-1.203.323a1.312 1.312 0 0 0 .42 2.576h15.103s.626-.029.94-.113a3.322 3.322 0 0 0 2.35-4.068"></path>
            </svg>
            <div class='weather-details-item-label'>${langObj[lang].cloudiness}</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
             </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon' viewBox="0 0 24 24">
            <path d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"></path>
            </svg>
            <div class='weather-details-item-label'>${langObj[lang].pressure}</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
             </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon' viewBox="0 0 1024 1024" width="1024" height="1024">
            <path d="M491.856 879.808c-60.48-5.056-110.848-25.184-171.328-55.424-120.96-55.424-216.704-146.112-292.256-256.96-25.248-40.352-30.24-80.64 0-126.016 80.608-115.872 186.464-211.68 317.472-272.096 110.816-50.4 226.752-50.4 337.664 0 136 60.48 241.824 156.224 317.44 282.208 15.104 25.216 25.12 65.504 10.048 85.728-105.792 191.424-256.992 367.84-519.04 342.56zm292.256-377.92c0-151.168-120.96-272.064-272.096-272.064-146.144 0-272.128 126.016-272.128 272.064 0 151.232 120.96 277.216 272.128 277.216 151.104-.032 272.096-125.984 272.096-277.216z"></path>
            <path d="M789.808 500.416c0 156.896-125.472 287.52-282.336 282.336-156.864 0-282.336-130.656-282.336-287.488 0-146.4 130.656-277.12 282.336-277.12 156.896-.032 287.584 125.376 282.336 282.272zM512.752 348.832c-83.68 0-151.584 67.968-151.584 151.584 0 88.864 67.968 156.896 151.584 156.896 83.648 0 156.832-73.216 156.832-156.896-5.184-83.648-73.152-151.584-156.832-151.584z"></path>
            </svg>
            <div class='weather-details-item-label'>${langObj[lang].visibility}</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
             </div>
        </div>
        `
        );

        feelsLikeTempBox.append(this.feelsLikeTempValue, feelsLikeTempLabel);

        sunriseSunsetBox.append(sunriseSunsetSvgBox);

        todaysDetailsHeader.append(feelsLikeTempBox, sunriseSunsetBox);

        todaysDetails.append(this.title, todaysDetailsHeader, todaysDetailsCard);
        this.element.append(currentConditions, todayWeatherCard, todaysDetails);
    }
}
