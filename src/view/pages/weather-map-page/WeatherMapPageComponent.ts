import { WeatherMapPageController } from '../../../controller/WeatherMapPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { NotifyParameters } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';


interface WeatherMapPageComponentProps {
    controller: WeatherMapPageController;
    router: Router;
    observerToView: ObserverToView;
}

export class WeatherMapPageComponent extends BaseComponent<WeatherMapPageComponentProps> {
    private title!: HTMLHeadingElement;
    private observerToView: ObserverToView;

    constructor(controller: WeatherMapPageController, router: Router, observerToView: ObserverToView) {
        super('five-days-weather', { controller, router, observerToView }, 'div');
        this.observerToView = observerToView;
        this.observerToView.subscribe(<T>(params: NotifyParameters<T>) => this.setWeatherIndicatorsMap(params));
    }

    setWeatherIndicatorsMap<T>(params: NotifyParameters<T>) {
        // const weatherData = <weatherMapData>params.message;
        // console.log('weatherData :', weatherData);
        // this.title.innerText = `Прогноз на 5 дней: ${weatherData.city.name}`;
        this.title.innerText = `Карта:`;
    }

    protected render(): void {
        this.title = document.createElement('h2');
        this.title.className = 'component__title';
        this.title.innerText = `Карта:`;

        this.element.append(this.title);
    }
}