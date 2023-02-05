import { WeatherTodayController } from '../../controller/WeatherTodayController';
import { BaseComponent } from '../BaseComponent';
import './WeatherTodayComponent.css';

interface WeatherForTodayProps {
    controller: WeatherTodayController;
}

export class WeatherTodayComponent extends BaseComponent<WeatherForTodayProps> {
    private title!: HTMLHeadingElement;
    private feelsLikeTempValue!: HTMLSpanElement;

    constructor(controller: WeatherTodayController) {
        super('weather-for-today', { controller }, 'div');
    }
    protected render(): void {
        const todaysDetailsHeader = document.createElement('div');
        todaysDetailsHeader.className = 'todays-details-header';

        const todaysDetailsBox = document.createElement('div');
        todaysDetailsBox.className = 'todays-details-box';

        const todaysDetailsHeaderLocation = document.createElement('h1');
        todaysDetailsHeaderLocation.className = 'todays-details-header__location';
        todaysDetailsHeaderLocation.textContent = `Погода на сегодня: town, country`;

        const todaysDetailsHeaderTimestamp = document.createElement('span');
        todaysDetailsHeaderTimestamp.className = 'todays-details-header__timestamp';
        todaysDetailsHeaderTimestamp.textContent = `По состоянию на time, GMT`;

        const feelsLikeTempBox = document.createElement('div');
        feelsLikeTempBox.className = 'todays-details-header__feels-like-temp';

        this.feelsLikeTempValue = document.createElement('div');
        this.feelsLikeTempValue.className = 'todays-details-header__feels-like-temp_value';
        this.feelsLikeTempValue.textContent = '+5 ';

        const feelsLikeTempLabel = document.createElement('span');
        feelsLikeTempLabel.className = 'todays-details-header__feels-like-temp_label';
        feelsLikeTempLabel.textContent = 'День -13° • Ночь -28°';

        const feelsLikeTempPhrase = document.createElement('div');
        feelsLikeTempPhrase.className = 'todays-details-header__feels-like-phrase_label';
        feelsLikeTempPhrase.textContent = 'Ясно';

        const sunriseSunsetBox = document.createElement('div');
        sunriseSunsetBox.className = 'sunrise-sunset-box';

        const sunriseSunsetSvgBox = document.createElement('div');
        sunriseSunsetSvgBox.className = 'sunrise-sunset-svg-box';

        const sunriseSunsetSvg = document.createElement('div');
        sunriseSunsetSvg.className = 'sunrise-sunset-svg';

        feelsLikeTempBox.append(this.feelsLikeTempValue, feelsLikeTempPhrase, feelsLikeTempLabel);
        todaysDetailsBox.append(feelsLikeTempBox, sunriseSunsetSvg);
        todaysDetailsHeader.append(todaysDetailsHeaderLocation, todaysDetailsHeaderTimestamp);
        this.element.append(todaysDetailsHeader, todaysDetailsBox);
    }
}
