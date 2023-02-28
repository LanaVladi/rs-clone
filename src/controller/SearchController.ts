import { BaseController } from './BaseController';
import { ObserverToModel } from '../model/ObserverToModel';
import { SearcherComponent } from '../view/components/header/SearcherComponent';
import { TranslatorModel } from '../model/TranslatorModel';
import { ObserverToView } from '../model/ObserverToView';
import VoiceControl from '../model/APIWebSpeech';

export class SearcherController extends BaseController<SearcherComponent> {
    public component: SearcherComponent;
    public observerToModel: ObserverToModel;
    public observerToView: ObserverToView;
    public language: TranslatorModel;

    constructor(observerToModel: ObserverToModel, observerToView: ObserverToView, language: TranslatorModel, voiceControlModel: VoiceControl) {
        super();
        this.language = language;
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.component = new SearcherComponent(this, observerToModel, observerToView);
    }
}
