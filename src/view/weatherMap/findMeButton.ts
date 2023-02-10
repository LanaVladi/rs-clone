import { Map } from 'leaflet';
import { getGeolocation } from '../../utils';

const [startLat, startLon] = await getGeolocation(true);
const ZOOM_TO_SELF_POSITION = 10;

class FindMeButton {
    private element: HTMLDivElement = document.createElement('div');

    constructor(map: Map) {
        this.render(map);
    }

    private render(map: Map) {
        this.element.className = 'button find-me-button';
        this.element.innerText = '➤';
        this.addListner(map);
    }

    private addListner(map: Map) {
        this.element.addEventListener('click', () => {
            map.panTo([startLat, startLon]);
            map.setZoom(ZOOM_TO_SELF_POSITION);
        });
    }

    getElement() {
        return this.element;
    }
}

export default FindMeButton;
