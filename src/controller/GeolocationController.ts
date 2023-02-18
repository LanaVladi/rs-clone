import { BaseController } from './BaseController';
import { ObserverToModel } from '../model/ObserverToModel';
import { GeolocationComponent } from '../view/components/header/GeolocationComponent';
import { GeolocationModel } from '../model/GeolocationModel';

export class GeolocationController extends BaseController<GeolocationComponent> {
    public component: GeolocationComponent;
    private observerToModel: ObserverToModel;
    private geolocation: GeolocationModel;

    constructor(observerToModel: ObserverToModel, geolocation: GeolocationModel) {
        super();
        this.geolocation = geolocation;
        this.observerToModel = observerToModel;
        this.component = new GeolocationComponent(this, observerToModel);
    }

    public async getGeolocationCoords(): Promise<number[]> {
        const [latitude, longitude] = await this.geolocation.getGeolocation();
        return [latitude, longitude];
    }
}
