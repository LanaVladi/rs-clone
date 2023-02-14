import { langObj, lang } from '../../../constants';
import { SearcherController } from '../../../controller/SearchController';
import { ObserverToModel } from '../../../model/ObserverToModel';
import { APIEvent } from '../../../types';
import { BaseComponent } from '../../BaseComponent';

interface SearcherComponentProps {
    controller: SearcherController;
    observerToModel: ObserverToModel;
}
export class SearcherComponent extends BaseComponent<SearcherComponentProps> {
    public searchInput!: HTMLInputElement;
    public searchIcon!: HTMLDivElement;
    private observerToModel: ObserverToModel;

    constructor(controller: SearcherController, observerToModel: ObserverToModel) {
        super('searcher-container', { controller, observerToModel }, 'div');
        this.observerToModel = observerToModel;
    }

    protected render(): void {
        this.searchInput = document.createElement('input');
        this.searchInput.classList.add('searcher-input');
        this.searchInput.setAttribute('autofocus', 'autofocus');
        this.searchInput.placeholder = langObj[lang].searchByCity;

        this.searchIcon = document.createElement('div');
        this.searchIcon.className = 'searcher-icon';

        this.element.append(this.searchInput, this.searchIcon);
    }

    protected addListeners(): void {
        this.searchInput.addEventListener('change', () => {
            const cityName = (this.searchInput as HTMLInputElement).value;
            this.observerToModel.notify({
                message: cityName,
                typeEvents: APIEvent.todayWeather || APIEvent.fiveDaysWeather,
            });
        });
    }
}
