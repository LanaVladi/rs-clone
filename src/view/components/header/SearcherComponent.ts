import { SearcherController } from '../../../controller/SearchController';
import { ObserverToModel } from '../../../model/ObserverToModel';
import { ObserverToView } from '../../../model/ObserverToView';
import { ModelEvent, NotifyParameters, pagesLang, ViewEvent } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import './searcher.css';
interface SearcherComponentProps {
    controller: SearcherController;
    observerToModel: ObserverToModel;
    observerToView: ObserverToView;
}
export class SearcherComponent extends BaseComponent<SearcherComponentProps> {
    public searchInput!: HTMLInputElement;
    public searchIcon!: HTMLDivElement;
    public cityName!: string;

    private observerToModel: ObserverToModel;
    private observerToView: ObserverToView;

    private readonly storageKeyCity = 'city';

    constructor(controller: SearcherController, observerToModel: ObserverToModel, observerToView: ObserverToView) {
        super('searcher-container', { controller, observerToModel, observerToView }, 'div');
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.observerToView.subscribe(ModelEvent.today_weather_indicators, this);
        this.observerToView.subscribe(ModelEvent.language, this);
        this.observerToView.subscribe(ModelEvent.temp_unit, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.language: {
                const langObject = <pagesLang>params.message;
                this.searchInput.placeholder = langObject.searchByCity;
                break;
            }
        }
    }

    protected render(): void {
        this.searchInput = document.createElement('input');
        this.searchInput.classList.add('searcher-input');
        this.searchInput.setAttribute('autofocus', 'autofocus');
        this.searchInput.setAttribute('autocomplete', 'true');
        this.searchInput.placeholder = this.props.controller.language.getTranslateRu().searchByCity;

        this.searchIcon = document.createElement('div');
        this.searchIcon.className = 'searcher-icon';

        this.element.append(this.searchInput, this.searchIcon);
    }

    protected addListeners(): void {
        this.searchInput.addEventListener('change', () => {
            this.cityName = (this.searchInput as HTMLInputElement).value.toLocaleLowerCase();
            this.observerToModel.notify(ViewEvent.input, { message: this.cityName, typeEvents: ModelEvent.input });
            (this.searchInput as HTMLInputElement).value = '';
        });
    }
}
