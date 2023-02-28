import { Router } from '../view/Router';
import { BaseController } from './BaseController';
import { SearcherController } from './SearchController';
import { ObserverToModel } from '../model/ObserverToModel';
import { ObserverToView } from '../model/ObserverToView';
import { HeaderComponent } from '../view/components/header/HeaderComponent';
import { GeolocationController } from './GeolocationController';
import { GeolocationModel } from '../model/GeolocationModel';
import { LanguageController } from './LanguageController';
import { TranslatorModel } from '../model/TranslatorModel';
import { TempUnitController } from './TempUnitController';
import { VoiceControlController } from './VoiceControlController';
import VoiceControl from '../model/APIWebSpeech';

export class HeaderController extends BaseController<HeaderComponent> {
    public component: HeaderComponent;
    public searcherController: SearcherController;
    public languageController: LanguageController;
    public geolocationController: GeolocationController;
    public tempUnitController: TempUnitController;
    public voiceControl: VoiceControlController;
    public voiceControlModel: VoiceControl;

    public geolocation: GeolocationModel;
    public language: TranslatorModel;

    constructor(
        router: Router,
        observerToModel: ObserverToModel,
        observerToView: ObserverToView,
        geolocation: GeolocationModel,
        language: TranslatorModel,
        voiceControlModel: VoiceControl
    ) {
        super();
        this.geolocation = geolocation;
        this.language = language;
        this.voiceControlModel = voiceControlModel;
        this.voiceControl = new VoiceControlController(observerToModel, observerToView, language, voiceControlModel);
        this.languageController = new LanguageController(observerToModel);
        this.searcherController = new SearcherController(observerToModel, observerToView, language, voiceControlModel);
        this.tempUnitController = new TempUnitController(observerToModel);
        this.geolocationController = new GeolocationController(observerToModel, geolocation);
        this.component = new HeaderComponent(this, router, observerToView, language);
    }
}
