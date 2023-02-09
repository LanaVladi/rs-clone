import { IOverlays, IStore } from "../../types";
import AltitudeInput from "./altitudeInput";
import LayersButtons from "./layersButtons";
import WindAnimToggler from "./windAnimToggler";

class MapControls {
    private element: HTMLDivElement = document.createElement('div');
    private layersButtons: LayersButtons;
    private altitudeInput: AltitudeInput;
    private windAnimToggler: WindAnimToggler;

    constructor(store: IStore, overlays: IOverlays) {
        this.layersButtons = new LayersButtons(store, overlays);
        this.windAnimToggler = new WindAnimToggler(store);
        this.altitudeInput = new AltitudeInput(store);

        this.render();
    }

    private render() {
        this.element.className = 'weatherMap-controls';
        this.element.append(
            this.layersButtons.getElement(),
            this.windAnimToggler.getElement(),
            this.altitudeInput.getElement(),
        );
    }

    getElement() {
        return this.element;
    }
}

export default MapControls;
