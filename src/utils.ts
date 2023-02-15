import { ICoordinates } from './types';

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
