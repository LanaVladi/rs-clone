import { apiKeyOpenWeather, baseLinkOpenWeatherDirectGeocoding } from '../constants';

export class GeolocationModel {
    public async getGeolocation(IsHighAccuracy?: boolean): Promise<[number, number]> {
        try {
            const options = {
                enableHighAccuracy: IsHighAccuracy,
                timeout: Infinity,
                maximumAge: 1,
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

    public async getCoordinates(city: string): Promise<[number, number]> {
        try {
            const response = await fetch(
                `${baseLinkOpenWeatherDirectGeocoding}?q=${city}&limit=${5}&appid=${apiKeyOpenWeather}`
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
}
