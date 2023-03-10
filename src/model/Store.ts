import { ObserverToModel } from './ObserverToModel';
import { ObserverToView } from './ObserverToView';
import INotify, {
    airQualityForecastData,
    ModelEvent,
    NotifyParameters,
    Pollutants,
    weatherFiveDaysData,
    weatherOneDayData,
    WeatherTodayData,
} from '../types';

export class Store implements INotify {
    private observerToModel: ObserverToModel;
    private observerToView: ObserverToView;

    private weatherTodayData!: WeatherTodayData;
    private weatherFiveDaysData!: weatherFiveDaysData;
    private airQualityForecastData!: airQualityForecastData;

    private minute = 60;
    private millisecondsPerSecond = 1000;
    private metersPerKilometer = 1000;
    private secondsPerHour = 3600;

    // ==============TODAY WEATHER INDICATORS
    private coord!: { lon: number; lat: number; };
    private temp!: number;
    private temp_min!: number;
    private temp_max!: number;
    private feels_like!: number;
    private humidity!: number;
    private pressure!: number;
    private visibility!: number;
    private wind_speed!: number;
    private clouds!: number;
    private sunrise!: number;
    private sunset!: number;
    private icon!: string;
    private id!: number;
    private description!: string;
    private main!: string;
    private timezone!: number;
    private name!: string;
    private countryCode!: string;
    private country!: string;
    private dataCalcTime!: number;

    // ==============5 DAYS WEATHER INDICATORS
    private list!: Array<weatherOneDayData>;

    // ============== AIR QUALITY INDICATORS
    public pollutants!: Pollutants;

    constructor(observerToModel: ObserverToModel, observerToView: ObserverToView) {
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.observerToView.subscribe(ModelEvent.today_weather, this);
        this.observerToView.subscribe(ModelEvent.five_days_weather, this);
        this.observerToView.subscribe(ModelEvent.air_quality_forecast, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.today_weather: {
                const WeatherTodayData = <WeatherTodayData>params.message;
                this.setTemp(WeatherTodayData);
                const temp = this.getTemp();
                this.setTempMin(WeatherTodayData);
                const tempMin = this.getTempMin();
                this.setTempMax(WeatherTodayData);
                const tempMax = this.getTempMax();
                this.setFeelsLike(WeatherTodayData);
                const feelsLike = this.getFeelsLike();
                this.setHumidity(WeatherTodayData);
                const humidity = this.getHumidity();
                this.setPressure(WeatherTodayData);
                const pressure = this.getPressure();
                this.setVisibility(WeatherTodayData);
                const visibility = this.getVisibility();
                this.setWindSpeed(WeatherTodayData);
                const windSpeed = this.getWindSpeed();
                this.setClouds(WeatherTodayData);
                const clouds = this.getClouds();
                this.setSunrise(WeatherTodayData);
                const sunrise = this.getSunrise();
                this.setSunset(WeatherTodayData);
                const sunset = this.getSunset();
                this.setIcon(WeatherTodayData);
                const icon = this.getIcon();

                this.setId(WeatherTodayData);
                const id = this.getId();
                this.setDescription(WeatherTodayData);
                const description = this.getDescription();
                this.setMainWeather(WeatherTodayData);
                const mainWeather = this.getMainWeather();

                this.setTimezone(WeatherTodayData);
                const timezone = this.getTimezone();
                this.setCityName(WeatherTodayData);
                const cityName = this.getCityName();

                this.setCountryCode(WeatherTodayData);
                const countryCode = this.getCountryCode();

                this.setDataCalcTime(WeatherTodayData);
                const dataCalcTime = this.getDataCalcTime();

                this.setCoord(WeatherTodayData);
                const coord = this.coord;

                this.observerToView.notify(ModelEvent.today_weather_indicators, {
                    message: {
                        temp,
                        tempMin,
                        tempMax,
                        feelsLike,
                        humidity,
                        pressure,
                        visibility,
                        windSpeed,
                        clouds,
                        sunrise,
                        sunset,
                        icon,
                        description,
                        id,
                        mainWeather,
                        timezone,
                        cityName,
                        countryCode,
                        dataCalcTime,
                        coord,
                    },
                    typeEvents: ModelEvent.today_weather_indicators,
                });
                break;
            }
            case ModelEvent.five_days_weather: {
                const weatherFiveDaysData = <weatherFiveDaysData>params.message;
                this.setListOfDays(weatherFiveDaysData);
                const list = this.getListOfDays();

                this.setTimezoneFiveDays(weatherFiveDaysData);
                const timezone = this.getTimezoneFiveDays();
                this.setCityNameFiveDays(weatherFiveDaysData);
                const cityName = this.getCityNameFiveDays();
                this.setCountryCodeFiveDays(weatherFiveDaysData);
                const countryCode = this.getCountryCodeFiveDays();

                this.observerToView.notify(ModelEvent.five_days_weather_indicators, {
                    message: {
                        list,
                        timezone,
                        cityName,
                        countryCode,
                    },
                    typeEvents: ModelEvent.five_days_weather_indicators,
                });
                break;
            }
            case ModelEvent.air_quality_forecast: {
                const airQualityForecastData = <airQualityForecastData>params.message;
                this.setPollutants(airQualityForecastData);
                const pollutants = this.getPollutants();

                this.observerToView.notify(ModelEvent.air_quality_forecast_indicators, {
                    message: {
                        pollutants,
                    },
                    typeEvents: ModelEvent.air_quality_forecast_indicators,
                });
                break;
            }
        }
    }

    getStore() {
        return this;
    }

    getWeatherTodayData() {
        return this.weatherTodayData;
    }

    setWeatherTodayData(data: WeatherTodayData) {
        this.weatherTodayData = data;
    }

    getWeatherFiveDaysData() {
        return this.weatherFiveDaysData;
    }

    setWeatherFiveDaysData(data: weatherFiveDaysData) {
        this.weatherFiveDaysData = data;
    }

    getAirQualityForecastData() {
        return this.airQualityForecastData;
    }

    setAirQualityForecastData(data: airQualityForecastData) {
        this.airQualityForecastData = data;
    }

    getCoord() {
        return this.coord;
    }

    setCoord(data: WeatherTodayData) {
        this.coord = data.coord
    }

    getTemp() {
        return this.temp;
    }

    setTemp(data: WeatherTodayData) {
        this.temp = Math.floor(data.main.temp);
    }

    getTempMin() {
        return this.temp_min;
    }

    setTempMin(data: WeatherTodayData) {
        this.temp_min = Math.floor(data.main.temp_min);
    }

    getTempMax() {
        return this.temp_max;
    }

    setTempMax(data: WeatherTodayData) {
        this.temp_max = Math.floor(data.main.temp_max);
    }

    getFeelsLike() {
        return this.feels_like;
    }

    setFeelsLike(data: WeatherTodayData) {
        this.feels_like = Math.floor(data.main.feels_like);
    }

    getHumidity() {
        return this.humidity;
    }

    setHumidity(data: WeatherTodayData) {
        this.humidity = data.main.humidity;
    }

    getPressure() {
        return this.pressure;
    }

    setPressure(data: WeatherTodayData) {
        this.pressure = data.main.pressure;
    }

    getVisibility() {
        return this.visibility;
    }

    setVisibility(data: WeatherTodayData) {
        this.visibility = data.visibility / this.metersPerKilometer;
    }

    getWindSpeed() {
        return this.wind_speed;
    }

    setWindSpeed(data: WeatherTodayData) {
        this.wind_speed = Math.floor(data.wind.speed);
    }

    getClouds() {
        return this.clouds;
    }

    setClouds(data: WeatherTodayData) {
        this.clouds = Math.floor(data.clouds.all);
    }

    getSunrise() {
        return this.sunrise;
    }

    setSunrise(data: WeatherTodayData) {
        this.sunrise = data.sys.sunrise;
    }

    getSunset() {
        return this.sunset;
    }

    setSunset(data: WeatherTodayData) {
        this.sunset = data.sys.sunset;
    }

    getIcon() {
        return this.icon;
    }

    setIcon(data: WeatherTodayData) {
        this.icon = data.weather[0].icon;
    }

    getId() {
        return this.id;
    }

    setId(data: WeatherTodayData) {
        this.id = data.weather[0].id;
    }

    getDescription() {
        return this.description;
    }

    setDescription(data: WeatherTodayData) {
        this.description = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);
    }

    getMainWeather() {
        return this.main;
    }

    setMainWeather(data: WeatherTodayData) {
        this.main = data.weather[0].main;
    }

    getTimezone() {
        return this.timezone;
    }

    setTimezone(data: WeatherTodayData) {
        this.timezone = data.timezone / this.secondsPerHour;
    }

    getCityName() {
        return this.name;
    }

    setCityName(data: WeatherTodayData) {
        this.name = data.name;
    }

    getCountryCode() {
        return this.countryCode;
    }

    setCountryCode(data: WeatherTodayData) {
        this.countryCode = data.sys.country;
    }

    getDataCalcTime() {
        return this.dataCalcTime;
    }

    setDataCalcTime(data: WeatherTodayData) {
        this.dataCalcTime = data.dt;
    }

    getPollutants() {
        return this.pollutants;
    }

    setPollutants(data: airQualityForecastData) {
        this.pollutants = data.list[0].components;
    }

    getListOfDays() {
        return this.list;
    }

    setListOfDays(data: weatherFiveDaysData) {
        this.list = data.list;
    }

    getTimezoneFiveDays() {
        return this.timezone;
    }

    setTimezoneFiveDays(data: weatherFiveDaysData) {
        this.timezone = data.city.timezone / this.secondsPerHour;
    }

    getCityNameFiveDays() {
        return this.name;
    }

    setCityNameFiveDays(data: weatherFiveDaysData) {
        this.name = data.city.name;
    }

    getCountryCodeFiveDays() {
        return this.countryCode;
    }

    setCountryCodeFiveDays(data: weatherFiveDaysData) {
        this.countryCode = data.city.country;
    }
}
