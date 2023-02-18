import { Map } from 'leaflet';

// =========== Observer ===================== //

export type NotifyParameters<T> = {
    message: T;
    typeEvents?: ModelEvent | ViewEvent;
};

export default interface INotify {
    notify<T>(params: NotifyParameters<T>): void;
}

export const enum ModelEvent {
    today_weather = 'today-weather',
    five_days_weather = 'five-days-weather',
    air_quality_forecast = 'air-quality-forecast',
    weather_map = 'map',
    language = 'language',
    temp_unit = 'temp-unit',
    input = 'input',

    today_weather_indicators = 'today-weather-indicators',
    five_days_weather_indicators  = 'five-days-weather',
    air_quality_forecast_indicators  = 'air-quality-forecast',
}

export const enum ViewEvent {
    input = 'input',
    geolocation = 'geolocation',
    language = 'language',
    temp_unit = 'temp-unit',
}

// =========== Observer ===================== //

// =========== open Weather ===================== //

export type weatherIndicators = {
    temp: number;
    tempMin: number;
    tempMax: number;
    feelsLike: number;
    pressure: number;
    humidity: number;
    windSpeed: number;
    visibility: number;
    clouds: number;
    sunrise: string;
    sunset: string;
    icon: string;
    id: number;
    mainWeather: string;
    description: string;
    timezone: number;
    cityName: string;
    countryCode: string;
    country: string;
    dataCalcTime: string;
};

export type WeatherTodayData = {
    coord: {
        lon: number;
        lat: number;
    };
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    rain: {
        '1h': number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
};

export type weatherFiveDaysData = {
    cod: string;
    message: number;
    cnt: number;
    list: Array<weatherOneDayData>;
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    };
};

export type weatherOneDayData = {
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    };
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    visibility: number;
    pop: number;
    rain: {
        '3h': number;
    };
    sys: {
        pod: string;
    };
    // dt_txt: '2022-08-30 15:00:00';
};

export type airQualityForecastData = {
    coord: string[];
    list: [
        {
            dt: number;
            main: {
                aqi: number;
            };
            components: {
                co: number;
                no: number;
                no2: number;
                o3: number;
                so2: number;
                pm2_5: number;
                pm10: number;
                nh3: number;
            };
        }
    ];
};

// =========== open Weather ===================== //

// =========== language ===================== //

export type pagesLang = {
    night: string;
    morning: string;
    afternoon: string;
    evening: string;
    today: string;
    fiveDay: string;
    forecastFiveDay: string;
    weatherToday: string;
    forecastToday: string;
    map: string;
    otherForecasts: string;
    searchByCity: string;
    airQuality: string;
    airQualityToday: string;
    asOf: string;
    nextHours: string;
    feelsLike: string;
    high: string;
    low: string;
    wind: string;
    temp: string;
    humidity: string;
    cloudiness: string;
    pressure: string;
    visibility: string;
    search: string;
    fullScreen: string;
    windAnimation: string;
    pleaseSpeak: string;
    surface: string;
};

// =========== language ===================== //

// =========== Windy map ===================== //
export interface ICoordinates {
    lat: {
        degrees: number;
        minutes: number;
        seconds: number;
    };
    lon: {
        degrees: number;
        minutes: number;
        seconds: number;
    };
}

export interface IStore {
    get(key: string): ICalendarData | string | string[];
    getAllowed(key: string): string[] | string;
    set(key: string, value: string, options?: { forceChange: boolean }): void;
    on(key: string, callback: () => void): void;
    once(key: string, callback: () => void): void;
    off(key: string, callback: () => void): void;
}

export interface IPicker {
    open(coords: { lat: number; lon: number }): void;
    close(): void;
    getParams(): PickerParams;
    on(event: string, callback: () => void): void;
    once(event: string, callback: () => void): void;
    off(event: string, callback: () => void): void;
}

export interface IBroadcast {
    fire(event: string, args: Array<() => void>): void;
    on(event: string, callback: () => void): void;
    once(event: string, callback: () => void): void;
    off(event: string, callback: () => void): void;
}

export interface IOverlays {
    wind: IOverlaysMethods;
    temp: IOverlaysMethods;
    pressure: IOverlaysMethods;
}

export interface IOverlaysMethods {
    convertNumber(value: unknown): number;
    convertValue(value: unknown): string;
    cycleMetric(): void;
    listMetrics(): string[];
    setMetric(metric: string): void;
    metric: string;
}

export interface IUtils {
    deg2rad(deg: number): number;
    isNear(coords1: { lat: number; lon: number }, coords2: { lat: number; lon: number }): boolean;
    isValidLatLonObj(coords: { lat: number; lon: number }): boolean;
    lonDegToXUnit(deg: number): number;
    latDegToYUnit(deg: number): number;
    unitXToLonDeg(x: number): number;
    unitYToLatDeg(y: number): number;
    latLon2str(coords: { lat: number; lon: number }): string;
    str2latLon(hash: string): { lat: number; lon: number };
    wave2obj(wave: number[]): { period: number; dir: number; size: number };
    wind2obj(wind: number[]): { wind: number; dir: number };
}

export type PickerParams = {
    lat: number;
    lon: number;
    values: unknown;
    overlay: string;
};

export interface IWindyAPI {
    picker: IPicker;
    utils: IUtils;
    broadcast: IBroadcast;
    store: IStore;
    overlays: IOverlays;
    map: Map;
}

export interface IDay {
    display: string;
    displayLong: string;
    day: number;
    middayTs: number;
    start: number;
    end: number;
    month: number;
    year: number;
}

export interface ICalendarData {
    calendarHours: number;
    numOfHours: number;
    minifestFile: IMinifestFile;
    midnight: string;
    startOfTimeline: string;
    start: number;
    days: IDay[];
    endOfcalendar: string;
    endOfCal: number;
    maxTimestamp: number;
    type: string;
    timestamps: number[];
}

export interface IMinifestFile {
    v: string;
    ref: string;
    update: string;
    dst: Array<[number, number, number]>;
    info: string;
    premium: boolean;
    primary_refs: number[];
    secondary_refs: number[];
}

export type Layer = 'wind' | 'temp' | 'pressure';

// =========== Windy map ===================== //
