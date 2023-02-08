class LayersButtons {
    private element: HTMLDivElement = document.createElement('div');
    private windLayerBtn: HTMLButtonElement = document.createElement('button');
    private tempLayerBtn: HTMLButtonElement = document.createElement('button');
    private pressLayerBtn: HTMLButtonElement = document.createElement('button');

    constructor() {
        this.render();
    }

    private render() {
        this.element.className = 'layers-buttons';
        this.windLayerBtn.className = 'button layer-button active';
        this.windLayerBtn.innerText = 'Wind';

        this.tempLayerBtn.className = 'button layer-button';
        this.tempLayerBtn.innerText = 'Temperature';

        this.pressLayerBtn.className = 'button layer-button';
        this.pressLayerBtn.innerText = 'Pressure';

        this.element.append(this.windLayerBtn, this.tempLayerBtn, this.pressLayerBtn);
    }

    // @ts-ignore
    addListner(store) {
        this.windLayerBtn.addEventListener('click', () => {
            if (store.get('overlay') !== 'wind') {
                this.windLayerBtn.classList.add('active');
                this.tempLayerBtn.classList.remove('active');
                this.pressLayerBtn.classList.remove('active');
                store.set('overlay', 'wind');
            }
        });
    
        this.tempLayerBtn.addEventListener('click', () => {
            if (store.get('overlay') !== 'temp') {
                this.windLayerBtn.classList.remove('active');
                this.tempLayerBtn.classList.add('active');
                this.pressLayerBtn.classList.remove('active');
                store.set('overlay', 'temp');
            }
        });
    
        this.pressLayerBtn.addEventListener('click', () => {
            if (store.get('overlay') !== 'pressure') {
                this.windLayerBtn.classList.remove('active');
                this.tempLayerBtn.classList.remove('active');
                this.pressLayerBtn.classList.add('active');
                store.set('overlay', 'pressure');
            }
        });
    }

    getElement() {
        return this.element;
    }
}

export default LayersButtons;
