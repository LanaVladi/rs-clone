import { ObserverToModel } from './ObserverToModel';
import { ObserverToView } from './ObserverToView';
import INotify, {
    airQualityForecastData,
    ModelEvent,
    NotifyParameters,
    weatherFiveDaysData,
    weatherOneDayData,
    WeatherTodayData,
} from '../types';

export class Store implements INotify {
    private observerToModel: ObserverToModel;
    private observerToView: ObserverToView;

    // private weatherIndicators = {};
    private weatherTodayData!: WeatherTodayData;
    private weatherFiveDaysData!: weatherFiveDaysData;
    private airQualityForecastData!: airQualityForecastData;

    private kilometer = 1000;
    private minute = 60;

    // ==============TODAY WEATHER INDICATORS
    private temp!: number;
    private temp_min!: number;
    private temp_max!: number;
    private feels_like!: number;
    private humidity!: number;
    private pressure!: number;
    private visibility!: number;
    private wind_speed!: number;
    private clouds!: number;
    private sunrise!: string;
    private sunset!: string;
    private icon!: string;
    private id!: number;
    private description!: string;
    private main!: string;
    private timezone!: number;
    private name!: string;
    private countryCode!: string;
    private country!: string;
    private dataCalcTime!: string;

    // ==============TODAY WEATHER INDICATORS

    // ==============5 DAYS WEATHER INDICATORS

    private list!: Array<weatherOneDayData>;
    // private temp_min!: number;
    // private temp_max!: number;
    // private feels_like!: number;
    // private humidity!: number;
    // private pressure!: number;
    // private visibility!: number;
    // private wind_speed!: number;
    // private clouds!: number;
    // private sunrise!: string;
    // private sunset!: string;
    // private icon!: string;
    // private id!: number;
    // private description!: string;
    // private main!: string;
    // private timezone!: number;
    // private name!: string;
    // private countryCode!: string;
    // private country!: string;
    // private dataCalcTime!: string;

    constructor(observerToModel: ObserverToModel, observerToView: ObserverToView) {
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.observerToView.subscribe(ModelEvent.today_weather, this);
        this.observerToView.subscribe(ModelEvent.five_days_weather, this);
        this.observerToView.subscribe(ModelEvent.air_quality_forecast, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        console.log('params :', params);
        switch (params.typeEvents) {
            case ModelEvent.today_weather: {
                const WeatherTodayData = <WeatherTodayData>params.message;
                // console.log('weatherData :', weatherData);
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

                // this.setCountry(WeatherTodayData);
                // const country = this.getCountry();

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
                        // country,
                    },
                    typeEvents: ModelEvent.today_weather_indicators,
                });
                break;
            }
            case ModelEvent.five_days_weather: {
                const weatherFiveDaysData = <weatherFiveDaysData>params.message;
                console.log('weatherFiveDaysData :', weatherFiveDaysData);

                this.setListOfDays(weatherFiveDaysData);
                const list = this.getListOfDays();
                // this.setTempMinFiveDays(weatherFiveDaysData);
                // const tempMin = this.getTempMinFiveDays();
                // this.setTempMaxFiveDays(weatherFiveDaysData);
                // const tempMax = this.getTempMaxFiveDays();
                // this.setFeelsLikeFiveDays(weatherFiveDaysData);
                // const feelsLike = this.getFeelsLikeFiveDays();
                // this.setHumidityFiveDays(weatherFiveDaysData);
                // const humidity = this.getHumidityFiveDays();
                // this.setPressureFiveDays(weatherFiveDaysData);
                // const pressure = this.getPressureFiveDays();
                // this.setVisibilityFiveDays(weatherFiveDaysData);
                // const visibility = this.getVisibilityFiveDays();
                // this.setWindSpeedFiveDays(weatherFiveDaysData);
                // const windSpeed = this.getWindSpeed();
                // this.setCloudsFiveDays(weatherFiveDaysData);
                // const clouds = this.getCloudsFiveDays();
                // this.setSunriseFiveDays(weatherFiveDaysData);
                // const sunrise = this.getSunriseFiveDays();
                // this.setSunsetFiveDays(weatherFiveDaysData);
                // const sunset = this.getSunsetFiveDays();
                // this.setIconFiveDays(weatherFiveDaysData);
                // const icon = this.getIconFiveDays();

                // this.setIdFiveDays(weatherFiveDaysData);
                // const id = this.getIdFiveDays();
                // this.setDescriptionFiveDays(weatherFiveDaysData);
                // const description = this.getDescriptionFiveDays();
                // this.setMainWeatherFiveDays(weatherFiveDaysData);
                // const mainWeather = this.getMainWeatherFiveDays();

                this.setTimezoneFiveDays(weatherFiveDaysData);
                const timezone = this.getTimezoneFiveDays();
                console.log('timezone :', timezone);
                this.setCityNameFiveDays(weatherFiveDaysData);
                const cityName = this.getCityNameFiveDays();
                console.log('cityName :', cityName);
                this.setCountryCodeFiveDays(weatherFiveDaysData);
                const countryCode = this.getCountryCodeFiveDays();
                console.log('countryCode :', countryCode);

                // this.setDataCalcTimeFiveDays(weatherFiveDaysData);
                // const dataCalcTime = this.getDataCalcTimeFiveDays();

                this.observerToView.notify(ModelEvent.five_days_weather_indicators, {
                    message: {
                        list,
                        // sunrise,
                        // sunset,
                        // id,
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

                this.observerToView.notify(ModelEvent.air_quality_forecast_indicators, { message: {} });
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
        this.visibility = data.visibility / this.kilometer;
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
        this.sunrise = `${new Date(data.sys.sunrise).getHours()}:${new Date(data.sys.sunrise).getMinutes()}`;
    }

    getSunset() {
        return this.sunset;
    }

    setSunset(data: WeatherTodayData) {
        this.sunset = `${new Date(data.sys.sunset).getHours()}:${new Date(data.sys.sunset).getMinutes()}`;
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
        this.description = data.weather[0].description;
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
        this.timezone = -new Date(data.timezone).getTimezoneOffset() / this.minute;
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

    // getCountry() {
    //     return this.country;
    // }

    // setCountry(data: WeatherTodayData) {
    //     this.country = `${(data)}`;
    // }

    getDataCalcTime() {
        return this.dataCalcTime;
    }

    setDataCalcTime(data: WeatherTodayData) {
        this.dataCalcTime = `${new Date(data.dt).getHours()}:${new Date(data.dt).getMinutes()}`;
    }

    // getTempFiveDays() {
    //     return this.tempList;
    // }

    // setTempFiveDays(data: weatherFiveDaysData) {
    //     this.tempList = Math.floor(data.list.forEach((list) => list.main.temp));

    //     // this.tempList = Math.floor(data.list.map((list) => list.main.temp))
    // }

    getListOfDays() {
        return this.list;
    }

    setListOfDays(data: weatherFiveDaysData) {
        this.list = data.list;
    }

    // getSunrise() {
    //     return this.sunrise;
    // }

    // setSunrise(data: weatherFiveDaysData) {
    //     this.sunrise = `${new Date(data.sys.sunrise).getHours()}:${new Date(data.sys.sunrise).getMinutes()}`;
    // }

    // getSunset() {
    //     return this.sunset;
    // }

    // setSunset(data: weatherFiveDaysData) {
    //     this.sunset = `${new Date(data.sys.sunset).getHours()}:${new Date(data.sys.sunset).getMinutes()}`;
    // }

    // getIcon() {
    //     return this.icon;
    // }

    // setIcon(data: weatherFiveDaysData) {
    //     this.icon = data.weather[0].icon;
    // }

    // getId() {
    //     return this.id;
    // }

    // setId(data: weatherFiveDaysData) {
    //     this.id = data.weather[0].id;
    // }

    // getDescription() {
    //     return this.description;
    // }

    // setDescription(data: weatherFiveDaysData) {
    //     this.description = data.weather[0].description;
    // }

    // getMainWeather() {
    //     return this.main;
    // }

    // setMainWeather(data: weatherFiveDaysData) {
    //     this.main = data.weather[0].main;
    // }

    getTimezoneFiveDays() {
        return this.timezone;
    }

    setTimezoneFiveDays(data: weatherFiveDaysData) {
        this.timezone = -new Date(data.city.timezone).getTimezoneOffset() / this.minute;
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

    // // getCountry() {
    // //     return this.country;
    // // }

    // // setCountry(data: weatherFiveDaysData) {
    // //     this.country = `${(data)}`;
    // // }

    // getDataCalcTime() {
    //     return this.dataCalcTime;
    // }

    // setDataCalcTime(data: weatherFiveDaysData) {
    //     this.dataCalcTime = `${new Date(data.dt).getHours()}:${new Date(data.dt).getMinutes()}`;
    // }
}

// export const store = new Store();
