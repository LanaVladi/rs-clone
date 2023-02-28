import { GeolocationController } from '../../../controller/GeolocationController';
import { ObserverToModel } from '../../../model/ObserverToModel';
import { ViewEvent } from '../../../types';
import { BaseComponent } from '../../BaseComponent';

interface GeolocationComponentProps {
    controller: GeolocationController;
    observerToModel: ObserverToModel;
}
export class GeolocationComponent extends BaseComponent<GeolocationComponentProps> {
    public geolocationButton!: HTMLButtonElement;
    private observerToModel: ObserverToModel;

    constructor(controller: GeolocationController, observerToModel: ObserverToModel) {
        super('geolocation-container', { controller, observerToModel }, 'div');
        this.observerToModel = observerToModel;
    }

    protected render(): void {
        this.geolocationButton = document.createElement('button');
        this.geolocationButton.classList.add('geolocation-button');
        this.geolocationButton.innerText = '➤';

        this.element.append(this.geolocationButton);
    }

    protected addListeners() {
        this.element.addEventListener('click', async () => {
            const cityCoords = await this.props.controller.getGeolocationCoords();
            this.observerToModel.notify(ViewEvent.geolocation, { message: cityCoords });
        });
    }
}
