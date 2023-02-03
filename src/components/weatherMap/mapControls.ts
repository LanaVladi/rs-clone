import LayersButtons from "./layersButtons";

class MapControls {
    private component: HTMLDivElement = document.createElement('div');

    constructor() {
        this.createComponent();
    }

    createComponent() {
        this.component.className = 'weatherMap-controls'
        const layerButtons = LayersButtons.renderLayersButtons();
        this.component.innerHTML = layerButtons;
    }

    renderMapControls() {
        return `
        
        `
    }

    getComponent() {
        return this.component;
    }
}

export default MapControls;
