import { BaseController } from './BaseController';
import { Router } from '../view/Router';
import { ObserverToView } from '../model/ObserverToView';
import { AirQualityPageComponent } from '../view/pages/air-quality-page/AirQualityPageComponent';

export class AirQualityPageController extends BaseController<AirQualityPageComponent> {
    public component: AirQualityPageComponent;

    constructor(router: Router, observerToView: ObserverToView) {
        super();
        this.component = new AirQualityPageComponent(this, router, observerToView);
    }
}
