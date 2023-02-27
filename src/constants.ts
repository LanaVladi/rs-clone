
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

export const MINUTES_IN_HOUR = 60;
export const MS_IN_SEC = 1000;
export const HALF_CIRCLE_DEG = 180;

export const DataToBGStyle = {
    day: {
        '200': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '201': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '202': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '210': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '211': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '212': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '221': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '230': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '231': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '232': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '300': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '301': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '302': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '310': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '311': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '312': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '313': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '314': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '321': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '500': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Rain-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '501': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Rain-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '502': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '503': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '504': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '511': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '520': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '521': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '522': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '531': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '600': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Flurries-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '601': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '602': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '611': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Flurries-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '612': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '613': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '615': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '616': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '620': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '621': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '622': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '701': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '711': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '721': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Foggy-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '731': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '741': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Foggy-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '751': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '761': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '762': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '771': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '781': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '800': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Sunny-day_4.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#005986',
            backgroundGradient: 'linear-gradient(0deg,#d8eeee,#d8eeee 25%,#64adc9 65%,#005986 90%,#005986)',
        },
        '801': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Fair-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#005986',
            backgroundGradient: 'linear-gradient(0deg,#d8eeee,#d8eeee 25%,#64adc9 65%,#005986 90%,#005986)',
        },
        '802': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_PartlyCloudy-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#005986',
            backgroundGradient: 'linear-gradient(0deg,#d8eeee,#d8eeee 25%,#64adc9 65%,#005986 90%,#005986)',
        },
        '803': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Cloudy-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '804': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_MostlyCloudy-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
    },
    night: {
        '200': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '201': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '202': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '210': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '211': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '212': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '221': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '230': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '231': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '232': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '300': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '301': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '302': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '310': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '311': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '312': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '313': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '314': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '321': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '500': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Rain-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '501': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Rain-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '502': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '503': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '504': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '511': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '520': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '521': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '522': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '531': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '600': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '601': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '602': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '611': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '612': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '613': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '615': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '616': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '620': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '621': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '622': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '701': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '711': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '721': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Foggy-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '731': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '741': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Foggy-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '751': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '761': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '762': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '771': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '781': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '800': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_MostlyClear-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '801': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Clear-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '802': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_PartlyCloudy-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '803': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Cloudy-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '804': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_MostlyCloudy-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
    },
};
