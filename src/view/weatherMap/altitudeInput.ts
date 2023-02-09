import { IStore } from '../../types';

const lang = 'en';
const textValuesEn = [
    'surface',
    '100m',
    '300m',
    '600m',
    '750m',
    '1km',
    '1.5km',
    '2km',
    '3km',
    '4.2km',
    '5.5km',
    '7km',
    '9km',
    '10km',
    '11.7km',
    '13.5km',
];
const textValuesRu = [
    'поверхность',
    '100м',
    '300м',
    '600м',
    '750м',
    '1км',
    '1,5км',
    '2км',
    '3км',
    '4,2км',
    '5,5км',
    '7км',
    '9км',
    '10км',
    '11,7км',
    '13,5км',
];

class AltitudeInput {
    private element: HTMLDivElement = document.createElement('div');
    private altitudeRange: HTMLInputElement = document.createElement('input');
    private altitudeValue: HTMLSpanElement = document.createElement('span');

    constructor(store: IStore) {
        this.render(store);
    }

    private render(store: IStore) {
        this.element.className = 'altitude-input-container';
        this.altitudeRange.type = 'range';
        this.altitudeRange.min = '0';
        this.altitudeRange.max = '15';
        this.altitudeRange.value = '0';
        this.altitudeRange.className = 'altitude-range';

        this.altitudeValue.className = 'altitude-value';
        this.altitudeValue.innerText = store.get('level') as string;

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

            const textValues = lang === 'en' ? textValuesEn : textValuesRu;
            this.altitudeValue.innerText = textValues[+this.altitudeRange.value];
        });
    }

    getElement() {
        return this.element;
    }
}

export default AltitudeInput;
