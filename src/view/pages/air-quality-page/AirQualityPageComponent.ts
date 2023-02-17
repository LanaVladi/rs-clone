import { AirQualityPageController } from '../../../controller/AirQualityPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { TranslatorModel } from '../../../model/TranslatorModel';
import INotify, { ModelEvent, NotifyParameters, pagesLang } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';

interface AirQualityPageComponentProps {
    controller: AirQualityPageController;
    router: Router;
    language: TranslatorModel;
}

export class AirQualityPageComponent extends BaseComponent<AirQualityPageComponentProps> implements INotify {
    private title!: HTMLHeadingElement;
    private observerToView: ObserverToView;
    private language: TranslatorModel;

    constructor(
        controller: AirQualityPageController,
        router: Router,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super('other-forecast-air-quality', { controller, router, language }, 'div');
        this.observerToView = observerToView;
        this.language = language;
        this.observerToView.subscribe(ModelEvent.air_quality_forecast_indicators, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.language: {
                const langObject = <pagesLang>params.message;

                break;
            }
            case ModelEvent.five_days_weather_indicators: {
                // const {
                //     temp,
                // } = <weatherIndicators>params.message;
                // this.title.innerText = `Качество воздуха сегодня: ${weatherData.list[0].components.co}`;
                // this.title.innerText = `Качество воздуха сегодня: ${weatherData.list[0].components.nh3}`;
                // this.title.innerText = `Качество воздуха сегодня: ${weatherData.list[0].components.no}`;
            }
        }
    }

    protected render(): void {
        this.title = document.createElement('h2');
        this.title.className = 'component__title';
        this.title.innerText = `Качество воздуха сегодня: `;

        this.element.append(this.title);
    }
}
