import { lang, langObj } from '../../../constants';
import { WeatherFiveDaysPageController } from '../../../controller/WeatherFiveDaysPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { NotifyParameters, weatherFiveDaysData } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import { WeatherDayComponent } from './WeatherDayComponent';
import './WeatherFiveDaysPageComponent.css';

interface WeatherFiveDaysPageComponentProps {
    controller: WeatherFiveDaysPageController;
    router: Router;
    observerToView: ObserverToView;
}

export class WeatherFiveDaysPageComponent extends BaseComponent<WeatherFiveDaysPageComponentProps> {
    private title!: HTMLHeadingElement;
    private observerToView: ObserverToView;

    constructor(controller: WeatherFiveDaysPageController, router: Router, observerToView: ObserverToView) {
        super('five-days-weather', { controller, router, observerToView }, 'div');
        this.observerToView = observerToView;
        this.observerToView.subscribe(<T>(params: NotifyParameters<T>) => this.setWeatherIndicatorsFiveDays(params));
    }

    setWeatherIndicatorsFiveDays<T>(params: NotifyParameters<T>) {
        const weatherData = <weatherFiveDaysData>params.message;
        console.log('weatherData :', weatherData);
        // this.title.innerText = `Прогноз на 5 дней: ${weatherData.city.name}`;
        this.title.innerText = `${langObj[lang].forecastFiveDay}: ${weatherData.city.name}`;
    }

    protected render(): void {
        const daysConatainer = document.createElement('div');
        daysConatainer.className = 'five-days-container';

        const pageName = document.createElement('span');
        pageName.textContent = 'Прогноз на 5 дней  ';
        pageName.className = 'page-name';

        const locationPageTitle = document.createElement('h1');
        const locationTitle = document.createElement('span');
        locationTitle.className = 'location-title';
        locationTitle.textContent = 'Location';

        const dailyForecastTimestamp = document.createElement('div');
        dailyForecastTimestamp.className = 'daily-forecast-timestamp';
        dailyForecastTimestamp.textContent = 'По состоянию на time';

        const dailyForecastDisclosureList = document.createElement('div');
        dailyForecastDisclosureList.className = 'daily-forecast-disclosure-list';

        const days = [
            { day: 'monday', temp: '+5', maxTemp: '10', weather: 'Дождь', precipitation: '70', speed: '5км.ч' },
            { day: 'monday', temp: '+5', maxTemp: '10', weather: 'Дождь', precipitation: '70', speed: '5км.ч' },
            { day: 'tuesday', temp: '+5', maxTemp: '10', weather: 'Дождь', precipitation: '70', speed: '5км.ч' },
        ];

        days.forEach((day) => {
            const dayComponent = new WeatherDayComponent(
                day.day,
                day.temp,
                day.maxTemp,
                day.weather,
                day.precipitation,
                day.speed
            );

            dailyForecastDisclosureList.append(dayComponent.getElement());
        });

        locationPageTitle.append(pageName, locationTitle);

        daysConatainer.append(locationPageTitle, dailyForecastTimestamp, dailyForecastDisclosureList);
        this.element.append(daysConatainer);
    }
}
