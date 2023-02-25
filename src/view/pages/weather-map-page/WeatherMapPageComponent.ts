import { Map } from 'leaflet';
import {
    apiKeyMapForecast,
    dayName,
    langObj,
    textValuesToAltitude,
    unitName,
    ZOOM_TO_SELF_POSITION,
} from '../../../constants';
import { WeatherMapPageController } from '../../../controller/WeatherMapPageController';
import { ObserverToView } from '../../../model/ObserverToView';
import { TranslatorModel } from '../../../model/TranslatorModel';
import INotify, {
    IBroadcast,
    ICalendarData,
    ICoordinates,
    IOverlays,
    IPicker,
    IStore,
    IWindyAPI,
    Layer,
    ModelEvent,
    NotifyParameters,
    pagesLang,
} from '../../../types';
import { getCoordinates, getGeolocation, latLonToDMS } from '../../../utils';
import { BaseComponent } from '../../BaseComponent';
import { Router } from '../../Router';
import './weatherMap.css';

type Lang = 'ru' | 'en';

interface WeatherMapPageComponentProps {
    controller: WeatherMapPageController;
    router: Router;
    observerToView: ObserverToView;
    language: TranslatorModel;
    // private geolocation: GeolocationModel;
}

export class WeatherMapPageComponent extends BaseComponent<WeatherMapPageComponentProps> implements INotify {
    private observerToView: ObserverToView;
    private language: Lang = 'ru';
    // private geolocation: GeolocationModel;
    private WIDTH_INPUT = 11.1;
    private isOpen = false;
    private overlays!: IOverlays;
    private store!: IStore;

    private windyDiv!: HTMLDivElement;
    private layersButtons!: HTMLDivElement;
    private layerMetricSelect!: HTMLSelectElement;
    private windLayerBtn!: HTMLButtonElement;
    private tempLayerBtn!: HTMLButtonElement;
    private pressLayerBtn!: HTMLButtonElement;
    private altitudeRange!: HTMLInputElement;
    private altitudeValue!: HTMLLabelElement;
    private findMeButton!: HTMLDivElement;
    private accTimeLegend!: HTMLDivElement;
    private mapSearchContainer!: HTMLDivElement;
    private mapSearchForm!: HTMLFormElement;
    private mapSearchInput!: HTMLInputElement;
    private mapSearchButton!: HTMLButtonElement;
    private openFullScreen!: HTMLButtonElement;
    private closeFullScreen!: HTMLButtonElement;
    private windAnimToggler!: HTMLDivElement;
    private toggler!: HTMLDivElement;
    private windAnimLabel!: HTMLDivElement;

    constructor(
        controller: WeatherMapPageController,
        router: Router,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super('weather-map', { controller, router, observerToView, language }, 'div');
        // this.geolocation  = geolocation;
        this.observerToView = observerToView;
        this.observerToView.subscribe(ModelEvent.weather_map, this);
        this.observerToView.subscribe(ModelEvent.language, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.language: {
                const langObject = <pagesLang>params.message;
                const layer = this.getLayer();
                this.language = this.getLang();
                this.store.set('lang', this.language);
                this.addMetricSelect(layer, this.overlays);

                this.windLayerBtn.textContent = langObject.wind;
                this.tempLayerBtn.textContent = langObject.temp;
                this.pressLayerBtn.textContent = langObject.pressure;
                this.mapSearchInput.placeholder = langObject.searchByCity;
                this.mapSearchButton.textContent = langObject.search;
                this.openFullScreen.textContent = langObject.fullScreen;
                this.windAnimLabel.textContent = langObject.windAnimation;

                this.translateWeatherForecastDays();
                this.translateAltitudeValue();
                break;
            }
            case ModelEvent.weather_map: {
                const weatherData = <IWindyAPI>params.message;
                console.log('weatherData IWindyAPI:', weatherData);
            }
        }
    }

    getLang() {
        const langName = document.querySelector<HTMLDivElement>('.lang-name');
        return langName?.textContent?.toLowerCase() as Lang;
    }

    protected render(): void {
        this.windyDiv = document.createElement('div');
        this.windyDiv.id = 'windy';

        this.element.append(this.windyDiv);

        this.drawWeatherMap(this.windyDiv);
    }

    private async drawWeatherMap(windyDiv: HTMLDivElement) {
        const [startLat, startLon] = await getGeolocation();
        const options = {
            key: apiKeyMapForecast,
            //verbose: true,
            lat: startLat,
            lon: startLon,
            zoom: 5,
        };

        windyInit(options, (windyAPI: IWindyAPI) => {
            const { broadcast, picker, store, map, overlays } = windyAPI;
            this.overlays = overlays;
            this.store = store;
            store.set('lang', this.language);

            this.renderLayersButtons(store, overlays);
            this.renderAltitudeInput(store);
            this.renderWindAnimToggler(store);
            this.renderFindMeButton(map);
            this.renderWeatherForecastDays(store);
            this.renderMapSearchForm(map, picker);
            this.renderScreenSizeButtons(map);

            this.addListenersToMap(windyDiv, broadcast, picker, map);
        });
    }

    private addListenersToMap(windyDiv: HTMLDivElement, broadcast: IBroadcast, picker: IPicker, map: Map) {
        const openPickerCallback = (event: MouseEvent) => {
            this.openPicker(event, picker, map);
        };

        picker.on('pickerClosed', () => (this.isOpen = false));
        broadcast.on('redrawFinished', () => {
            windyDiv.addEventListener('click', openPickerCallback);
        });

        windyDiv.addEventListener('click', openPickerCallback);

        windyDiv.addEventListener('mousemove', (event) => {
            if (event.target !== document.getElementById('map-container')) {
                document.getElementById('weather-data-value-display')?.remove();
                return;
            }

            if (event.buttons == 1) {
                windyDiv.removeEventListener('click', openPickerCallback);
            }

            if (document.getElementById('weather-data-value-display')) {
                document.getElementById('weather-data-value-display')?.remove();
            }

            const { lat, lng: lon } = map.mouseEventToLatLng(event);
            const coord = latLonToDMS(lat, lon);
            this.displayPosition(coord, event);
        });

        windyDiv.addEventListener('mouseout', () => {
            if (document.getElementById('weather-data-value-display')) {
                document.getElementById('weather-data-value-display')?.remove();
            }
        });
    }

    private displayPosition(coord: ICoordinates, event: MouseEvent): void {
        const valueDisplay = document.createElement('div');
        valueDisplay.id = 'weather-data-value-display';
        valueDisplay.innerHTML = `${coord.lat.degrees}°${coord.lat.minutes}'${coord.lat.seconds}", ${coord.lon.degrees}°${coord.lon.minutes}'${coord.lon.seconds}"`;
        document.body.appendChild(valueDisplay);
        valueDisplay.style.left = `${event.clientX + 10}px`;
        valueDisplay.style.top = `${event.clientY + 10}px`;
    }

    private openPicker(event: MouseEvent, picker: IPicker, map: Map) {
        if (event.target !== document.getElementById('map-container')) return;

        if (!this.isOpen) {
            const { lat, lng: lon } = map.mouseEventToLatLng(event);
            picker.open({ lat, lon });
            this.isOpen = true;
        } else {
            picker.close();
            this.isOpen = false;
        }
    }

    private renderLayersButtons(store: IStore, overlays: IOverlays) {
        this.layersButtons = document.createElement('div');
        this.layersButtons.className = 'layers-buttons';

        this.layerMetricSelect = document.createElement('select');
        this.layerMetricSelect.className = 'layer-metric-select';

        this.windLayerBtn = document.createElement('button');
        this.windLayerBtn.className = 'layer-button active';
        this.windLayerBtn.id = 'wind';
        this.windLayerBtn.innerText = langObj[this.language].wind;

        this.tempLayerBtn = document.createElement('button');
        this.tempLayerBtn.className = 'layer-button';
        this.tempLayerBtn.id = 'temp';
        this.tempLayerBtn.innerText = langObj[this.language].temp;

        this.pressLayerBtn = document.createElement('button');
        this.pressLayerBtn.className = 'layer-button';
        this.pressLayerBtn.id = 'pressure';
        this.pressLayerBtn.innerText = langObj[this.language].pressure;

        this.layersButtons.append(this.windLayerBtn, this.tempLayerBtn, this.pressLayerBtn, this.layerMetricSelect);
        this.element.append(this.layersButtons);

        const layer = this.getLayer();
        this.addMetricSelect(layer, overlays);

        this.addListnerToLayersButtons(store, overlays);
    }

    private addListnerToLayersButtons(store: IStore, overlays: IOverlays) {
        this.windLayerBtn.addEventListener('click', () => {
            if (store.get('overlay') !== 'wind') {
                this.windLayerBtn.classList.add('active');
                this.tempLayerBtn.classList.remove('active');
                this.pressLayerBtn.classList.remove('active');
                store.set('overlay', 'wind');

                this.addMetricSelect('wind', overlays);
            }
        });

        this.tempLayerBtn.addEventListener('click', () => {
            if (store.get('overlay') !== 'temp') {
                this.windLayerBtn.classList.remove('active');
                this.tempLayerBtn.classList.add('active');
                this.pressLayerBtn.classList.remove('active');
                store.set('overlay', 'temp');

                this.addMetricSelect('temp', overlays);
            }
        });

        this.pressLayerBtn.addEventListener('click', () => {
            if (store.get('overlay') !== 'pressure') {
                this.windLayerBtn.classList.remove('active');
                this.tempLayerBtn.classList.remove('active');
                this.pressLayerBtn.classList.add('active');
                store.set('overlay', 'pressure');

                this.addMetricSelect('pressure', overlays);
            }
        });

        this.layerMetricSelect.addEventListener('change', () => {
            const value = this.layerMetricSelect.value;
            const layer = this.getLayer();
            overlays[layer].setMetric(value);
        });
    }

    private getLayer(): Layer {
        if (this.layersButtons.querySelector('.active')) {
            const activeElem = this.layersButtons.querySelector('.active');

            if (activeElem) {
                const layer = activeElem.id as Layer;
                return layer;
            }
        }
        return 'wind';
    }

    private addMetricSelect(layer: Layer, overlays: IOverlays) {
        this.layerMetricSelect.innerHTML = '';

        const currentMetric = overlays[layer].metric;
        const arrMetric = overlays[layer].listMetrics();
        arrMetric.forEach((elem, i) => {
            const optionText = this.language === 'en' ? elem : unitName.get(elem);
            this.layerMetricSelect.options[i] = new Option(optionText, elem);
            if (currentMetric === elem) {
                this.layerMetricSelect.options[i].selected = true;
            }
        });
    }

    private renderAltitudeInput(store: IStore) {
        const altitudeInputContainer = document.createElement('div');
        altitudeInputContainer.className = 'altitude-input-container';

        this.altitudeRange = document.createElement('input');
        this.altitudeRange.className = 'altitude-range';
        this.altitudeRange.type = 'range';
        this.altitudeRange.id = 'altitude';
        this.altitudeRange.min = '0';
        this.altitudeRange.max = '15';
        this.altitudeRange.value = '0';

        this.altitudeValue = document.createElement('label');
        this.altitudeValue.className = 'altitude-value';
        this.altitudeValue.htmlFor = 'altitude';
        this.altitudeValue.innerText = langObj[this.language].surface;
        this.altitudeValue.style.top = `11.1rem`;

        altitudeInputContainer.append(this.altitudeRange, this.altitudeValue);
        this.element.append(altitudeInputContainer);

        this.addListnerToAltitudeInput(store);
    }

    private addListnerToAltitudeInput(store: IStore) {
        const levels = store.getAllowed('level');

        this.altitudeRange.addEventListener('change', () => {
            store.set('level', levels[+this.altitudeRange.value]);
        });

        this.altitudeRange.addEventListener('input', () => {
            const max = +this.altitudeRange.max;
            const val = +this.altitudeRange.value;

            this.altitudeRange.style.backgroundSize = `${(val * 100) / max}% 100%`;
            const valuesList =
                this.language === 'en' ? Object.keys(textValuesToAltitude) : Object.values(textValuesToAltitude);
            this.altitudeValue.innerText = valuesList[+this.altitudeRange.value];
            this.altitudeValue.style.top = `${this.WIDTH_INPUT - (this.WIDTH_INPUT / max) * val}rem`;
        });
    }

    private translateAltitudeValue() {
        const valuesList =
            this.language === 'en' ? Object.keys(textValuesToAltitude) : Object.values(textValuesToAltitude);
        this.altitudeValue.innerText = valuesList[+this.altitudeRange.value];
    }

    private renderFindMeButton(map: Map) {
        this.findMeButton = document.createElement('div');
        this.findMeButton.className = 'find-me-button';
        this.findMeButton.innerText = '➤';
        this.element.append(this.findMeButton);
        this.addListnerToFindMeButton(map);
    }

    private addListnerToFindMeButton(map: Map) {
        this.findMeButton.addEventListener('click', async () => {
            const [startLat, startLon] = await getGeolocation(true);
            map.panTo([startLat, startLon]);
            map.setZoom(ZOOM_TO_SELF_POSITION);
        });
    }

    private renderWeatherForecastDays(store: IStore) {
        this.accTimeLegend = document.createElement('div');
        this.accTimeLegend.id = 'accTime-legend';
        const calendar = store.get('calendar') as ICalendarData;
        calendar.days.forEach((day) => {
            const dayDiv = document.createElement('div');
            dayDiv.style.width = `${100 / calendar.days.length}%`;
            dayDiv.innerText = this.language === 'en' ? day.displayLong : dayName.get(day.displayLong) || '';
            this.accTimeLegend.append(dayDiv);
        });

        const progressBar = document.getElementById('progress-bar');
        progressBar?.append(this.accTimeLegend);
    }

    private translateWeatherForecastDays() {
        const calendar = this.store.get('calendar') as ICalendarData;
        this.accTimeLegend.childNodes.forEach((day, i) => {
            const dayKey = calendar.days[i].displayLong;
            day.textContent = this.language === 'en' ? dayKey : dayName.get(dayKey) || '';
        });
    }

    private renderMapSearchForm(map: Map, picker: IPicker) {
        this.mapSearchContainer = document.createElement('div');
        this.mapSearchContainer.className = 'map-search-container';

        this.mapSearchForm = document.createElement('form');
        this.mapSearchForm.className = 'map-search-form';
        this.mapSearchForm.id = 'mapSearchForm';

        this.mapSearchInput = document.createElement('input');
        this.mapSearchInput.className = 'map-search-input';
        this.mapSearchInput.type = 'text';
        this.mapSearchInput.placeholder = langObj[this.language].searchByCity;
        this.mapSearchInput.id = 'location';

        this.mapSearchButton = document.createElement('button');
        this.mapSearchButton.className = 'map-search-button';
        this.mapSearchButton.type = 'submit';
        this.mapSearchButton.innerText = langObj[this.language].search;

        this.mapSearchForm.append(this.mapSearchInput, this.mapSearchButton);
        this.mapSearchContainer.append(this.mapSearchForm);
        this.element.append(this.mapSearchContainer);

        this.addListnerToSearchForm(map, picker);
    }

    private addListnerToSearchForm(map: Map, picker: IPicker) {
        this.mapSearchForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const location = this.mapSearchInput.value;
            if (location !== '') {
                const [lat, lon] = await getCoordinates(location);
                map.panTo([lat, lon]);
                picker.open({ lat, lon });
            }
        });

        this.mapSearchInput.addEventListener('focus', () => {
            this.mapSearchContainer.classList.add('active-form');
            setTimeout(() => {
                this.mapSearchButton.style.display = 'inline-block';
            }, 500);
        });

        this.mapSearchInput.addEventListener('focusout', () => {
            setTimeout(() => {
                this.mapSearchContainer.classList.remove('active-form');
                this.mapSearchButton.style.display = 'none';
            }, 500);
        });
    }

    private renderScreenSizeButtons(map: Map) {
        this.openFullScreen = document.createElement('button');
        this.openFullScreen.className = 'open-fullscreen-button';
        this.openFullScreen.innerText = langObj[this.language].fullScreen;

        this.closeFullScreen = document.createElement('button');
        this.closeFullScreen.className = 'close-fullscreen-button';
        this.closeFullScreen.innerText = '╳';
        this.element.append(this.openFullScreen, this.closeFullScreen);

        this.addListnerToScreenSizeButtons(map);
    }

    private addListnerToScreenSizeButtons(map: Map) {
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

    private renderWindAnimToggler(store: IStore) {
        this.windAnimToggler = document.createElement('div');
        this.windAnimToggler.className = 'wind-anim-toggler';

        this.toggler = document.createElement('div');
        this.toggler.id = 'windAnim';
        this.toggler.className = 'switch-btn';

        this.windAnimLabel = document.createElement('div');
        this.windAnimLabel.className = 'wind-anim-label';
        this.windAnimLabel.innerText = langObj[this.language].windAnimation;

        this.windAnimToggler.append(this.toggler, this.windAnimLabel);
        this.element.append(this.windAnimToggler);

        this.addListnerToWindAnimToggler(store);
    }

    private addListnerToWindAnimToggler(store: IStore) {
        if (store.get('particlesAnim') === 'on') {
            this.toggler.classList.add('switch-on');
        }
        this.windAnimToggler.addEventListener('click', () => {
            if (store.get('particlesAnim') === 'on') {
                this.toggler.classList.toggle('switch-on');
                store.set('particlesAnim', 'off');
            } else {
                this.toggler.classList.toggle('switch-on');
                store.set('particlesAnim', 'on');
            }
        });
    }
}
