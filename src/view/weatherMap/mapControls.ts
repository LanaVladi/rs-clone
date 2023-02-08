import AltitudeInput from "./altitudeInput";
import LayersButtons from "./layersButtons";
import WindAnimCheckbox from "./windAnimCheckbox";

class MapControls {
    private element: HTMLDivElement = document.createElement('div');
    private layersButtons: LayersButtons;
    private altitudeInput: AltitudeInput;
    private windAnimCheckbox: WindAnimCheckbox;

    constructor() {
        this.layersButtons = new LayersButtons();
        this.altitudeInput = new AltitudeInput();
        this.windAnimCheckbox = new WindAnimCheckbox();

        this.render();
    }

    private render() {
        this.element.className = 'weatherMap-controls';
        this.element.append(
            this.layersButtons.getElement(),
            this.altitudeInput.getElement(),
            this.windAnimCheckbox.getElement(),
        );
    }

    // @ts-ignore
    addListner(store) {
        this.layersButtons.addListner(store);
        this.altitudeInput.addListner(store);
        this.windAnimCheckbox.addListner(store);
    }

    getElement() {
        return this.element;
    }
}

export default MapControls;
