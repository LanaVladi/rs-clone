import { FooterController } from '../controller/FooterController';
import { HeaderController } from '../controller/HeaderController';
import { Router } from './Router';

class RenderView {
    constructor() {
        const root = document.createElement('div');
        root.id = 'root';
        const main = document.createElement('main');
        main.classList.add('main');

        const router = new Router(main);
        const headerController = new HeaderController(router);
        const footerController = new FooterController();

        root.append(
            headerController.component.element,
            main,
            footerController.component.element
        );
        document.body.append(root);
    }
}
export default RenderView;
