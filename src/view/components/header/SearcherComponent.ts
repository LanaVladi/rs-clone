// import { langObj, lang } from '../../../constants';
import { SearcherController } from '../../../controller/SearchController';
import { ObserverToModel } from '../../../model/ObserverToModel';
import { ObserverToView } from '../../../model/ObserverToView';
import { TranslatorModel } from '../../../model/TranslatorModel';
import { ModelEvent, NotifyParameters, pagesLang, ViewEvent } from '../../../types';
import { BaseComponent } from '../../BaseComponent';

interface SearcherComponentProps {
    controller: SearcherController;
    observerToModel: ObserverToModel;
    observerToView: ObserverToView;
    language: TranslatorModel;
}
export class SearcherComponent extends BaseComponent<SearcherComponentProps> {
    public searchInput!: HTMLInputElement;
    public searchIcon!: HTMLDivElement;
    private observerToModel: ObserverToModel;
    private observerToView: ObserverToView;
    private language: TranslatorModel;

    constructor(
        controller: SearcherController,
        observerToModel: ObserverToModel,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super('searcher-container', { controller, observerToModel, observerToView, language }, 'div');
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.language = language;
        this.observerToView.subscribe(ModelEvent.language, this);
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
        this.searchInput.placeholder = 'Поиск по городу';

        this.searchIcon = document.createElement('div');
        this.searchIcon.className = 'searcher-icon';

        this.element.append(this.searchInput, this.searchIcon);
    }

    protected addListeners(): void {
        this.searchInput.addEventListener('change', () => {
            const cityName = (this.searchInput as HTMLInputElement).value;
            this.observerToModel.notify(ViewEvent.input, { message: cityName, typeEvents: ModelEvent.input });
        });
    }
}
