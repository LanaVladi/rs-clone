import { apiKeyOpenWeather,  baseLinkOpenWeather } from '../utils';

export const getWeatherData = async (city: string) => {
    try {
        const response = await fetch(`${baseLinkOpenWeather}?q=${city}&appid=${apiKeyOpenWeather}&lang=en`
            // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=en`
        );

        return await response.json();
    } catch (error) {
        console.error('error');
    }
}
