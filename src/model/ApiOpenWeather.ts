import INotify, {
    airQualityForecastData,
    ModelEvent,
    NotifyParameters,
    ViewEvent,
    weatherFiveDaysData,
    WeatherTodayData,
} from '../types';
import {
    apiKeyOpenWeather,
    baseLinkOpenWeatherAirQuality,
    baseLinkOpenWeatherFiveDays,
    baseLinkOpenWeatherToday,
    celsius,
    fahrenheit,
} from '../constants';
import { ObserverToModel } from './ObserverToModel';
import { ObserverToView } from './ObserverToView';
import { GeolocationModel } from './GeolocationModel';
import { Store } from './Store';

export class ApiOpenWeather implements INotify {
    #weatherUrlToday!: string;
    #weatherUrlFiveDays!: string;
    #forecastUrlAirQuality!: string;
    #weatherMap!: string;
    private readonly storageKeyCity = 'city';
    private storageKeyLang = 'lang';
    private cityList = new Array<string>();
    private langList!: string;
    public temperatureUnit!: string;
    public tempUnitInRequest!: string;
    public city!: string | number[];
    public lang!: string;

    private observerToModel: ObserverToModel;
    private observerToView: ObserverToView;
    private store: Store;
    private geolocation: GeolocationModel;

    constructor(
        observerToModel: ObserverToModel,
        observerToView: ObserverToView,
        geolocation: GeolocationModel,
        store: Store
    ) {
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.geolocation = geolocation;
        this.store = store;
        this.checkLocalStorageCity();
        this.checkLocalStorageLanguage();

        this.observerToModel.subscribe(ViewEvent.input, this);
        this.observerToModel.subscribe(ViewEvent.geolocation, this);
        this.observerToModel.subscribe(ViewEvent.temp_unit, this);
        this.observerToModel.subscribe(ViewEvent.language, this);
        this.observerToModel.subscribe(ViewEvent.voice, this);
    }

    protected checkLocalStorageCity() {
        if (localStorage.getItem(this.storageKeyCity)) {
            this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
        } else {
            this.cityList = ['Ташкент'];
            localStorage.setItem(this.storageKeyCity, JSON.stringify(this.cityList));
        }

        const lastCity = this.cityList[this.cityList.length - 1];
        this.notify({ message: lastCity || 'Ташкент' });
    }

    protected checkLocalStorageLanguage() {
        if (localStorage.getItem(this.storageKeyLang)) {
            this.langList = JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`);
        } else {
            this.langList = 'ru';
            localStorage.setItem(this.storageKeyLang, JSON.stringify(this.langList));
        }

        const lastLang = this.langList;
        this.notify({ message: lastLang });
    }

    public async notify<T>(params: NotifyParameters<T>) {
        if (typeof params.message === 'string') {
            if (params.message.includes('metric') || params.message.includes('imperial')) {
                this.temperatureUnit = params.message;
            } else if (params.message.includes('ru') || params.message.includes('en')) {
                this.lang = params.message;
            } else {
                this.city = params.message;
            }
            this.getAllWeatherData(this.city, this.temperatureUnit, this.lang);
        } else if (Array.isArray(params.message)) {
            this.city = params.message;
            this.getAllWeatherData(this.city, this.temperatureUnit, this.lang);
        }
    }

    private async getAllWeatherData(city: string | number[], temperatureUnit?: string, lang?: string) {
        if (typeof city === 'string') {
            this.checkLocalStorage(city);
            const localCity = localStorage.getItem('city');
        }

        const weatherTodayData: WeatherTodayData | '' = await this.getWeatherTodayData(city, temperatureUnit, lang);

        if (weatherTodayData !== '') this.store.setWeatherTodayData(weatherTodayData);

        this.observerToView.notify(ModelEvent.today_weather, {
            message: weatherTodayData,
            typeEvents: ModelEvent.today_weather,
        });

        const weatherFiveDaysData: weatherFiveDaysData | '' = await this.getWeatherFiveDaysData(
            city,
            temperatureUnit,
            lang
        );

        if (weatherFiveDaysData !== '') this.store.setWeatherFiveDaysData(weatherFiveDaysData);
        this.observerToView.notify(ModelEvent.five_days_weather, {
            message: weatherFiveDaysData,
            typeEvents: ModelEvent.five_days_weather,
        });

        const airQualityForecastData: airQualityForecastData | '' = await this.getForecastAirQualityData(
            city,
            temperatureUnit,
            lang
        );

        if (airQualityForecastData !== '') this.store.setAirQualityForecastData(airQualityForecastData);
        this.observerToView.notify(ModelEvent.air_quality_forecast, {
            message: airQualityForecastData,
            typeEvents: ModelEvent.air_quality_forecast,
        });
    }

    checkTempUnit(temperatureUnit?: string) {
        if (temperatureUnit === 'metric') {
            this.tempUnitInRequest = celsius;
        } else if (temperatureUnit === 'imperial') {
            this.tempUnitInRequest = fahrenheit;
        } else {
            this.tempUnitInRequest = celsius;
        }
    }

    checkLanguage(lang?: string) {
        if (lang === 'en') {
            this.lang = 'en';
        } else if (lang === 'ru') {
            this.lang = 'ru';
        } else {
            this.lang = 'ru';
        }
    }

    protected checkLocalStorage(cityName: string) {
        if (localStorage.getItem(this.storageKeyCity)) {
            this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
            if (this.cityList?.includes(cityName)) {
                return;
            } else if (this.cityList.length < 5) {
                this.cityList?.push(cityName);
            } else {
                this.cityList.length = 5;
                this.cityList?.pop();
                this.cityList?.push(cityName);
            }
        }

        localStorage.setItem(this.storageKeyCity, JSON.stringify(this.cityList));
    }

    private async getWeatherTodayData(
        city: string | number[],
        temperatureUnit?: string,
        lang?: string
    ): Promise<WeatherTodayData | ''> {
        this.checkTempUnit(temperatureUnit);
        this.checkLanguage(lang);
        try {
            if (typeof city === 'string') {
                this.#weatherUrlToday = `${baseLinkOpenWeatherToday}?q=${city}&appid=${apiKeyOpenWeather}&lang=${this.lang}&units=${this.tempUnitInRequest}`;
            } else {
                const [lat, lon] = city;
                this.#weatherUrlToday = `${baseLinkOpenWeatherToday}?lat=${lat}&lon=${lon}&appid=${apiKeyOpenWeather}&lang=${this.lang}&units=${this.tempUnitInRequest}`;
            }

            const response = await fetch(this.#weatherUrlToday);
            if (response.ok === true) {
                if (city === 'string') this.checkLocalStorage(city);
                const localCity = localStorage.getItem('city');
            }
            return await response.json();
        } catch (error) {
            return '';
        }
    }

    private async getWeatherFiveDaysData(
        city: string | number[],
        temperatureUnit?: string,
        lang?: string
    ): Promise<weatherFiveDaysData | ''> {
        this.checkTempUnit(temperatureUnit);
        this.checkLanguage(lang);
        try {
            if (typeof city === 'string') {
                this.#weatherUrlFiveDays = `${baseLinkOpenWeatherFiveDays}?q=${city}&appid=${apiKeyOpenWeather}&lang=${this.lang}&units=${this.tempUnitInRequest}`;
            } else {
                const [lat, lon] = city;
                this.#weatherUrlFiveDays = `${baseLinkOpenWeatherFiveDays}?lat=${lat}&lon=${lon}&appid=${apiKeyOpenWeather}&lang=${this.lang}&units=${this.tempUnitInRequest}`;
            }

            const response = await fetch(this.#weatherUrlFiveDays);

            if (response.ok === true) {
                if (city === 'string') this.checkLocalStorage(city);
                const localCity = localStorage.getItem('city');
            }
            return await response.json();
        } catch (error) {
            return '';
        }
    }

    private async getForecastAirQualityData(
        city: string | number[],
        temperatureUnit?: string,
        lang?: string
    ): Promise<airQualityForecastData | ''> {
        this.checkTempUnit(temperatureUnit);
        this.checkLanguage(lang);
        try {
            if (typeof city === 'string') {
                const coord = await this.geolocation.getCoordinates(city);

                const lat = coord[0];
                const lon = coord[1];
                this.#forecastUrlAirQuality = `${baseLinkOpenWeatherAirQuality}?lat=${lat}&lon=${lon}&appid=${apiKeyOpenWeather}&lang=${this.lang}&units=${this.tempUnitInRequest}`;
            } else {
                const [lat, lon] = city;
                this.#forecastUrlAirQuality = `${baseLinkOpenWeatherAirQuality}?lat=${lat}&lon=${lon}&appid=${apiKeyOpenWeather}&lang=${this.lang}&units=${this.tempUnitInRequest}`;
            }

            const response = await fetch(this.#forecastUrlAirQuality);

            if (response.ok === true) {
                if (city === 'string') this.checkLocalStorage(city);
                const localCity = localStorage.getItem('city');
            }
            return await response.json();
        } catch (error) {
            return '';
        }
    }
}
