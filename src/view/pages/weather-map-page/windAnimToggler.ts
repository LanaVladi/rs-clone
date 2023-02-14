import { textToWindAnimToggler } from '../../../constants';
import { IStore } from '../../../types';

class WindAnimToggler {
    private element: HTMLDivElement = document.createElement('div');
    private toggler: HTMLDivElement = document.createElement('div');
    private label: HTMLDivElement = document.createElement('div');

    constructor(store: IStore) {
        this.render(store);
    }

    private render(store: IStore) {
        this.element.className = 'wind-anim-toggler';
        this.toggler.id = 'windAnim';
        this.toggler.className = 'switch-btn';

        this.label.className = 'wind-anim-label';
        this.label.innerText = textToWindAnimToggler;
        this.element.append(this.toggler, this.label);

        this.addListner(store);
    }

    private addListner(store: IStore) {
        if (store.get('particlesAnim') === 'on') {
            this.toggler.classList.add('switch-on');
        }
        this.element.addEventListener('click', () => {
            if (store.get('particlesAnim') === 'on') {
                this.toggler.classList.toggle('switch-on');
                store.set('particlesAnim', 'off');
            } else {
                this.toggler.classList.toggle('switch-on');
                store.set('particlesAnim', 'on');
            }
        });
    }

    getElement() {
        return this.element;
    }
}

export default WindAnimToggler;
