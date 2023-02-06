import { FooterController } from '../controller/FooterController';
import { HeaderController } from '../controller/HeaderController';
import { WeatherMapController } from '../controller/WeatherMapController';
import { WeatherTodayController } from '../controller/WeatherTodayController';
import MapControls from './weatherMap/mapControls';

class RenderView {
    constructor() {
        const root = document.createElement('div');
        root.id = 'root';
        const main = document.createElement('main');
        main.classList.add('main');

        const headerController = new HeaderController();
        const weatherTodayController = new WeatherTodayController();
        const weatherMapController = new WeatherMapController();
        const footerController = new FooterController();

        root.append(
            headerController.component.element,
            main,
            weatherTodayController.component.element,
            weatherMapController.component.element,
            footerController.component.element
        );
        document.body.append(root);
    }
}
export default RenderView;
