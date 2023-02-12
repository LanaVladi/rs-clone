import { BaseController } from './BaseController';
import { SearcherComponent } from '../view/components/header/SearcherComponent';
import { ObserverToModel } from '../model/ObserverToModel';

export class SearcherController extends BaseController<SearcherComponent> {
    public component: SearcherComponent;
    private observerGetData: ObserverToModel;

    constructor(observerGetData: ObserverToModel) {
        super();
        this.observerGetData = observerGetData;
        this.component = new SearcherComponent(this, observerGetData);
    }
}
