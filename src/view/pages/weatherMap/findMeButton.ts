import { Map } from 'leaflet';
import { ZOOM_TO_SELF_POSITION } from '../../../constants';
import { getGeolocation } from '../../../utils';

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
        this.element.addEventListener('click', async () => {
            const [startLat, startLon] = await getGeolocation(true);
            map.panTo([startLat, startLon]);
            map.setZoom(ZOOM_TO_SELF_POSITION);
        });
    }

    getElement() {
        return this.element;
    }
}

export default FindMeButton;
