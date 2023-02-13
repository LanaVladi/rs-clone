export const lang: string = 'ru';

export const textValuesToAltitude = {
    'surface': 'поверхность',
    '100m': '100м',
    '300m': '300м',
    '600m': '600м',
    '750m': '750м',
    '1km': '1км',
    '1.5km': '1,5км',
    '2km': '2км',
    '3km': '3км',
    '4.2km': '4,2км',
    '5.5km': '5,5км',
    '7km': '7км',
    '9km': '9км',
    '10km': '10км',
    '11.7km': '11,7км',
    '13.5km': '13,5км',
};

export const ZOOM_TO_SELF_POSITION = 10;

export const enum enTextToLayersButtons {
    wind = 'Wind',
    temp = 'Temperature',
    press = 'Pressure'
}

export const enum ruTextToLayersButtons {
    wind = 'Ветер',
    temp = 'Температура',
    press = 'Давление'
}

export const dayName = new Map([
    ['MON', 'ПН'],
    ['TUE', 'ВТ'],
    ['WED', 'СР'],
    ['THU', 'ЧТ'],
    ['FRI', 'ПТ'],
    ['SUN', 'СБ'],
    ['SAT', 'ВС'],
]);

export const textToSearchInputPlaceholder = lang === 'en' ? 'e.g. Bangkok...' : 'например, Бангкок...';

export const textToSearchButton = lang === 'en' ? 'Search' : 'Поиск';

export const textToScreenSizeButton = lang === 'en' ? 'Full screen' : 'Во весь экран';

export const textToWindAnimToggler = lang === 'en' ? 'Wind animation' : 'Анимация ветра';
