import { FooterController } from '../controller/FooterController';
import { HeaderController } from '../controller/HeaderController';
import { ApiOpenWeather } from '../model/ApiOpenWeather';
import { Router } from './Router';
import { ObserverToModel } from '../model/ObserverToModel';
import { ObserverToView } from '../model/ObserverToView';
import { GeolocationModel } from '../model/GeolocationModel';
import { TranslatorModel } from '../model/TranslatorModel';
import { Store } from '../model/Store';

class RenderView {
    constructor() {
        const root = document.createElement('div');
        root.id = 'root';
        const main = document.createElement('main');
        main.classList.add('main');

        const observerToModel = new ObserverToModel();
        const observerToView = new ObserverToView();
        const geolocation = new GeolocationModel();
        const language = new TranslatorModel(observerToModel, observerToView, 'ru');
        const store = new Store(observerToModel, observerToView);
        new ApiOpenWeather(observerToModel, observerToView, geolocation, store, 'Ташкент');

        const router = new Router(main,observerToModel, observerToView, language);

        const headerController = new HeaderController(router, observerToModel, observerToView, geolocation, language);
        const footerController = new FooterController();

        root.append(headerController.component.element, main, footerController.component.element);
        document.body.append(root);
    }
}
export default RenderView;
