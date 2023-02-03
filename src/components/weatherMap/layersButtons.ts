class LayersButtons {
    static renderLayersButtons() {
        return `
            <button class="button layer-button" id="wind">Wind</button>
            <button class="button layer-button" id="temp">Temperature</button>
            <button class="button layer-button" id="press">Pressure</button>
        `;
    }
    // @ts-ignore
    static addListner(store) {
        const windBtn = document.querySelector<HTMLButtonElement>('#wind');
        const tempBtn = document.querySelector<HTMLButtonElement>('#temp');
        const pressBtn = document.querySelector<HTMLButtonElement>('#press');

        if (windBtn && tempBtn && pressBtn) {
            windBtn.addEventListener('click', () => {

            })

            windBtn.addEventListener('click', () => {
                if (store.get('overlay') !== 'wind') {
                    store.set('overlay', 'wind');
                }
            });
        
            tempBtn.addEventListener('click', () => {
                if (store.get('overlay') !== 'temp') {
                    store.set('overlay', 'temp');
                }
            });
        
            pressBtn.addEventListener('click', () => {
                if (store.get('overlay') !== 'pressure') {
                    store.set('overlay', 'pressure');
                }
            });
        }
    }
}

export default LayersButtons;
