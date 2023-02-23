import { weatherIconImgFormat, weatherIconUrl } from '../../../constants';
import { SearcherController } from '../../../controller/SearchController';
import { ObserverToModel } from '../../../model/ObserverToModel';
import { ObserverToView } from '../../../model/ObserverToView';
import { ModelEvent, NotifyParameters, pagesLang, ViewEvent, weatherIndicators } from '../../../types';
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
    public cityName!: string;

    private dropDownListInfo!: HTMLDivElement;
    private locationName!: HTMLSpanElement;
    private temperature!: HTMLSpanElement;
    private weatherIcon!: HTMLImageElement;
    private deleteBtnDotted!: HTMLButtonElement;

    private observerToModel: ObserverToModel;
    private observerToView: ObserverToView;

    private readonly storageKeyCity = 'city';
    private cityList = new Array<string>();
    private cityListForShow = new Array<string>();

    private lengthOfLocalStorage = 5;

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
                this.recentLocationTitle.textContent = langObject.recentLocationTitle;
                this.recentLocationTitleBtnClearAll.textContent = langObject.clearAll;
                break;
            }
            case ModelEvent.today_weather_indicators: {
                const { temp, icon, cityName, countryCode } = <weatherIndicators>params.message;

                this.temperature.innerText = `${temp}°`;
                this.locationName.innerText = `${cityName}, ${countryCode}`;
                this.weatherIcon.src = `${weatherIconUrl}${icon}${weatherIconImgFormat}`;
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

        this.inputDropDownList = document.createElement('ul');
        this.inputDropDownList.className = 'searcher-input-drop-down-list';

        this.dropDownListBox.append(recentLocationTitleBox, this.alertDropDownList, this.inputDropDownList);

        this.element.append(this.searchInput, this.searchIcon, this.dropDownListBox);
    }

    protected createDropDownList() {
        this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
        this.cityListForShow = this.cityList;

        this.cityListForShow.forEach((city) => {
            this.dropDownListItem = document.createElement('li');
            this.dropDownListItem.className = 'searcher-input-drop-down-item';
            // this.dropDownListItem.textContent = `${city}`;

            this.dropDownListInfo = document.createElement('div');
            this.dropDownListInfo.className = 'drop-down-list-item-info';

            this.weatherIcon = document.createElement('img');
            this.weatherIcon.className = 'header__weather-icon';

            this.temperature = document.createElement('span');
            this.locationName = document.createElement('span');

            this.dropDownListInfo.append(this.weatherIcon, this.temperature, this.locationName);

            this.deleteBtnDotted = document.createElement('button');
            this.deleteBtnDotted.className = 'delete-button-icon-dotted';

            this.dropDownListItem.append(this.dropDownListInfo, this.deleteBtnDotted);
            this.inputDropDownList.append(this.dropDownListItem);

            // this.observerToModel.notify(ViewEvent.input, { message: city, typeEvents: ModelEvent.input });

            this.deleteBtnDotted.addEventListener('click', (event) => {
                const target = event.target as HTMLButtonElement;
                const clickedBtnDelete = target.textContent;
                console.log('clickedBtnDelete :', clickedBtnDelete);
                this.dropDownListItem.innerHTML = '';
                // this.observerToModel.notify(ViewEvent.input, { message: clickedCity, typeEvents: ModelEvent.input });
            });
        });
    }

    protected addListeners(): void {
        window.addEventListener('DOMContentLoaded', () => {
            this.createDropDownList();
        });

        this.searchInput.addEventListener('change', () => {
            // event.preventDefault();
            this.cityName = (this.searchInput as HTMLInputElement).value.toLocaleLowerCase();

            if (localStorage.getItem(this.storageKeyCity)?.length === 0) {
                this.cityList = [this.cityName];
                localStorage.setItem(this.storageKeyCity, JSON.stringify(this.cityList));
            } else {
                this.checkLocalStorage(this.cityName);
            }
            this.hideDropDownList();
            this.alertDropDownList.classList.remove('visible');
            this.inputDropDownList.innerHTML = '';
            //УДАЛЯЕТ ЗАПРОС И ВМЕСТЕ С ЭТИМ УДАЛЯЕТСЯ ГОРОД, ИКОНКИ, ТЕМПЕРАТУРА,А БЕЗ НЕГО ВСЁ СОЗДАЕТСЯ 5 РАЗ
            // if(this.sh)
            this.createDropDownList();

            this.observerToModel.notify(ViewEvent.input, { message: this.cityName, typeEvents: ModelEvent.input });
            (this.searchInput as HTMLInputElement).value = '';
        });

        this.searchInput.addEventListener('click', () => {
            this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);

            if (localStorage.getItem(this.storageKeyCity) && this.cityList.length === 1) {
                this.alertDropDownList.classList.add('visible');
                this.inputDropDownList.classList.remove('visible');
                // this.dropDownListItem.classList.remove('visible');

                this.showDropDownList();
            } else {
                this.showDropDownList();
                this.alertDropDownList.classList.remove('visible');
                this.inputDropDownList.classList.add('visible');
                // this.dropDownListItem.classList.add('visible');
            }
        });

        this.inputDropDownList.addEventListener('click', (event) => {
            const target = event.target as HTMLLIElement;
            const clickedCity = target.textContent;
            console.log('clickedCity :', clickedCity);
            this.observerToModel.notify(ViewEvent.input, { message: clickedCity, typeEvents: ModelEvent.input });
        });

        // this.deleteBtnDotted.addEventListener('click', (event) => {
        //     const target = event.target as HTMLButtonElement;
        //     const clickedBtnDelete = target.textContent;
        //     console.log('clickedBtnDelete :', clickedBtnDelete);
        //     this.dropDownListItem.innerHTML = '';
        //     // this.observerToModel.notify(ViewEvent.input, { message: clickedCity, typeEvents: ModelEvent.input });
        // });

        document.body.addEventListener('click', (event) => {
            const target = event.target as HTMLDivElement;
            if (!target?.closest('.drop-down-list-box') && !target.closest('.searcher-container')) {
                this.hideDropDownList();
                this.alertDropDownList.classList.remove('visible');
            }
        });

        this.recentLocationTitleBtnClearAll.addEventListener('click', () => {
            this.inputDropDownList.innerHTML = '';
            localStorage.removeItem(this.storageKeyCity);
            this.alertDropDownList.classList.add('visible');
            this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
            this.cityList = [this.cityName];
            localStorage.setItem(this.storageKeyCity, JSON.stringify(this.cityList));
            this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
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
}
