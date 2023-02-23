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
    private dropDownListBox!: HTMLDivElement;
    private inputDropDownList!: HTMLUListElement;
    private recentLocationTitle!: HTMLHeadingElement;
    private recentLocationTitleBtnClearAll!: HTMLButtonElement;
    private alertDropDownList!: HTMLDivElement;
    private dropDownListItem!: HTMLLIElement;
    public searchIcon!: HTMLDivElement;

    private observerToModel: ObserverToModel;
    private observerToView: ObserverToView;

    private readonly storageKeyCity = 'city';
    private cityList = new Array<string>();
    private lengthOfLocalStorage = 5;

    constructor(controller: SearcherController, observerToModel: ObserverToModel, observerToView: ObserverToView) {
        super('searcher-container', { controller, observerToModel, observerToView }, 'div');
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.observerToView.subscribe(ModelEvent.language, this);
    }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.language: {
                const langObject = <pagesLang>params.message;
                this.searchInput.placeholder = langObject.searchByCity;
                this.recentLocationTitle.textContent = langObject.recentLocationTitle;
                this.recentLocationTitleBtnClearAll.textContent = langObject.clearAll;
                // break;
            }
        }
    }

    protected render(): void {
        this.searchInput = document.createElement('input');
        this.searchInput.classList.add('searcher-input');
        this.searchInput.setAttribute('autofocus', 'autofocus');
        this.searchInput.placeholder = this.props.controller.language.getTranslateRu().searchByCity;

        this.searchIcon = document.createElement('div');
        this.searchIcon.className = 'searcher-icon';

        this.dropDownListBox = document.createElement('div');
        this.dropDownListBox.className = 'drop-down-list-box';

        const recentLocationTitleBox = document.createElement('div');
        recentLocationTitleBox.className = 'recent-location-title-box';

        this.recentLocationTitle = document.createElement('h3');
        this.recentLocationTitle.className = 'recent-location-title-box__title-name';
        this.recentLocationTitle.textContent = this.props.controller.language.getTranslateRu().recentLocationTitle;

        this.recentLocationTitleBtnClearAll = document.createElement('button');
        this.recentLocationTitleBtnClearAll.className = 'recent-location-box__btn-clear-all';
        this.recentLocationTitleBtnClearAll.textContent = this.props.controller.language.getTranslateRu().clearAll;

        recentLocationTitleBox.append(this.recentLocationTitle, this.recentLocationTitleBtnClearAll);

        this.alertDropDownList = document.createElement('div');
        this.alertDropDownList.className = 'searcher-input-drop-down-list__alert';
        this.alertDropDownList.textContent = this.props.controller.language.getTranslateRu().recents;

        // this.createDropDownList();

        this.inputDropDownList = document.createElement('ul');
        this.inputDropDownList.className = 'searcher-input-drop-down-list';

        // this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);

        // this.cityList.forEach((city) => {
        //     this.dropDownListItem = document.createElement('li');
        //     this.dropDownListItem.className = 'searcher-input-drop-down-item';
        //     this.dropDownListItem.textContent = `${city}`;
        //     this.inputDropDownList.append(this.dropDownListItem);
        // });
        // }

        // this.inputDropDownList.append(this.dropDownListItem);

        this.dropDownListBox.append(recentLocationTitleBox, this.alertDropDownList, this.inputDropDownList);

        this.element.append(this.searchInput, this.searchIcon, this.dropDownListBox);
    }

    protected addListeners(): void {
        this.searchInput.addEventListener('change', () => {
            const cityName = (this.searchInput as HTMLInputElement).value.toLocaleLowerCase();
            if (localStorage.getItem(this.storageKeyCity)?.length === 0) {
                this.cityList = [cityName];
                localStorage.setItem(this.storageKeyCity, JSON.stringify(this.cityList));
                // this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
            } else {
                this.checkLocalStorage(cityName);
            }

            this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);

            this.cityList.forEach((city) => {
                this.dropDownListItem = document.createElement('li');
                this.dropDownListItem.className = 'searcher-input-drop-down-item';
                this.dropDownListItem.textContent = `${city}`;
                this.inputDropDownList.append(this.dropDownListItem);
            });
            // this.createDropDownList();

            this.observerToModel.notify(ViewEvent.input, { message: cityName, typeEvents: ModelEvent.input });

            (this.searchInput as HTMLInputElement).value = '';
        });

        this.searchInput.addEventListener('click', () => {
            this.showDropDownList();
            this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
            if (localStorage.getItem(this.storageKeyCity) !== null && this.cityList.length >= 2) {
                this.alertDropDownList.classList.remove('hidden');
                this.alertDropDownList.classList.add('visible');
                // this.createDropDownList();
            } else {
                this.alertDropDownList.classList.remove('visible');
                this.alertDropDownList.classList.add('hidden');
            }
        });

        window.addEventListener('click', (event) => {
            const target = event.target as HTMLDivElement;
            if (!target?.closest('.drop-down-list-box') && !target.closest('.searcher-container')) {
                this.hideDropDownList();
            }
        });

        this.recentLocationTitleBtnClearAll.addEventListener('click', () => {
            this.inputDropDownList.innerHTML = '';
            this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
            localStorage.removeItem(this.storageKeyCity);
            this.alertDropDownList.classList.add('visible');
        });
    }

    protected checkLocalStorage(cityName: string) {
        if (localStorage.getItem(this.storageKeyCity)) {
            this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
            if (this.cityList?.includes(cityName)) {
                return;
            } else if (this.cityList.length < this.lengthOfLocalStorage) {
                this.cityList?.push(cityName);
            } else {
                this.cityList.length = this.lengthOfLocalStorage;
                this.cityList?.pop();
                this.cityList?.push(cityName);
            }
        }

        localStorage.setItem(this.storageKeyCity, JSON.stringify(this.cityList));
    }

    hideDropDownList() {
        this.dropDownListBox.classList.remove('visible');
    }
    showDropDownList() {
        this.dropDownListBox.classList.add('visible');
    }

    // protected createDropDownList() {
    //     if (localStorage.getItem(this.storageKeyCity)?.length === 0) {

    //         const cityName = (this.searchInput as HTMLInputElement).value.toLocaleLowerCase();
    //         this.cityList = [cityName];
    //         this.cityList.forEach((city) => {
    //             this.dropDownListItem = document.createElement('li');
    //             this.dropDownListItem.className = 'searcher-input-drop-down-item';
    //             this.dropDownListItem.textContent = `${city}`;
    //             this.inputDropDownList.append(this.dropDownListItem);
    //         });
    //     } else {
    //         console.log(
    //             'СЮДА ЗАШЕЛ  localStorage.getItem(this.storageKeyCity) :',
    //             localStorage.getItem(this.storageKeyCity)
    //         );
    //         this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
    //         this.cityList.forEach((city) => {
    //             this.dropDownListItem = document.createElement('li');
    //             this.dropDownListItem.className = 'searcher-input-drop-down-item';
    //             this.dropDownListItem.textContent = `${city}`;
    //             this.inputDropDownList.append(this.dropDownListItem);
    //         });
    //     }

    // if (localStorage.getItem(this.storageKeyCity)) {
    //     this.cityList.forEach((city) => {
    //         this.dropDownListItem = document.createElement('li');
    //         this.dropDownListItem.className = 'searcher-input-drop-down-item';
    //         this.dropDownListItem.textContent = `${city}`;
    //         this.inputDropDownList.append(this.dropDownListItem);
    //     });
    // } else {
    //     const cityName = (this.searchInput as HTMLInputElement).value.toLocaleLowerCase();
    //     this.cityList = [cityName];
    //     this.cityList.forEach((city) => {
    //         this.dropDownListItem = document.createElement('li');
    //         this.dropDownListItem.className = 'searcher-input-drop-down-item';
    //         this.dropDownListItem.textContent = `${city}`;
    //         this.inputDropDownList.append(this.dropDownListItem);
    //     });
    // }
    // }
}
