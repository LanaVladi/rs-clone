class AltitudeInput {
    private element: HTMLDivElement = document.createElement('div');
    private altitudeRange: HTMLInputElement = document.createElement('input');
    private altitudeValue: HTMLSpanElement = document.createElement('span');
   

    constructor() {
        this.render();
    }

    private render() {
        this.element.className = 'altitude-input-container';
        this.altitudeRange.type = 'range';
        this.altitudeRange.min = '0';
        this.altitudeRange.max = '15';
        this.altitudeRange.value = '0';
        this.altitudeRange.className = 'altitude-range';

        this.altitudeValue.className = 'altitude-value';

        this.element.append(this.altitudeRange, this.altitudeValue);
    }

    // @ts-ignore
    addListner(store) {
        const levels = store.getAllowed('level');

        this.altitudeRange.addEventListener('change', () => {
            store.set('level', levels[this.altitudeRange.value]);
        });

        this.altitudeRange.addEventListener('input', () => {
            this.altitudeValue.innerText = levels[this.altitudeRange.value];
        });
    }

    getElement() {
        return this.element;
    }
}

export default AltitudeInput;
