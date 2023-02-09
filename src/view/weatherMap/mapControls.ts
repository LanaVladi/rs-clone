import AltitudeInput from "./altitudeInput";
import LayersButtons from "./layersButtons";
import WindAnimToggler from "./windAnimToggler";

class MapControls {
    private element: HTMLDivElement = document.createElement('div');
    private layersButtons: LayersButtons;
    private altitudeInput: AltitudeInput;
    private windAnimToggler: WindAnimToggler;

    constructor() {
        this.layersButtons = new LayersButtons();
        this.altitudeInput = new AltitudeInput();
        this.windAnimToggler = new WindAnimToggler();

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

    // @ts-ignore
    addListner(store) {
        this.layersButtons.addListner(store);
        this.altitudeInput.addListner(store);
        this.windAnimToggler.addListner(store);
    }

    getElement() {
        return this.element;
    }
}

export default MapControls;
