import { lang, langObj } from '../../../constants';
import { AirQualityPageController } from '../../../controller/AirQualityPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { NotifyParameters, WeatherTodayData } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';

interface AirQualityPageComponentProps {
    controller: AirQualityPageController;
    router: Router;
}

export class AirQualityPageComponent extends BaseComponent<AirQualityPageComponentProps> {
    private title!: HTMLHeadingElement;
    private observerToView: ObserverToView;

    constructor(controller: AirQualityPageController, router: Router, observerToView: ObserverToView) {
        super('other-forecast-air-quality', { controller, router }, 'div');
        this.observerToView = observerToView;
        this.observerToView.subscribe(<T>(params: NotifyParameters<T>) => this.setWeatherIndicatorsOther(params));
    }

    setWeatherIndicatorsOther<T>(params: NotifyParameters<T>) {
        const weatherData = <WeatherTodayData>params.message;
        this.title.innerText = `${langObj[lang].airQualityToday}:`;
    }

    protected render(): void {
        this.title = document.createElement('h2');
        this.title.className = 'component__title';
        this.title.innerText = `${langObj[lang].airQualityToday}:`;

        this.element.append(this.title);
    }
}
