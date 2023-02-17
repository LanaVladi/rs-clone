import './WeatherDayComponent.css';

export class WeatherDayComponent {
    private element: HTMLDivElement = document.createElement('div');
    private dayOfWeek: string;
    private temp: string;
    private tempMax: string;
    private description: string;
    private pop: string;
    private speed: string;
    private humidity!: string;
    private dayWrapper!: HTMLDivElement;
    private daypartDetails!: HTMLDivElement;
    private daysContainer!: HTMLDivElement;
    private summaryIcon!: HTMLDivElement;
    constructor(dayOfWeek: string, temp: string, tempMax: string, description: string, pop: string, speed: string) {
        this.dayOfWeek = dayOfWeek;
        this.temp = temp;
        this.tempMax = tempMax;
        this.description = description;
        this.pop = pop;
        this.speed = speed;
        this.render();
    }
    private render(): void {
        this.element.className = 'day';

        this.dayWrapper = document.createElement('div');
        this.dayWrapper.className = 'day-wrapper';

        this.dayWrapper.insertAdjacentHTML(
            'beforeend',
            `
    <div class='details-summary'>
    <h3>${this.dayOfWeek}</h3>
    <div class='details-temperature'>
        <span class='details-summary--highTempValue'>${this.temp} °</span>
        <span class='low-temp-value'>/
            <span class='details-summary--lowTempValue'>${this.tempMax} °</span>
        </span>
    </div>
    <div class='details-summary--condition'>
        <svg></svg>
        <div class='details-summary--extended'>${this.description}</div>
    </div>
    <div class='details-summary--precip'>
        <svg class='precip-svg' viewBox="0 -2 5 10">
        <path d="M4.7329.0217c-.1848-.059-.3855.0064-.4803.148L.2731 5.1191c-.0814.0922-.1501.1961-.196.3108-.2469.6009.1185 1.2697.8156 1.4943.6914.226 1.447-.0712 1.7-.6585L4.9662.4987l.0111-.0282c.073-.1807-.036-.379-.2444-.4488z"></path>
        </svg>
        <span>${this.pop} %</span>
    </div>
    <div class='details-summary--wind'>
        <svg class='wind-svg' viewBox="0 0 24 24">
        <path d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742" stroke-width="2" stroke="currentColor" stroke-linecap="round" fill="none"></path>
        </svg>
        <span class='wind'>${this.speed}</span>
    </div>
    </div>
  `
        );
        this.daysContainer = document.createElement('div');
        this.daysContainer.className = 'day-container';

        this.summaryIcon = document.createElement('div');
        this.summaryIcon.className = 'button';
        this.summaryIcon.addEventListener('click', this.extendedWindow.bind(this));

        this.element.append(this.daysContainer);

        this.daypartDetails = document.createElement('div');
        this.daypartDetails.className = 'daypart-details';
        this.daypartDetails.insertAdjacentHTML(
            'beforeend',
            `
        
        <div class='daily-content'>
            <h3>чт 09 Ночь</h3>
            <div class='conditions-summary'>
                <span class='temperature-value'>
                ${this.temp}
                </span>
                <div class='weather-icon'>
                </div>
                <div class='data-points'>
                    <div class='daily-content--label'>
                        <div class='precip-icon-block'>
                            <svg class='precip-svg' viewBox="0 -2 5 10">
                            <path d="M4.7329.0217c-.1848-.059-.3855.0064-.4803.148L.2731 5.1191c-.0814.0922-.1501.1961-.196.3108-.2469.6009.1185 1.2697.8156 1.4943.6914.226 1.447-.0712 1.7-.6585L4.9662.4987l.0111-.0282c.073-.1807-.036-.379-.2444-.4488z"></path>
                            </svg>
                        </div>
                        <span class='percentage-value'>${this.pop}</span>
                    </div>
                    <div class='daily-content--label'>
                        <div class='precip-icon-block'>
                            <svg class='wind-svg' viewBox="0 0 24 24">
                                <path d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742" stroke-width="2" stroke="currentColor" stroke-linecap="round" fill="none"></path>
                            </svg>
                        </div>
                        <span class='percentage-value'>${this.speed}</span>
                    </div>
                
                </div>
               
            </div>
            <p>${this.description}</p>
        </div>
        <div class='details-table-container'>
            <ul class='details-table'>
                <li class='list-item'>
                    <svg viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4"></path>
                    </svg>
                    <div class='details-table--field'>
                        <span class='details-table--label'>
                        Влажность
                        </span>
                        <span class ='details-table--value'>
                            ${this.humidity}
                        </span>
                    </div>
                </li>
                <li class='list-item'>
                    <svg viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4"></path>
                    </svg>
                    <div class='details-table--field'>
                        <span class='details-table--label'>
                        Давление
                        </span>
                        <span class ='details-table--value'>
                        ${this.humidity}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class='daily-content'>
        <h3>чт 09 Ночь</h3>
        <div class='conditions-summary'>
            <span class='temperature-value'>
            ${this.temp}
            </span>
            <div class='weather-icon'>
            </div>
            <div class='data-points'>
                <div class='daily-content--label'>
                    <div class='precip-icon-block'>
                    <svg class='precip-svg' viewBox="0 -2 5 10">
                    <path d="M4.7329.0217c-.1848-.059-.3855.0064-.4803.148L.2731 5.1191c-.0814.0922-.1501.1961-.196.3108-.2469.6009.1185 1.2697.8156 1.4943.6914.226 1.447-.0712 1.7-.6585L4.9662.4987l.0111-.0282c.073-.1807-.036-.379-.2444-.4488z"></path>
                    </svg>
                    </div>
                    <span class='percentage-value'>${this.pop}</span>
                </div>
                <div class='daily-content--label'>
                    <div class='precip-icon-block'>\
                        <svg class='wind-svg' viewBox="0 0 24 24">
                            <path d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742" stroke-width="2" stroke="currentColor" stroke-linecap="round" fill="none"></path>
                        </svg>
                    </div>
                    <span class='percentage-value'>${this.speed}</span>
            </div>
            </div>
        </div>
        <p>${this.description}</p>
    </div>
    <div class='details-table-container-two'>
        <ul class='details-table'>
                <li class='list-item'>
                    <svg viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4"></path>
                    </svg>
                    <div class='details-table--field'>
                        <span class='details-table--label'>
                        Влажность
                        </span>
                        <span class ='details-table--value'>
                            ${this.humidity}
                        </span>
                    </div>
                </li>
                <li class='list-item'>
                    <svg viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4"></path>
                    </svg>
                    <div class='details-table--field'>
                        <span class='details-table--label'>
                        Давление
                        </span>
                        <span class ='details-table--value'>
                        ${this.humidity}
                        </span>
                    </div>
                </li>
            </ul>
    </div>
        `
        );
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
