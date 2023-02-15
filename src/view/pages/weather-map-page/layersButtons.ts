import { lang, langObj, unitName } from '../../../constants';
import { IOverlays, IStore, Layer } from '../../../types';

class LayersButtons {
    private element: HTMLDivElement = document.createElement('div');
    private windLayerBtn: HTMLButtonElement = document.createElement('button');
    private tempLayerBtn: HTMLButtonElement = document.createElement('button');
    private pressLayerBtn: HTMLButtonElement = document.createElement('button');
    private layerMetricSelect: HTMLSelectElement = document.createElement('select');

    constructor(store: IStore, overlays: IOverlays) {
        this.render(store, overlays);
    }

    private render(store: IStore, overlays: IOverlays) {
        this.element.className = 'layers-buttons';
        this.layerMetricSelect.className = 'layer-metric-select';
        this.windLayerBtn.className = 'button layer-button active';
        this.windLayerBtn.id = 'wind';
        this.windLayerBtn.innerText = langObj[lang].wind;

        this.tempLayerBtn.className = 'button layer-button';
        this.tempLayerBtn.id = 'temp';
        this.tempLayerBtn.innerText = langObj[lang].temp;

        this.pressLayerBtn.className = 'button layer-button';
        this.pressLayerBtn.id = 'pressure';
        this.pressLayerBtn.innerText = langObj[lang].pressure;

        this.element.append(this.windLayerBtn, this.tempLayerBtn, this.pressLayerBtn, this.layerMetricSelect);

        const layer = this.getLayer();
        this.addMetricSelect(layer, overlays);

        this.addListner(store, overlays);
    }

    private addListner(store: IStore, overlays: IOverlays) {
        this.windLayerBtn.addEventListener('click', () => {
            if (store.get('overlay') !== 'wind') {
                this.windLayerBtn.classList.add('active');
                this.tempLayerBtn.classList.remove('active');
                this.pressLayerBtn.classList.remove('active');
                store.set('overlay', 'wind');

                this.addMetricSelect('wind', overlays);
            }
        });

        this.tempLayerBtn.addEventListener('click', () => {
            if (store.get('overlay') !== 'temp') {
                this.windLayerBtn.classList.remove('active');
                this.tempLayerBtn.classList.add('active');
                this.pressLayerBtn.classList.remove('active');
                store.set('overlay', 'temp');

                this.addMetricSelect('temp', overlays);
            }
        });

        this.pressLayerBtn.addEventListener('click', () => {
            if (store.get('overlay') !== 'pressure') {
                this.windLayerBtn.classList.remove('active');
                this.tempLayerBtn.classList.remove('active');
                this.pressLayerBtn.classList.add('active');
                store.set('overlay', 'pressure');

                this.addMetricSelect('pressure', overlays);
            }
        });

        this.layerMetricSelect.addEventListener('change', () => {
            const value = this.layerMetricSelect.value;
            const layer = this.getLayer();
            overlays[layer].setMetric(value);
        });
    }

    private getLayer(): Layer {
        if (this.element.querySelector('.active')) {
            const activeElem = this.element.querySelector('.active');

            if (activeElem) {
                const layer = activeElem.id as Layer;
                return layer;
            }
        }
        return 'wind';
    }

    private addMetricSelect(layer: Layer, overlays: IOverlays) {
        this.layerMetricSelect.innerHTML = '';

        const currentMetric = overlays[layer].metric;
        const arrMetric = overlays[layer].listMetrics();
        arrMetric.forEach((elem, i) => {
            const optionText = lang === 'en' ? elem : unitName.get(elem);
            this.layerMetricSelect.options[i] = new Option(optionText, elem);
            if (currentMetric === elem) {
                this.layerMetricSelect.options[i].selected = true;
            }
        });
    }

    getElement() {
        return this.element;
    }
}

export default LayersButtons;
