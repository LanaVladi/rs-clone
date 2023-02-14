export type NotifyParameters<T> = {
    message: T;
    typeEvents: APIEvent;
};

export interface Subscriber {
    notify<T>(params: NotifyParameters<T>): void;
}

export const enum APIEvent {
    todayWeather = 'today-weather',
    fiveDaysWeather = 'five-days-weather',
}

export type WeatherTodayData = {
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_min: number;
        temp_max: number;
    };
    clouds: {
        all: number;
    };
    visibility: number;
    timezone: number;
    sys: {
        sunrise: number;
        sunset: number;
    };
    weather: [
        {
            description: string;
            main: string;
            icon: string;
        }
    ];
    wind: {
        speed: number;
        deg: number;
    };
    name: string;
};

export type weatherFiveDaysData = {
    // cod: '200';
    // message: 0;
    // cnt: 40;
    list: Array<weatherOneDayData>;
    city: {
        // id: 3163858;
        name: string;
        coord: {
            lat: number;
            lon: number;
        };
        // country: 'IT';
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
        temp_kf: number; // what is it?
    };
    weather: [
        {
            // id: 500;
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
    // pop: 0.32;
    rain: {
        '3h': number; //0.26;
    };
    sys: {
        pod: string; //   pod: 'd';
    };
    // dt_txt: '2022-08-30 15:00:00';
};
