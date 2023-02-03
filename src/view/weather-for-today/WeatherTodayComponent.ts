import { WeatherTodayController } from '../../controller/WeatherTodayController';
import { BaseComponent } from '../BaseComponent';

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
        this.title = document.createElement('h2');
        this.title.className = 'component__title';
        // this.title.innerText = `Погода на сегодня: ${town}, ${country}`;
        this.title.innerText = `Погода на сегодня: town, country`;

        const todaysDetailsHeader = document.createElement('div');
        todaysDetailsHeader.className = 'todays-details-header';

        const feelsLikeTempBox = document.createElement('div');
        feelsLikeTempBox.className = 'todays-details-header__feels-like-temp';
        this.feelsLikeTempValue = document.createElement('span');
        this.feelsLikeTempValue.className = 'todays-details-header__feels-like-temp_value';
        const feelsLikeTempLabel = document.createElement('span');
        feelsLikeTempLabel.className = 'todays-details-header__feels-like-temp_label';

        const sunriseSunsetBox = document.createElement('div');
        sunriseSunsetBox.className = 'sunrise-sunset-box';

        const sunriseSunsetSvgBox = document.createElement('div');
        sunriseSunsetSvgBox.className = 'sunrise-sunset-svg-box';

        const sunriseSunsetSvg = document.createElement('svg');
        sunriseSunsetSvg.className = 'sunrise-sunset-svg';






        this.element.append(this.title);


    }
}
