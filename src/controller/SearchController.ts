import { BaseController } from './BaseController';
import { ObserverToModel } from '../model/ObserverToModel';
import { SearcherComponent } from '../view/components/header/SearcherComponent';
import { TranslatorModel } from '../model/TranslatorModel';
import { ObserverToView } from '../model/ObserverToView';

export class SearcherController extends BaseController<SearcherComponent> {
    public component: SearcherComponent;
    private observerToModel: ObserverToModel;
    private observerToView: ObserverToView;
    private language: TranslatorModel;

    constructor(observerToModel: ObserverToModel, observerToView: ObserverToView, language: TranslatorModel) {
        super();
        this.language = language;
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.component = new SearcherComponent(this, observerToModel, observerToView, language);
    }
}
