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

export class HeaderController extends BaseController<HeaderComponent> {
    public component: HeaderComponent;
    public searcherController: SearcherController;
    public languageController: LanguageController;
    public geolocationController: GeolocationController;
    public tempUnitController: TempUnitController;
    private geolocation: GeolocationModel;
    private language: TranslatorModel;

    constructor(
        router: Router,
        observerToModel: ObserverToModel,
        observerToView: ObserverToView,
        geolocation: GeolocationModel,
        language: TranslatorModel
    ) {
        super();
        this.geolocation = geolocation;
        this.language = language;
        this.languageController = new LanguageController(observerToModel);
        this.searcherController = new SearcherController(observerToModel, observerToView, language);
        this.tempUnitController = new TempUnitController(observerToModel);
        this.geolocationController = new GeolocationController(observerToModel, geolocation);
        this.component = new HeaderComponent(this, router, observerToView, language);
    }
}
