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
            forecastFiveDay: 'Прогноз на 5 дней: ',
            weatherToday: 'Погода на сегодня: ',
            forecastToday: 'Прогноз на сегодня: ',
            map: 'Карта',
            otherForecasts: 'Другие прогнозы ',
            searchByCity: 'Поиск по городу',
            airQuality: 'Качество воздуха',
            airQualityToday: 'Качество воздуха сегодня',
            asOf: 'По состоянию на ',
            nextHours: 'На ближайшие часы',
            feelsLike: 'Ощущается как ',
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
            moreDetailsText: 'Индекс качества воздуха',
            airQualityLevelsCaption: 'Уровни',
            AirQualityPopOverTitle: 'Источник',
            AirQualityPopOverBody:
                'Содержит данные службы мониторинга атмосферы Copernicus Atmosphere Monitoring Service за 2023 г. и/или измененные данные службы Copernicus Atmosphere Monitoring Service за 2023 г. Европейская комиссия и ЕЦСПП не несут ответственность за любое использование данной информации.',
            good: 'Хорошее',
            moderate: 'Среднее',
            unhealthyForGroups: 'Вредное для чувствительных людей',
            unhealthy: 'Вредные условия',
            veryUnhealthy: 'Очень вредные условия',
            hazardous: 'Опасно',
            goodInfo: 'Качество воздуха удовлетворительное, уровень загрязнений почти не вызывает опасений.',
            moderateInfo:
                'Качество воздуха приемлемое, однако для некоторых типов загрязнений есть средний риск воздействия на самочувствие малой части людей, чувствительных к загрязнению воздуха.',
            unhealthyForGroupsInfo:
                'Чувствительные люди могут испытывать проблемы со здоровьем. Вероятно, это не повлияет на остальные слои населения.',
            unhealthyInfo:
                'У любого человека могут начаться проблемы со здоровьем, воздействие на чувствительных людей может быть более серьезным.',
            veryUnhealthyInfo:
                'Предупреждения касательно здоровья, означающие экстренную ситуацию. Вполне возможно, что это повлияет на все население.',
            hazardousInfo:
                'Оповещение в отношении здоровья: все люди могут испытывать более серьезные проблемы со здоровьем.',
            co: 'CO (Монооксид углерода)',
            no2: 'NO2 (Оксид азота)',
            o3: 'O3 (Озон)',
            so2: 'SO2 (Диоксид серы)',
            pm2_5: 'PM2.5 (Взвешенных частиц меньше 2,5 микрона)',
            pm10: 'PM10 (Взвешенных частиц меньше 10 микрон)',
            kmH: 'км/ч',
            mb: 'мбар',
            km: 'км',
            recentLocationTitle: 'Недавние',
            clearAll: 'Очистить все',
            recents: 'Нет последних местоположений',
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
            forecastFiveDay: 'Forecast for 5 days ',
            weatherToday: 'Weather for today ',
            forecastToday: 'Forecast for today ',
            map: 'Map',
            otherForecasts: 'Other forecasts',
            searchByCity: 'Search by city',
            airQuality: 'Air quality forecast',
            airQualityToday: 'Air quality today',
            asOf: 'As of ',
            nextHours: 'Next hours ',
            feelsLike: 'Feels like ',
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
            AirQualityPopOverBody:
                'Contains Copernicus Atmosphere Monitoring Service information 2023 and/or modified Copernicus Atmosphere Monitoring Service information 2023. Neither the European Commission nor ECMWF is responsible for any use of this information.',
            good: 'Good',
            moderate: 'Moderate',
            unhealthyForGroups: 'Unhealthy for groups',
            unhealthy: 'Unhealthy',
            veryUnhealthy: 'Very unhealthy',
            hazardous: 'Hazardous',
            goodInfo: 'Air quality is considered satisfactory, and air pollution poses little or no risk.',
            moderateInfo:
                'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
            unhealthyForGroupsInfo:
                'Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
            unhealthyInfo:
                'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.',
            veryUnhealthyInfo:
                'Health warnings of emergency conditions. The entire population is more likely to be affected.',
            hazardousInfo: 'Health alert: everyone may experience more serious health effects.',
            co: 'CO (Carbon Monoxide)',
            no2: 'NO2 (Nitrogen Dioxide)',
            o3: 'O3 (Ozone)',
            so2: 'SO2 (Sulfur Dioxide)',
            pm2_5: 'PM2.5 (Particulate matter less than 2.5 microns)',
            pm10: 'PM10 (Particulate matter less than 10 microns)',
            kmH: 'km/h',
            mb: 'mb',
            km: 'km',
            recentLocationTitle: 'Recents',
            clearAll: 'Clear all',
            recents: 'You have no recent locations',
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
