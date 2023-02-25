
export const apiKeyMapForecast = 'xXzWFyvlQ5v6hx3VoAyja2ss9hpFgVRi'; // windy.com Map Forecast API
export const baseLinkMapForecast = `https://api.windy.com/assets/map-forecast/`;

export const apiKeyPointForecast = ''; // windy.com Point Forecast API
export const baseLinkPointForecast = 'https://api.windy.com/api/point-forecast/v2';

export const apiKeyOpenWeather = 'cb5257dbb6329ba1752a8bea5ea623e5'; // openweathermap.org
export const baseLinkOpenWeatherToday = 'https://api.openweathermap.org/data/2.5/weather'; //openweathermap.org today weather
export const baseLinkOpenWeatherFiveDays = 'https://api.openweathermap.org/data/2.5/forecast'; //openweathermap.org 5 days weather
export const baseLinkOpenWeatherAirQuality = 'http://api.openweathermap.org/data/2.5/air_pollution'; //openweathermap.org air quality
export const baseLinkOpenWeatherDirectGeocoding = 'http://api.openweathermap.org/geo/1.0/direct'; //openweathermap.org direct geocoding
export const baseLinkDirectGeocoding = 'https://nominatim.openstreetmap.org/search/${encodeURIComponent(location)}?format=json';

export const celsius = 'metric';
export const fahrenheit = 'imperial';
export const lang: 'en' | 'ru' = 'ru';

export const weatherIconUrl = `http://openweathermap.org/img/wn/`;
export const weatherIconImgFormat = `@2x.png`;

// export weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

export const langObj = {
    en: {
        night: 'Nigth',
        morning: 'Morning',
        afternoon: 'Afternoon',
        evening: 'Evening',
        today: 'Today',
        fiveDay: '5 days',
        forecastFiveDay: 'Forecast for 5 days',
        weatherToday: 'Weather for today',
        forecastToday: 'Forecast for today',
        map: 'Map',
        otherForecasts: 'Other forecasts',
        searchByCity: 'Search by city',
        airQuality: 'Air quality',
        airQualityToday: 'Air quality today',
        asOf: 'As of',
        nextHours: 'Next hours',
        feelsLike: 'Feels like',
        high: 'High',
        low: 'Low',
        wind: 'Wind',
        temp: 'Temperature',
        humidity: 'Humidity',
        cloudiness: 'Cloudiness',
        pressure: 'Pressure',
        visibility: 'Visibility',
        search: 'Search',
        fullScreen: 'Full screen',
        windAnimation: 'Wind animation',
        pleaseSpeak: 'Please speak',
        surface: 'surface',
    },
    ru: {
        night: 'Ночь',
        morning: 'Утро',
        afternoon: 'День',
        evening: 'Вечер',
        today: 'Сегодня',
        fiveDay: 'На 5 дней',
        forecastFiveDay: 'Прогноз на 5 дней',
        weatherToday: 'Погода на сегодня',
        forecastToday: 'Погода на сегодня',
        map: 'Карта',
        otherForecasts: 'Другие прогнозы',
        searchByCity: 'Поиск по городу',
        airQuality: 'Качество воздуха',
        airQualityToday: 'Качество воздуха сегодня',
        asOf: 'По состоянию на',
        nextHours: 'На ближайшие часы',
        feelsLike: 'Ощущается как',
        high: 'Макс.',
        low: 'Мин.',
        wind: 'Ветер',
        temp: 'Температура',
        humidity: 'Влажность',
        cloudiness: 'Облачность',
        pressure: 'Давление',
        visibility: 'Видимость',
        search: 'Поиск',
        fullScreen: 'На весь экран',
        windAnimation: 'Анимация ветра',
        pleaseSpeak: 'Говорите',
        surface: 'поверхность',
    },
};

export const textValuesToAltitude = {
    'surface': 'поверхность',
    '100 m': '100 м',
    '300 m': '300 м',
    '600 m': '600 м',
    '750 m': '750 м',
    '1 km': '1 км',
    '1.5 km': '1,5 км',
    '2 km': '2 км',
    '3 km': '3 км',
    '4.2 km': '4,2 км',
    '5.5 km': '5,5 км',
    '7 km': '7 км',
    '9 km': '9 км',
    '10 km': '10 км',
    '11.7 km': '11,7 км',
    '13.5 km': '13,5 км',
}

export const SPEECH_RATE = 0.75;
export const NUMBER_ALTERNATIVE_MATCHES = 1;
export const WEIGHT_VALUE_THIS_GRAMMAR = 1;

export const enum langForSpeechAPI {
    ru = 'ru-RU',
    en = 'en-US'
}

export const wordsForGrammar = {
    weather: 'погода',
    forecast: 'прогноз',
    today: 'сегодня',
    hourly: 'почасовой',
    day: 'день',
    holydays: 'выходные',
    month: 'месяц',
    show: 'покажи',
    tell: 'расскажи',
    speak: 'скажи',
    tomorrow: 'завтра',
};

export const ZOOM_TO_SELF_POSITION = 10;

export const dayName = new Map([
    ['MON', 'ПН'],
    ['TUE', 'ВТ'],
    ['WED', 'СР'],
    ['THU', 'ЧТ'],
    ['FRI', 'ПТ'],
    ['SAT', 'СБ'],
    ['SUN', 'ВС'],
]);

export const unitName = new Map([
    ['kt', 'Узел'],
    ['bft', 'Шк.Бофорта'],
    ['m/s', 'м/с'],
    ['km/h', 'км/ч'],
    ['mph', 'миль/ч'],
    ['°C', '°C'],
    ['°F', '°F'],
    ['hPa', 'гПа'],
    ['mmHg', 'мм.рт.ст.'],
    ['inHg', 'дюйм рт.ст.'],
]);
