import { ICoordinates } from './types';

export const apiKeyMapForecast = 'xXzWFyvlQ5v6hx3VoAyja2ss9hpFgVRi'; // windy.com Map Forecast API
export const baseLinkMapForecast = `https://api.windy.com/assets/map-forecast/`;

export const apiKeyOpenWeather = ''; // openweathermap.org
export const baseLinkOpenWeather = 'https://api.openweathermap.org/data/2.5/weather'; //openweathermap.org

export const apiKeyPointForecast = ''; // windy.com Point Forecast API
export const baseLinkPointForecast = 'https://api.windy.com/api/point-forecast/v2';

export async function getGeolocation(IsHighAccuracy?: boolean): Promise<[number, number]> {
    try {
        const options = {
            enableHighAccuracy: IsHighAccuracy,
            timeout: Infinity,
            maximumAge: 0,
        };

        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
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
    const minfloat = (degrees - d) * 60;
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

export function latLonToDMS(lat: number, lon: number): ICoordinates {
    return {
        lat: convertToDMS(lat),
        lon: convertToDMS(lon),
    };
}

export function displayPosition(coord: ICoordinates, event: MouseEvent): void {
    const valueDisplay = document.createElement('div');
    valueDisplay.id = 'weather-data-value-display';
    valueDisplay.innerHTML = `${coord.lat.degrees}°${coord.lat.minutes}'${coord.lat.seconds}", ${coord.lon.degrees}°${coord.lon.minutes}'${coord.lon.seconds}"`;
    document.body.appendChild(valueDisplay);
    valueDisplay.style.left = `${event.clientX + 10}px`;
    valueDisplay.style.top = `${event.clientY + 10}px`;
}

export async function getCoordinates(location: string): Promise<[number, number]> {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search/${encodeURIComponent(location)}?format=json`
        );
        const data = await response.json();
        const [firstResult] = data;
        if (!firstResult) {
            throw new Error('No results found for that location');
        }
        const { lat, lon } = firstResult;
        return [parseFloat(lat), parseFloat(lon)];
    } catch (error) {
        console.error(error);
        return [0, 0];
    }
}
