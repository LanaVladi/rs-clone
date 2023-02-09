import { IStore } from "../../types";
import AltitudeInput from "./altitudeInput";
import LayersButtons from "./layersButtons";
import WindAnimToggler from "./windAnimToggler";

class MapControls {
    private element: HTMLDivElement = document.createElement('div');
    private layersButtons: LayersButtons;
    private altitudeInput: AltitudeInput;
    private windAnimToggler: WindAnimToggler;

    constructor(store: IStore) {
        this.layersButtons = new LayersButtons(store);
        this.altitudeInput = new AltitudeInput(store);
        this.windAnimToggler = new WindAnimToggler(store);

        this.render();
    }

    private render() {
        this.element.className = 'weatherMap-controls';
        this.element.append(
            this.layersButtons.getElement(),
            this.altitudeInput.getElement(),
            this.windAnimToggler.getElement(),
        );
    }

    getElement() {
        return this.element;
    }
}

export default MapControls;
