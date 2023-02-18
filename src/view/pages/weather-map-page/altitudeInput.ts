import { lang, langObj, textValuesToAltitude } from '../../../constants';
import { IStore } from '../../../types';

const WIDTH_INPUT = 11.1;

class AltitudeInput {
    private element: HTMLDivElement = document.createElement('div');
    private altitudeRange: HTMLInputElement = document.createElement('input');
    private altitudeValue: HTMLLabelElement = document.createElement('label');

    constructor(store: IStore) {
        this.render(store);
    }

    private render(store: IStore) {
        this.element.className = 'altitude-input-container';
        this.altitudeRange.type = 'range';
        this.altitudeRange.id = 'altitude';
        this.altitudeRange.min = '0';
        this.altitudeRange.max = '15';
        this.altitudeRange.value = '0';
        this.altitudeRange.className = 'altitude-range';

        this.altitudeValue.className = 'altitude-value';
        this.altitudeValue.htmlFor = 'altitude';
        this.altitudeValue.innerText = langObj[lang].surface;
        this.altitudeValue.style.top = `11.1rem`;

        this.element.append(this.altitudeRange, this.altitudeValue);

        this.addListner(store);
    }

    private addListner(store: IStore) {
        const levels = store.getAllowed('level');

        this.altitudeRange.addEventListener('change', () => {
            store.set('level', levels[+this.altitudeRange.value]);
        });

        this.altitudeRange.addEventListener('input', () => {
            const max = +this.altitudeRange.max;
            const val = +this.altitudeRange.value;

            this.altitudeRange.style.backgroundSize = `${(val * 100) / max}% 100%`;
            const valuesList = lang === 'en' ? Object.keys(textValuesToAltitude) : Object.values(textValuesToAltitude);
            this.altitudeValue.innerText = valuesList[+this.altitudeRange.value];
            this.altitudeValue.style.top = `${(WIDTH_INPUT - (WIDTH_INPUT / max) * val)}rem`;
        });
    }

    getElement() {
        return this.element;
    }
}

export default AltitudeInput;
