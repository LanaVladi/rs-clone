import { Map } from 'leaflet';
import { lang, langObj } from '../../../constants';

class ScreenSizeButtons {
    private elements: Array<HTMLElement> = [];
    private openFullScreen: HTMLButtonElement = document.createElement('button');
    private closeFullScreen: HTMLButtonElement = document.createElement('button');

    constructor(map: Map) {
        this.render(map);
    }

    private render(map: Map) {
        this.openFullScreen.className = 'open-fullscreen-button';
        this.closeFullScreen.className = 'close-fullscreen-button';
        this.openFullScreen.innerText = langObj[lang].fullScreen;
        this.closeFullScreen.innerText = '╳';
        this.elements.push(this.openFullScreen, this.closeFullScreen);

        this.addListner(map);
    }

    private addListner(map: Map) {
        this.openFullScreen.addEventListener('click', async () => {
            document.querySelector('.weather-map')?.classList.add('fullscreen');
            this.openFullScreen.style.visibility = 'hidden';
            this.closeFullScreen.style.visibility = 'visible';
            map.invalidateSize();
        });

        this.closeFullScreen.addEventListener('click', async () => {
            document.querySelector('.weather-map')?.classList.remove('fullscreen');
            this.closeFullScreen.style.visibility = 'hidden';
            this.openFullScreen.style.visibility = 'visible';
            map.invalidateSize();
        });
    }

    getElements() {
        return this.elements;
    }
}

export default ScreenSizeButtons;
