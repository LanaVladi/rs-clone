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

export function convertToDMS(degrees: number) {
    let d = Math.floor(degrees);
    let minfloat = (degrees - d) * 60;
    let m = Math.floor(minfloat);
    let s = Math.round((minfloat - m) * 60);

    if (s === 60) {
        m++;
        s = 0;
    }
    if (m === 60) {
        d++;
        m = 0;
    }

    return {
        degrees: d,
        minutes: m,
        seconds: s,
    };
}

export function latLonToDMS(lat: number, lon: number) {
    return {
        lat: convertToDMS(lat),
        lon: convertToDMS(lon),
    };
}
