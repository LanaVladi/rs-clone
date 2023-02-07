import { WeatherTodayController } from '../../controller/WeatherTodayController';
import { BaseComponent } from '../BaseComponent';
import './WeatherTodayComponent.css';

interface WeatherForTodayProps {
    controller: WeatherTodayController;
}

export class WeatherTodayComponent extends BaseComponent<WeatherForTodayProps> {
    private currentConditionsHeaderLocation!: HTMLHeadingElement;
    private boxTempValue!: HTMLSpanElement;
    private boxTempLabel!: HTMLSpanElement;
    private boxTempPhrase!: HTMLSpanElement;
    private todayWeatherCardTitle!: HTMLHeadingElement;
    private title!: HTMLHeadingElement;
    private feelsLikeTempValue!: HTMLSpanElement;

    constructor(controller: WeatherTodayController) {
        super('weather-for-today', { controller }, 'div');
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
        currentConditionsHeaderTimestamp.textContent = `По состоянию на time, GMT`;

        const currentConditionsBoxTemp = document.createElement('div');
        currentConditionsBoxTemp.className = 'current-conditions-box-temp';

        const currentConditionsBoxIcon = document.createElement('div');
        currentConditionsBoxIcon.className = 'current-conditions-box-icon';

        const currentConditionsIcon = document.createElement('div');
        currentConditionsIcon.className = 'current-conditions-icon';

        this.boxTempValue = document.createElement('div');
        this.boxTempValue.className = 'box-temp-value';
        this.boxTempValue.textContent = '+5 ';

        this.boxTempLabel = document.createElement('span');
        this.boxTempLabel.className = 'box-temp-label';
        this.boxTempLabel.textContent = 'День -13° • Ночь -28°';

        this.boxTempPhrase = document.createElement('div');
        this.boxTempPhrase.className = 'box-temp-phrase';
        this.boxTempPhrase.textContent = 'Ясно';

        currentConditionsHeader.append(this.currentConditionsHeaderLocation, currentConditionsHeaderTimestamp);

        currentConditionsBoxIcon.append(currentConditionsIcon);
        currentConditionsBoxTemp.append(this.boxTempValue, this.boxTempPhrase, this.boxTempLabel);
        currentConditionsBox.append(currentConditionsBoxTemp, currentConditionsBoxIcon);
        currentConditions.append(currentConditionsHeader, currentConditionsBox);

        const todayWeatherCard = document.createElement('div');
        todayWeatherCard.className = 'today-weather-card';

        this.todayWeatherCardTitle = document.createElement('h2');
        this.todayWeatherCardTitle.className = 'today-weather-card-title';
        this.todayWeatherCardTitle.textContent = 'Прогноз на сегодня: town, country';

        const todayWeatherCardTableWrapper = document.createElement('div');
        todayWeatherCardTableWrapper.className = 'today-weather-card--tableWrapper';

        const weatherTableColumns = document.createElement('ul');
        weatherTableColumns.className = 'weather-table--columns';

        weatherTableColumns.insertAdjacentHTML(
            'beforeend',
            `
        <li class="colomn-times-of-day">
            <h3 class="colomn-label">Утро</h3>
            <div class="colomn-label">-23</div>
            <div class="colomn-icon"></div>
            <div class="colomn-precip">
                <svg class="colomn-precip-icon"></svg>
                <span class="colomn-precip-humidity">2%</span>
            </div>
        </li>
        <li class="colomn-times-of-day">
            <h3 class="colomn-label">День</h3>
            <div class="colomn-label">-23</div>
            <div class="colomn-icon"></div>
            <div class="colomn-precip">
                <svg class="colomn-precip-icon"></svg>
                <span class="colomn-precip-humidity">2%</span>
        </div>
        </li>
        <li class="colomn-times-of-day">
            <h3 class="colomn-label">Вечер</h3>
            <div class="colomn-label">-23</div>
            <div class="colomn-icon"></div>
            <div class="colomn-precip">
             <svg class="colomn-precip-icon"></svg>
             <span class="colomn-precip-humidity">2%</span>
        </div>
        </li>
        <li class="colomn-times-of-day">
            <h3 class="colomn-label">Ночь</h3>
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
        buttonPrimery.textContent = 'На ближайшие часы';

        cardFooter.append(buttonPrimery);
        todayWeatherCard.append(this.todayWeatherCardTitle, todayWeatherCardTableWrapper, cardFooter);

        this.title = document.createElement('h2');
        this.title.className = 'component__title';

        this.title.innerText = `Погода на сегодня: town, country`;

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
        feelsLikeTempLabel.textContent = 'Ощущается как';

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
            <svg class='weather-details-item-icon'></svg>
            <div class='weather-details-item-label'>Макс./Мин.</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
            </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon'></svg>
            <div class='weather-details-item-label'>Ветер.</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                 /
                <span >-28°</span>
            </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon'></svg>
            <div class='weather-details-item-label'>Влажность</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
             </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon'></svg>
            <div class='weather-details-item-label'>Облачность</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
             </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon'></svg>
            <div class='weather-details-item-label'>Давление</div>
            <div class='weather-details-item-info'>
                <span >-13°</span>
                /
                <span >-28°</span>
             </div>
        </div>
        <div class='todays-details-item'>
            <svg class='weather-details-item-icon'></svg>
            <div class='weather-details-item-label'>Видимость</div>
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
