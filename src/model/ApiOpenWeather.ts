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
    lang,
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
    private cityList = new Array<string>();
    public temperatureUnit!: string;
    public tempUnitInRequest!: string;
    public city!: string;

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
        this.checkLocalStorage();
        this.store = store;
        this.observerToModel.subscribe(ViewEvent.input, this);
        this.observerToModel.subscribe(ViewEvent.geolocation, this);
        this.observerToModel.subscribe(ViewEvent.temp_unit, this);
    }

    protected checkLocalStorage() {
        if (localStorage.getItem(this.storageKeyCity) !== null) {
            this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
        } else {
            this.cityList = ['Ташкент'];
            localStorage.setItem(this.storageKeyCity, JSON.stringify(this.cityList));
        }

        const lastCity = this.cityList[this.cityList.length - 1];
        this.notify({ message: lastCity || 'Ташкент' });
    }

    public async notify<T>(params: NotifyParameters<T>) {
        if (typeof params.message === 'string') {
            if (params.message.includes('metric') || params.message.includes('imperial')) {
                this.temperatureUnit = params.message;
                // this.getAllWeatherData(city, temperatureUnit);
            } else {
                this.city = params.message;
                // this.getAllWeatherData(city);
            }
            this.getAllWeatherData(this.city, this.temperatureUnit);
        } else if (Array.isArray(params.message)) {
            const city = params.message;
            // console.log('city coords :', city);
            this.getAllWeatherData(city, this.temperatureUnit);
        }
    }

    private async getAllWeatherData(city: string | number[], temperatureUnit?: string) {
        const weatherTodayData: WeatherTodayData = await this.getWeatherTodayData(city, temperatureUnit);
        // console.log('weatherTodayData :', weatherTodayData);

        this.store.setWeatherTodayData(weatherTodayData);

        this.observerToView.notify(ModelEvent.today_weather, {
            message: weatherTodayData,
            typeEvents: ModelEvent.today_weather,
        });

        const weatherFiveDaysData: weatherFiveDaysData = await this.getWeatherFiveDaysData(city, temperatureUnit);
        // console.log('weatherFiveDaysData :', weatherFiveDaysData);

        this.store.setWeatherFiveDaysData(weatherFiveDaysData);
        this.observerToView.notify(ModelEvent.five_days_weather, {
            message: weatherFiveDaysData,
            typeEvents: ModelEvent.five_days_weather,
        });

        const airQualityForecastData: airQualityForecastData = await this.getForecastAirQualityData(
            city,
            temperatureUnit
        );
        // console.log('airQualityForecastData :', airQualityForecastData);

        this.store.setAirQualityForecastData(airQualityForecastData);
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

    private async getWeatherTodayData(city: string | number[], temperatureUnit?: string): Promise<WeatherTodayData> {
        this.checkTempUnit(temperatureUnit);
        if (typeof city === 'string') {
            this.#weatherUrlToday = `${baseLinkOpenWeatherToday}?q=${city}&appid=${apiKeyOpenWeather}&lang=${lang}&units=${this.tempUnitInRequest}`;
        } else {
            const [lat, lon] = city;
            this.#weatherUrlToday = `${baseLinkOpenWeatherToday}?lat=${lat}&lon=${lon}&appid=${apiKeyOpenWeather}&lang=${lang}&units=${this.tempUnitInRequest}`;
        }

        const response = await fetch(this.#weatherUrlToday);
        return await response.json();
    }

    private async getWeatherFiveDaysData(
        city: string | number[],
        temperatureUnit?: string
    ): Promise<weatherFiveDaysData> {
        this.checkTempUnit(temperatureUnit);
        if (typeof city === 'string') {
            this.#weatherUrlFiveDays = `${baseLinkOpenWeatherFiveDays}?q=${city}&appid=${apiKeyOpenWeather}&lang=${lang}&units=${this.tempUnitInRequest}`;
        } else {
            const [lat, lon] = city;
            this.#weatherUrlFiveDays = `${baseLinkOpenWeatherFiveDays}?lat=${lat}&lon=${lon}&appid=${apiKeyOpenWeather}&lang=${lang}&units=${this.tempUnitInRequest}`;
        }

        const response = await fetch(this.#weatherUrlFiveDays);
        return await response.json();
    }

    private async getForecastAirQualityData(city: string | number[], temperatureUnit?: string): Promise<airQualityForecastData> {
        if (typeof city === 'string') {
            const coord = await this.geolocation.getCoordinates(city);

            const lat = coord[0];
            const lon = coord[1];
            this.#forecastUrlAirQuality = `${baseLinkOpenWeatherAirQuality}?lat=${lat}&lon=${lon}&appid=${apiKeyOpenWeather}&lang=${lang}&units=${this.tempUnitInRequest}`;
        } else {
            const [lat, lon] = city;
            this.#forecastUrlAirQuality = `${baseLinkOpenWeatherAirQuality}?lat=${lat}&lon=${lon}&appid=${apiKeyOpenWeather}&lang=${lang}&units=${this.tempUnitInRequest}`;
        }

        const response = await fetch(this.#forecastUrlAirQuality);
        return await response.json();
    }

    // private async getWeatherMap(city: string): Promise<IWindyAPI> {}
}
