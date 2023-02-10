import { IWindyAPI } from '../../types';
import AltitudeInput from './altitudeInput';
import FindMeButton from './findMeButton';
import LayersButtons from './layersButtons';
import MapSearchForm from './mapSearchForm';
import ScreenSizeButtons from './screenSizeButtnos';
import WindAnimToggler from './windAnimToggler';

class MapControls {
    private elements: Array<HTMLElement> = [];
    private mapSearchForm: MapSearchForm;
    private layersButtons: LayersButtons;
    private altitudeInput: AltitudeInput;
    private windAnimToggler: WindAnimToggler;
    private findMeButton: FindMeButton;
    private screenSizeButtnos: ScreenSizeButtons;

    constructor(windyAPI: IWindyAPI) {
        const { picker, store, overlays, map } = windyAPI;
        this.mapSearchForm = new MapSearchForm(map, picker);
        this.layersButtons = new LayersButtons(store, overlays);
        this.windAnimToggler = new WindAnimToggler(store);
        this.altitudeInput = new AltitudeInput(store);
        this.findMeButton = new FindMeButton(map);
        this.screenSizeButtnos = new ScreenSizeButtons(map);

        this.render();
    }

    private render() {
        this.elements.push(
            this.mapSearchForm.getElement(),
            this.layersButtons.getElement(),
            this.windAnimToggler.getElement(),
            this.altitudeInput.getElement(),
            this.findMeButton.getElement(),
            ...this.screenSizeButtnos.getElements()
        );
    }

    getElements() {
        return this.elements;
    }
}

export default MapControls;
