import './WeatherDayComponent.css';

export class WeatherDayComponent {
    private element: HTMLDivElement = document.createElement('div');
    private humidity!: string;
    private dayWrapper!: HTMLDivElement;
    private daypartDetails!: HTMLDivElement;
    private daysContainer!: HTMLDivElement;
    private summaryIcon!: HTMLDivElement;
    constructor() {
        this.render();
    }
    private render(): void {
        this.element.className = 'day';

        this.dayWrapper = document.createElement('div');
        this.dayWrapper.className = 'day-wrapper';

        const detailsSummary = document.createElement('div');
        detailsSummary.className = 'details-summary';

        const dayName = document.createElement('h3');
        dayName.className = 'day-name';
        dayName.textContent = ``;

        const detailsTemperature = document.createElement('div');
        detailsTemperature.className = 'details-temperature';

        const detailsSummaryHighTempValue = document.createElement('span');
        detailsSummaryHighTempValue.className = 'details-summary--highTempValue';
        detailsSummaryHighTempValue.textContent = ``;

        const lowTempValue = document.createElement('span');
        lowTempValue.className = 'low-temp-value';
        lowTempValue.textContent = '/';

        const detailsSummaryLowTempValue = document.createElement('span');
        detailsSummaryLowTempValue.className = 'details-summary--lowTempValue';
        detailsSummaryLowTempValue.textContent = `°`;

        const detailsSummaryCondition = document.createElement('div');
        detailsSummaryCondition.className = 'details-summary--condition';

        const detailsSummaryExtended = document.createElement('div');
        detailsSummaryExtended.textContent = ``;

        const detailsSummaryPrecip = document.createElement('div');
        detailsSummaryPrecip.className = 'details-summary--precip';

        const detailsSummaryPrecipText = document.createElement('span');
        detailsSummaryPrecipText.textContent = ` %`;

        const detailsSummaryPrecipIcon = document.createElement('div');
        detailsSummaryPrecipIcon.className = 'icon-container details-summary-precip-icon';

        const detailsSummaryWind = document.createElement('div');
        detailsSummaryWind.className = 'details-summary--wind';

        const detailsSummaryWindText = document.createElement('span');
        detailsSummaryWindText.textContent = ``;

        const detailsSummaryWindIcon = document.createElement('div');
        detailsSummaryWindIcon.className = 'icon-container details-summary-wind-icon';

        lowTempValue.append(detailsSummaryLowTempValue);
        detailsTemperature.append(detailsSummaryHighTempValue, lowTempValue);

        detailsSummaryCondition.append(detailsSummaryExtended);

        detailsSummaryWind.append(detailsSummaryWindIcon, detailsSummaryWindText);

        detailsSummaryPrecip.append(detailsSummaryPrecipIcon, detailsSummaryPrecipText);
        detailsSummary.append(
            dayName,
            detailsTemperature,
            detailsSummaryCondition,
            detailsSummaryPrecip,
            detailsSummaryWind
        );
        this.dayWrapper.append(detailsSummary);

        this.daysContainer = document.createElement('div');
        this.daysContainer.className = 'day-container';

        this.summaryIcon = document.createElement('div');
        this.summaryIcon.className = 'button';
        this.summaryIcon.addEventListener('click', this.extendedWindow.bind(this));

        this.element.append(this.daysContainer);

        this.daypartDetails = document.createElement('div');
        this.daypartDetails.className = 'daypart-details';

        const dailyContent = document.createElement('div');
        dailyContent.className = 'daily-content';

        const dayOfTheWeek = document.createElement('h3');
        dayOfTheWeek.textContent = 'чт 09 Ночь';

        const conditionsSummary = document.createElement('div');
        conditionsSummary.className = 'conditions-summary';

        const temperatureValue = document.createElement('span');
        temperatureValue.className = 'temperature-value';
        temperatureValue.textContent = ``;

        const weatherIcon = document.createElement('div');
        weatherIcon.className = 'weather-icon';

        const dataPoints = document.createElement('div');
        dataPoints.className = 'data-points';

        const dailyContentLabelDraft = document.createElement('div');
        dailyContentLabelDraft.className = 'daily-content--label';

        const precipIconBlockDraft = document.createElement('div');
        precipIconBlockDraft.className = 'precip-icon-block';

        const percentageValueDraft = document.createElement('span');
        percentageValueDraft.textContent = ``;

        dailyContentLabelDraft.append(precipIconBlockDraft, percentageValueDraft);

        const dailyContentLabelSpeed = document.createElement('div');
        dailyContentLabelSpeed.className = 'daily-content--label';

        const precipIconBlockSpeed = document.createElement('div');
        precipIconBlockSpeed.className = 'precip-icon-block';

        const percentageValueSpeed = document.createElement('span');
        percentageValueSpeed.textContent = ``;
        dailyContentLabelSpeed.append(precipIconBlockSpeed, percentageValueSpeed);

        dataPoints.append(dailyContentLabelDraft, dailyContentLabelSpeed);

        const detailsTableContainer = document.createElement('div');
        detailsTableContainer.className = 'details-table-container';

        const detailsTable = document.createElement('ul');
        detailsTable.className = 'details-table';

        const listItemHumidity = document.createElement('li');
        listItemHumidity.className = 'list-item';

        const humidityIcon = document.createElement('div');
        humidityIcon.className = 'icon-container humidity-item';

        const detailsTabeleFieldHumidity = document.createElement('div');
        detailsTabeleFieldHumidity.className = 'details-table--field';

        const detailsTableLabelHumidity = document.createElement('span');
        detailsTableLabelHumidity.className = 'details-table--label';
        detailsTableLabelHumidity.textContent = 'Влажность';

        const detailsTableValueHumidity = document.createElement('span');
        detailsTableValueHumidity.className = 'details-table--value';
        detailsTableValueHumidity.textContent = ``;

        detailsTabeleFieldHumidity.append(detailsTableLabelHumidity, detailsTableValueHumidity);

        listItemHumidity.append(humidityIcon, detailsTabeleFieldHumidity);

        const listItemPressure = document.createElement('li');
        listItemPressure.className = 'list-item';

        const pressureIcon = document.createElement('div');
        pressureIcon.className = 'icon-container  pressure-item';

        const detailsTabeleFieldPressure = document.createElement('div');
        detailsTabeleFieldPressure.className = 'details-table--field';

        const detailsTableLabelPressure = document.createElement('span');
        detailsTableLabelPressure.className = 'details-table--label';
        detailsTableLabelPressure.textContent = 'Давление';

        const detailsTableValuePressure = document.createElement('span');
        detailsTableValuePressure.className = 'details-table--value';
        detailsTableValuePressure.textContent = `${this.humidity}`;

        detailsTabeleFieldPressure.append(detailsTableLabelPressure, detailsTableValuePressure);

        listItemPressure.append(pressureIcon, detailsTabeleFieldPressure);

        const listItemFeelLike = document.createElement('li');
        listItemFeelLike.className = 'list-item';

        const feelLikeIcon = document.createElement('div');
        feelLikeIcon.className = 'icon-container  feel-like-item';

        const detailsTabeleFieldFeelLike = document.createElement('div');
        detailsTabeleFieldFeelLike.className = 'details-table--field';

        const detailsTableLabelFeelLike = document.createElement('span');
        detailsTableLabelFeelLike.className = 'details-table--label';
        detailsTableLabelFeelLike.textContent = 'Ощущается как';

        const detailsTableValueFeelLike = document.createElement('span');
        detailsTableValueFeelLike.className = 'details-table--value';
        detailsTableValueFeelLike.textContent = ``;

        detailsTabeleFieldFeelLike.append(detailsTableLabelFeelLike, detailsTableValueFeelLike);

        listItemFeelLike.append(feelLikeIcon, detailsTabeleFieldFeelLike);

        const listItemVisibility = document.createElement('li');
        listItemVisibility.className = 'list-item';

        const visibilityIcon = document.createElement('div');
        visibilityIcon.className = 'icon-container  feel-like-item';

        const detailsTabeleFieldVisibility = document.createElement('div');
        detailsTabeleFieldVisibility.className = 'details-table--field';

        const detailsTableLabelVisibility = document.createElement('span');
        detailsTableLabelVisibility.className = 'details-table--label';
        detailsTableLabelVisibility.textContent = 'Видимость';

        const detailsTableValueVisibility = document.createElement('span');
        detailsTableValueVisibility.className = 'details-table--value';
        detailsTableValueVisibility.textContent = ``;

        detailsTabeleFieldVisibility.append(detailsTableLabelVisibility, detailsTableValueVisibility);

        listItemVisibility.append(visibilityIcon, detailsTabeleFieldVisibility);

        conditionsSummary.append(temperatureValue, weatherIcon, dataPoints);
        dailyContent.append(dayOfTheWeek, conditionsSummary);
        detailsTable.append(listItemHumidity, listItemPressure, listItemFeelLike, listItemVisibility);
        detailsTableContainer.append(detailsTable);
        this.daypartDetails.append(dailyContent, detailsTableContainer);
        this.daysContainer.append(this.dayWrapper, this.daypartDetails, this.summaryIcon);
    }
    getElement() {
        return this.element;
    }
    extendedWindow() {
        this.dayWrapper.classList.toggle('day-wrapper-none');
        this.daypartDetails.classList.toggle('daypart-details-active');
        this.summaryIcon.classList.toggle('button-up');
        this.summaryIcon.classList.toggle('button');
    }
}
