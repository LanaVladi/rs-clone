const enum AccTimeOptions {
    next12h = 'next12h',
    next24h = 'next24h',
    next3d = 'next3d',
    next5d = 'next5d',
    next10d = 'next10d'
}

const enum AccTimeTitle {
    next12h = '12 часов',
    next24h = '24 часа',
    next3d = '3 дня',
    next5d = '5 дней',
    next10d = '10 дней'
}

class AccTimeForForecastWeatherSelect {
    private element: HTMLDivElement = document.createElement('div');
    private select: HTMLSelectElement = document.createElement('select');

    constructor() {
        this.render();
    }

    private render() {
        this.element.className = 'acc-time-for-forecast-weather-container';
        this.select.className = 'acc-time-for-forecast-weather-select';
        this.select.options[0] = new Option(AccTimeTitle.next12h, AccTimeOptions.next12h);
        this.select.options[1] = new Option(AccTimeTitle.next24h, AccTimeOptions.next24h);
        this.select.options[2] = new Option(AccTimeTitle.next3d, AccTimeOptions.next3d);
        this.select.options[2].selected = true;
        this.select.options[3] = new Option(AccTimeTitle.next5d, AccTimeOptions.next5d);
        this.select.options[4] = new Option(AccTimeTitle.next10d, AccTimeOptions.next10d);

        this.element.append(this.select);
    }

    // @ts-ignore
    addListner(store) {
        this.select.onchange = () => {
            switch (this.select.value) {
                case AccTimeOptions.next12h:
                    store.set('acTime', AccTimeOptions.next12h);
                    break;
                case AccTimeOptions.next24h:
                    store.set('acTime', AccTimeOptions.next24h);
                    break;
                case AccTimeOptions.next3d:
                    store.set('acTime', AccTimeOptions.next3d);
                    break;
                case AccTimeOptions.next5d:
                    store.set('acTime', AccTimeOptions.next5d);
                    break;
                case AccTimeOptions.next10d:
                    store.set('acTime', AccTimeOptions.next10d);
                    break;
            }
        };
    }

    getElement() {
        return this.element;
    }
}

export default AccTimeForForecastWeatherSelect;
