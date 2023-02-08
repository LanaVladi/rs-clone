type Day = {
    display: string;
    displayLong: DisplayLongDay;
    day: number;
    middayTs: number;
    start: number;
    year: number;
};

type DisplayLongDay = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SUN' | 'SAT';

const dayName = new Map([
    ['MON', 'ПН'],
    ['TUE', 'ВТ'],
    ['WED', 'СР'],
    ['THU', 'ЧТ'],
    ['FRI', 'ПТ'],
    ['SUN', 'СБ'],
    ['SAT', 'ВС'],
]);

let lang = 'en';


class MapColorLegend {
    private element: HTMLDivElement = document.createElement('div');

    constructor() {
        this.element.id = 'accTime-legend';
    }
    //@ts-ignore
    createCalendar(store) {
        const calendar = store.get('calendar');
        calendar.days.forEach((day: Day) => {
            const dayDiv = document.createElement('div');
            dayDiv.style.width = `${100 / calendar.days.length}%`
            dayDiv.innerText = lang === 'en' ? day.displayLong : dayName.get(day.displayLong) || '';
            this.element.append(dayDiv);
        });
        
        const progressBar = document.getElementById('progress-bar');
        progressBar?.append(this.element);
    }
}

export default MapColorLegend;
