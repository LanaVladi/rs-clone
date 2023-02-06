class WindAnimCheckbox {
    private element: HTMLDivElement = document.createElement('div');
    private checkbox: HTMLInputElement = document.createElement('input');
    private label: HTMLLabelElement = document.createElement('label');

    constructor() {
        this.render();
    }

    private render() {
        this.element.className = 'wind-anim-checkbox-container';
        this.checkbox.type = 'checkbox';
        this.checkbox.id = 'windAnim'
        this.checkbox.checked = true;
        this.checkbox.className = 'wind-anim-checkbox';

        this.label.className = 'wind-anim-label';
        this.label.htmlFor = 'windAnim';
        this.label.innerText = 'Wind animation';

        this.element.append(this.checkbox, this.label);
    }

    // @ts-ignore
    addListner(store) {
        this.checkbox.addEventListener('input', () => {
            if (store.get('particlesAnim') === 'on') {
                this.checkbox.checked = false;
                store.set('particlesAnim', 'off');
            } else {
                this.checkbox.checked = true;
                store.set('particlesAnim', 'on');
            }
        });
    }

    getElement() {
        return this.element;
    }
}

export default WindAnimCheckbox;
