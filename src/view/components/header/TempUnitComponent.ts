import { TempUnitController } from '../../../controller/TempUnitController';
import { ObserverToModel } from '../../../model/ObserverToModel';
import { ViewEvent } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { celsius, fahrenheit } from './../../../constants';

interface TempUnitComponentProps {
    controller: TempUnitController;
    observerToModel: ObserverToModel;
}
export class TempUnitComponent extends BaseComponent<TempUnitComponentProps> {
    private celsius!: HTMLOptionElement;
    private fahrenheit!: HTMLOptionElement;
    private observerToModel: ObserverToModel;
    public temperatureUnit!: string;

    constructor(controller: TempUnitController, observerToModel: ObserverToModel) {
        super('temperature-unit-container', { controller, observerToModel }, 'select');
        this.observerToModel = observerToModel;
    }

    protected render(): void {
        this.celsius = document.createElement('option');
        this.celsius.className = 'option';
        this.celsius.text = '°C';
        this.celsius.value = '°C';

        this.fahrenheit = document.createElement('option');
        this.fahrenheit.text = '°F';
        this.fahrenheit.value = '°F';
        this.fahrenheit.className = 'option';

        this.element.append(this.celsius, this.fahrenheit);
    }

    protected addListeners() {
        this.element.addEventListener('change', (event) => {
            let tempUnit = (event.target as HTMLOptionElement).value;
            if (tempUnit === '°C') {
                tempUnit = '°F';
                this.temperatureUnit = celsius;
            } else {
                tempUnit = '°C';
                this.temperatureUnit = fahrenheit;
            }

            this.observerToModel.notify(ViewEvent.temp_unit, { message: this.temperatureUnit });
        });
    }
}
