import { Router } from '../view/Router';
import { BaseController } from './BaseController';
import { SearcherController } from './SearchController';
import { ObserverToModel } from '../model/ObserverToModel';
import { ObserverToView } from '../model/ObserverToView';
import { HeaderComponent } from '../view/components/header/HeaderComponent';

export class HeaderController extends BaseController<HeaderComponent> {
    public component: HeaderComponent;
    public searcherController: SearcherController;

    constructor(router: Router, observerGetData: ObserverToModel, observerToView: ObserverToView) {
        super();
        this.searcherController = new SearcherController(observerGetData);
        this.component = new HeaderComponent(this, router, observerToView);
    }
}
