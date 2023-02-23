import { BaseController } from './BaseController';
import { ObserverToModel } from '../model/ObserverToModel';
import { LanguageComponent } from '../view/components/header/LanguageComponent';

export class LanguageController extends BaseController<LanguageComponent> {
    public component: LanguageComponent;
    private observerToModel: ObserverToModel;

    constructor(observerToModel: ObserverToModel) {
        super();
        this.observerToModel = observerToModel;
        this.component = new LanguageComponent(this, observerToModel);
    }
}
