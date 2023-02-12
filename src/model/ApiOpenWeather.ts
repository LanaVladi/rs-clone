import { APIEvent, NotifyParameters, WeatherTodayData } from '../types';
import { apiKeyOpenWeather, baseLinkOpenWeather, celsius, lang } from '../constants';
import { ObserverToModel } from './ObserverToModel';
import { ObserverToView } from './ObserverToView';

export class ApiOpenWeather {
    #weatherUrl!: string;
    private observerGetData: ObserverToModel;
    private observerGiveData: ObserverToView;

    constructor(observerGetData: ObserverToModel, observerGiveData: ObserverToView) {
        this.observerGetData = observerGetData;
        this.observerGiveData = observerGiveData;
        this.observerGetData.subscribe(<T>(params: NotifyParameters<T>) => this.getParamsFromView(params));
    }

    async getParamsFromView<T>(params: NotifyParameters<T>) {
        switch (params.typeEvents) {
            case APIEvent.todayWeather: {
                if (typeof params.message === 'string') {
                    const city = params.message;
                    const weatherTodayData: WeatherTodayData = await this.getWeatherTodayData(city);
                    console.log('weatherTodayData :', weatherTodayData);

                    this.observerGiveData.notify({ message: weatherTodayData, typeEvents: APIEvent.todayWeather });
                }
                break;
            }
            case APIEvent.fiveDaysWeather: {
                console.log('five'); // methods of different API
                break;
            }
        }
    }

    async getWeatherTodayData<T>(city: string): Promise<T> {
        this.#weatherUrl = `${baseLinkOpenWeather}?q=${city}&appid=${apiKeyOpenWeather}&lang=${lang}&units=${celsius}`;
        const response = await fetch(this.#weatherUrl);
        return await response.json();
    }
}
