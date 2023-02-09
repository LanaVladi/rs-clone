import { ICalendarData, IStore } from '../../types';

const dayName = new Map([
    ['MON', 'ПН'],
    ['TUE', 'ВТ'],
    ['WED', 'СР'],
    ['THU', 'ЧТ'],
    ['FRI', 'ПТ'],
    ['SUN', 'СБ'],
    ['SAT', 'ВС'],
]);

const lang = 'en';

class MapColorLegend {
    private element: HTMLDivElement = document.createElement('div');

    constructor() {
        this.element.id = 'accTime-legend';
    }

    createLegend(store: IStore) {
        const calendar = store.get('calendar') as ICalendarData;
        calendar.days.forEach((day) => {
            const dayDiv = document.createElement('div');
            dayDiv.style.width = `${100 / calendar.days.length}%`;
            dayDiv.innerText = lang === 'en' ? day.displayLong : dayName.get(day.displayLong) || '';
            this.element.append(dayDiv);
        });

        const progressBar = document.getElementById('progress-bar');
        progressBar?.append(this.element);
    }
}

export default MapColorLegend;
