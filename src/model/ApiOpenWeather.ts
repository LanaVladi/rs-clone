import { APIEvent, NotifyParameters, weatherFiveDaysData, WeatherTodayData } from '../types';
import { apiKeyOpenWeather, baseLinkOpenWeatherFiveDays, baseLinkOpenWeatherToday, celsius, lang } from '../constants';
import { ObserverToModel } from './ObserverToModel';
import { ObserverToView } from './ObserverToView';

export class ApiOpenWeather {
    #weatherUrlToday!: string;
    #weatherUrlFiveDays!: string;

    private observerToModel: ObserverToModel;
    private observerToView: ObserverToView;

    constructor(observerToModel: ObserverToModel, observerToView: ObserverToView, city: 'Ташкент') {
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.getParamsFromView({ message: city, typeEvents: APIEvent.todayWeather });
        this.observerToModel.subscribe(<T>(params: NotifyParameters<T>) => this.getParamsFromView(params));
    }

    private async getParamsFromView<T>(params: NotifyParameters<T>) {
        switch (params.typeEvents) {
            case APIEvent.todayWeather: {
                if (typeof params.message === 'string') {
                    const city = params.message;
                    const weatherTodayData: WeatherTodayData = await this.getWeatherTodayData(city);
                    console.log('weatherTodayData :', weatherTodayData);

                    this.observerToView.notify({ message: weatherTodayData, typeEvents: APIEvent.todayWeather });
                }
                break;
            }
            case APIEvent.fiveDaysWeather:
                {
                    if (typeof params.message === 'string') {
                        const city = params.message;
                        const weatherFiveDaysData: weatherFiveDaysData = await this.getWeatherFiveDaysData(city);
                        console.log('weatherFiveDaysData :', weatherFiveDaysData);

                        this.observerToView.notify({
                            message: weatherFiveDaysData,
                            typeEvents: APIEvent.fiveDaysWeather,
                        });
                        console.log('five');
                        break;
                    }
                }
                break;
            default:
                APIEvent.todayWeather;
        }
    }

    private async getWeatherTodayData<T>(city: string): Promise<T> {
        this.#weatherUrlToday = `${baseLinkOpenWeatherToday}?q=${city}&appid=${apiKeyOpenWeather}&lang=${lang}&units=${celsius}`;

        const response = await fetch(this.#weatherUrlToday);
        return await response.json();
    }

    private async getWeatherFiveDaysData<T>(city: T): Promise<weatherFiveDaysData> {
        this.#weatherUrlFiveDays = `${baseLinkOpenWeatherFiveDays}?q=${city}&appid=${apiKeyOpenWeather}&lang=${lang}&units=${celsius}`;

        const response = await fetch(this.#weatherUrlFiveDays);
        return await response.json();
    }
}

// function getWeatherFiveDaysData<T>(city: T): weatherFiveDaysData | PromiseLike<weatherFiveDaysData> {
//     throw new Error('Function not implemented.');
// }
