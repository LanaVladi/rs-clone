import AccTimeForForecastWeatherSelect from "./accTimeForForecastWeatherSelect";
import AltitudeInput from "./altitudeInput";
import LayersButtons from "./layersButtons";
import WindAnimCheckbox from "./windAnimCheckbox";

class MapControls {
    private element: HTMLDivElement = document.createElement('div');
    private layersButtons: LayersButtons;
    private altitudeInput: AltitudeInput;
    private windAnimCheckbox: WindAnimCheckbox;
    private accTimeForForecastWeatherSelect: AccTimeForForecastWeatherSelect;

    constructor() {
        this.layersButtons = new LayersButtons();
        this.altitudeInput = new AltitudeInput();
        this.windAnimCheckbox = new WindAnimCheckbox();
        this.accTimeForForecastWeatherSelect = new AccTimeForForecastWeatherSelect();

        this.render();
    }

    private render() {
        this.element.className = 'weatherMap-controls';
        this.element.append(
            this.layersButtons.getElement(),
            this.altitudeInput.getElement(),
            this.windAnimCheckbox.getElement(),
            this.accTimeForForecastWeatherSelect.getElement()
        );
    }

    // @ts-ignore
    addListner(store) {
        this.layersButtons.addListner(store);
        this.altitudeInput.addListner(store);
        this.windAnimCheckbox.addListner(store);
        this.accTimeForForecastWeatherSelect.addListner(store);
    }

    getElement() {
        return this.element;
    }
}

export default MapControls;
