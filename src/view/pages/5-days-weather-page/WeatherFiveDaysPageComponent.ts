import { lang, langObj } from '../../../constants';
import { WeatherFiveDaysPageController } from '../../../controller/WeatherFiveDaysPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { NotifyParameters, weatherFiveDaysData } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';

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
        this.title = document.createElement('h2');
        this.title.className = 'component__title';
        // this.title.innerText = `Прогноз на 5 дней:`;


        this.element.append(this.title);
    }
}
