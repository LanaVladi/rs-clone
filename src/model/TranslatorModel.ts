import INotify, { ModelEvent, NotifyParameters, pagesLang, ViewEvent } from '../types';
import { ObserverToModel } from './ObserverToModel';
import { ObserverToView } from './ObserverToView';

export class TranslatorModel implements INotify {
    private observerToModel: ObserverToModel;
    private observerToView: ObserverToView;

    constructor(observerToModel: ObserverToModel, observerToView: ObserverToView, lang: 'ru') {
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;

        this.notify({ message: lang, typeEvents: ModelEvent.language });
        this.observerToModel.subscribe(ViewEvent.language, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        if (typeof params.message === 'string') {
            const lang = params.message;
            if (lang === 'ru') {
                const langObject: pagesLang = this.getTranslateEn();
                this.observerToView.notify(ModelEvent.language, {
                    message: langObject,
                    typeEvents: ModelEvent.language,
                });
            } else {
                const langObject: pagesLang = this.getTranslateRu();
                this.observerToView.notify(ModelEvent.language, {
                    message: langObject,
                    typeEvents: ModelEvent.language,
                });
            }
        }
    }

    getTranslateRu() {
        const langObjRu = {
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
            allPollutants: 'Все загрязняющие вещества',
            primaryPollutant: 'Первичный загрязнитель:',
            pollutantUnits: 'мкг/м3',
            moreDetailsText: 'ИНДЕКС КАЧЕСТВА ВОЗДУХА',
            airQualityLevelsCaption: 'Уровни',
            AirQualityPopOverTitle: 'Источник',
            AirQualityPopOverBody: 'Содержит данные службы мониторинга атмосферы Copernicus Atmosphere Monitoring Service за 2023 г. и/или измененные данные службы Copernicus Atmosphere Monitoring Service за 2023 г. Европейская комиссия и ЕЦСПП не несут ответственность за любое использование данной информации.',
        };

        return langObjRu;
    }

    getTranslateEn() {
        const langObjEn = {
            night: 'Night',
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
            airQuality: 'Air quality forecast',
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
            allPollutants: 'All pollutants',
            primaryPollutant: 'Primary pollutant:',
            pollutantUnits: 'µg/m3',
            moreDetailsText: 'Air Quality Index',
            airQualityLevelsCaption: 'Levels',
            AirQualityPopOverTitle: 'Sourse',
            AirQualityPopOverBody: 'Contains Copernicus Atmosphere Monitoring Service information 2023 and/or modified Copernicus Atmosphere Monitoring Service information 2023. Neither the European Commission nor ECMWF is responsible for any use of this information.',
        };

        return langObjEn;
    }

    // const textValuesToAltitude = {
    //     surface: 'поверхность',
    //     '100m': '100м',
    //     '300m': '300м',
    //     '600m': '600м',
    //     '750m': '750м',
    //     '1km': '1км',
    //     '1.5km': '1,5км',
    //     '2km': '2км',
    //     '3km': '3км',
    //     '4.2km': '4,2км',
    //     '5.5km': '5,5км',
    //     '7km': '7км',
    //     '9km': '9км',
    //     '10km': '10км',
    //     '11.7km': '11,7км',
    //     '13.5km': '13,5км',
    // };
}
