import { Map } from 'leaflet';
import { IPicker } from '../../types';
import { getCoordinates } from '../../utils';

const lang = 'en';

class MapSearchForm {
    private element: HTMLDivElement = document.createElement('div');
    private form: HTMLFormElement = document.createElement('form');
    private input: HTMLInputElement = document.createElement('input');
    private button: HTMLButtonElement = document.createElement('button');

    constructor(map: Map, picker: IPicker) {
        this.render(map, picker);
    }

    private render(map: Map, picker: IPicker) {
        this.element.className = 'map-search-container';
        this.form.className = 'map-search-form';
        this.form.id = 'mapSearchForm';
        this.input.className = 'map-search-input';
        this.input.type = 'text';
        this.input.placeholder = lang === 'en' ? 'e.g. Bangkok...' : 'например, Бангкок...';
        this.input.id = 'location';
        this.button.className = 'button map-search-button';
        this.button.type = 'submit';
        this.button.innerText = lang === 'en' ? 'Search' : 'Поиск';

        this.form.append(this.input, this.button);
        this.element.append(this.form);

        this.addListner(map, picker);
    }

    private addListner(map: Map, picker: IPicker) {
        this.form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const location = this.input.value;
            if (location !== '') {
                const [lat, lon] = await getCoordinates(location);
                map.panTo([lat, lon]);
                picker.open({ lat, lon });
            }
        });

        this.input.addEventListener('focus', () => {
            this.element.classList.add('active-form');
            setTimeout(() => {
                this.button.style.display = 'inline-block';
            }, 500);
        });

        this.input.addEventListener('focusout', () => {
            setTimeout(() => {
                this.element.classList.remove('active-form');
                this.button.style.display = 'none';
            }, 500);
        });
    }

    getElement() {
        return this.element;
    }
}

export default MapSearchForm;
