import { BaseController } from './BaseController';
import { ObserverToModel } from '../model/ObserverToModel';
import { TempUnitComponent } from '../view/components/header/TempUnitComponent';

export class TempUnitController extends BaseController<TempUnitComponent> {
    public component: TempUnitComponent;
    private observerToModel: ObserverToModel;

    constructor(observerToModel: ObserverToModel) {
        super();
        this.observerToModel = observerToModel;
        this.component = new TempUnitComponent(this, observerToModel);
    }
}
