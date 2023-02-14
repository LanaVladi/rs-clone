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

    constructor(controller: SearcherController, observerToModel: ObserverToModel) {
        super('searcher-container', { controller, observerToModel }, 'div');
    }

    protected render(): void {
        this.searchInput = document.createElement('input');
        this.searchInput.classList.add('searcher-input');
        this.searchInput.setAttribute('autofocus', 'autofocus');
        this.searchInput.placeholder = 'Поиск по городу';

        this.searchIcon = document.createElement('div');
        this.searchIcon.className = 'searcher-icon';

        this.element.append(this.searchInput, this.searchIcon);
    }

    protected addListeners(): void {
        this.searchInput.addEventListener('change', () => {
            const cityName = (this.searchInput as HTMLInputElement).value;
            this.props.observerToModel.notify({
                message: cityName,
                typeEvents: APIEvent.todayWeather || APIEvent.fiveDaysWeather,
            });
        });
    }
}
