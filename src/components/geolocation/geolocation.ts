async function getGeolocation(): Promise<[number, number]> {
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

export default getGeolocation;
