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
