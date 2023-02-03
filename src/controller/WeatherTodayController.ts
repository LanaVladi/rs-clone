import { WeatherTodayComponent } from '../view/weather-for-today/WeatherTodayComponent';
import { BaseController } from './BaseController';

export class WeatherTodayController extends BaseController<WeatherTodayComponent> {
    public component: WeatherTodayComponent;

    constructor() {
        super();
        this.component = new WeatherTodayComponent(this);
    }
}
