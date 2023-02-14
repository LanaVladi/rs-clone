import { BaseController } from './BaseController';
import { ObserverToModel } from '../model/ObserverToModel';
import { SearcherComponent } from '../view/components/header/SearcherComponent';

export class SearcherController extends BaseController<SearcherComponent> {
    public component: SearcherComponent;
    private observerToModel: ObserverToModel;

    constructor(observerToModel: ObserverToModel) {
        super();
        this.observerToModel = observerToModel;
        this.component = new SearcherComponent(this, observerToModel);
    }
}
