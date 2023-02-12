import { BaseController } from './BaseController';
import { ObserverToModel } from '../model/ObserverToModel';
import { SearcherComponent } from '../view/components/header/SearcherComponent';

export class SearcherController extends BaseController<SearcherComponent> {
    public component: SearcherComponent;
    private observerGetData: ObserverToModel;

    constructor(observerGetData: ObserverToModel) {
        super();
        this.observerGetData = observerGetData;
        this.component = new SearcherComponent(this, observerGetData);
    }
}
