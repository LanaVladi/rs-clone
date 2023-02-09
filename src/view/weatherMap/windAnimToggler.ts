let lang = 'en';

class WindAnimToggler {
    private element: HTMLDivElement = document.createElement('div');
    private toggler: HTMLDivElement = document.createElement('div');
    private label: HTMLDivElement = document.createElement('div');

    constructor() {
        this.render();
    }

    private render() {
        this.element.className = 'wind-anim-toggler';
        this.toggler.id = 'windAnim';
        this.toggler.className = 'switch-btn';

        this.label.className = 'wind-anim-label';
        this.label.innerText = lang === 'en' ? 'Wind animation' : 'Анимация ветра';

        this.element.append(this.toggler, this.label);
    }

    // @ts-ignore
    addListner(store) {
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
