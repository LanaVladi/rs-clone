import { BaseController } from './BaseController';
import { Router } from '../view/Router';
import { ObserverToView } from '../model/ObserverToView';
import { AirQualityPageComponent } from '../view/pages/air-quality-page/AirQualityPageComponent';
import { TranslatorModel } from '../model/TranslatorModel';

export class AirQualityPageController extends BaseController<AirQualityPageComponent> {
    public component: AirQualityPageComponent;
    private language: TranslatorModel;

    constructor(router: Router, observerToView: ObserverToView, language: TranslatorModel) {
        super();
        this.language = language;
        this.component = new AirQualityPageComponent(this, router, observerToView, language);
    }

    public show() {
        this.component.show();
    }
}
