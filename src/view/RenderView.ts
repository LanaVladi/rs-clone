import { FooterController } from '../controller/FooterController';
import { HeaderController } from '../controller/HeaderController';
import { ApiOpenWeather } from '../model/ApiOpenWeather';
import { Router } from './Router';
import { ObserverToModel } from '../model/ObserverToModel';
import { ObserverToView } from '../model/ObserverToView';

class RenderView {
    constructor() {
        const root = document.createElement('div');
        root.id = 'root';
        const main = document.createElement('main');
        main.classList.add('main');

        const observerToModel = new ObserverToModel();
        const observerToView = new ObserverToView();
        const weatherApis = new ApiOpenWeather(observerToModel, observerToView);
        const router = new Router(main, observerToView);

        const headerController = new HeaderController(router, observerToModel, observerToView);
        const footerController = new FooterController();

        root.append(headerController.component.element, main, footerController.component.element);
        document.body.append(root);
    }
}
export default RenderView;
