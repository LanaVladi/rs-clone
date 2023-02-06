export const apiKeyMapForecast = 'xXzWFyvlQ5v6hx3VoAyja2ss9hpFgVRi'; // windy.com Map Forecast API
export const baseLinkMapForecast = `https://api.windy.com/assets/map-forecast/`;

export const apiKeyOpenWeather = ''; // openweathermap.org
export const baseLinkOpenWeather = 'https://api.openweathermap.org/data/2.5/weather'; //openweathermap.org

export const apiKeyPointForecast = ''; // windy.com Point Forecast API
export const baseLinkPointForecast = 'https://api.windy.com/api/point-forecast/v2';

export async function getGeolocation(): Promise<[number, number]> {
    try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        return [latitude, longitude];
    } catch (error) {
        console.error(error);
        return [53, 27];
    }
}
