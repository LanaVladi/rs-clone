import { ObserverToModel } from '../../../model/ObserverToModel';
import { ViewEvent } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import { LanguageController } from '../../../controller/LanguageController';

interface LanguageComponentProps {
    controller: LanguageController;
    observerToModel: ObserverToModel;
}
export class LanguageComponent extends BaseComponent<LanguageComponentProps> {
    private langName!: HTMLDivElement;
    private langIcon!: HTMLDivElement;
    private storageKeyLang = 'lang';
    private langList!: string;
    private language!: string;
    private langDefault!: string;

    private lengthOfLocalStorage = 1;

    private observerToModel: ObserverToModel;

    constructor(controller: LanguageController, observerToModel: ObserverToModel) {
        super('language-container', { controller, observerToModel }, 'div');
        this.observerToModel = observerToModel;
    }

    protected render(): void {
        this.langName = document.createElement('div');
        this.langName.className = 'lang-name';

        const langDefault = this.checkLocalStorageLanguage();
        // this.langDefault = this.checkLocalStorageLanguage();
        // console.log('this.langDefault :', this.langDefault);
        // // const langDefault = this.checkLocalStorageLanguage();
        this.langName.textContent = `${langDefault}`;
        // console.log('this.langName.textContent :', this.langName.textContent);

        this.langIcon = document.createElement('div');
        this.langIcon.className = 'lang-icon';

        this.element.append(this.langIcon, this.langName);
    }

    protected checkLocalStorageLanguage() {
        if (localStorage.getItem('lang')) {
            const langList = JSON.parse(`${localStorage.getItem('lang')}`);
            return (this.langName.textContent = langList.toUpperCase());
        } else {
            const langList = 'ru';
            return (this.langName.textContent = langList.toUpperCase());
        }
    }

    protected addListeners() {
        this.element.addEventListener('click', async () => {
            const lang = this.langName.textContent;
            if (lang === 'RU') {
                this.langName.textContent = 'EN';
                this.language = 'en';
            } else {
                this.langName.textContent = 'RU';
                this.language = 'ru';
            }

            this.langList = this.language;
            localStorage.setItem(this.storageKeyLang, JSON.stringify(this.langList));

            this.observerToModel.notify(ViewEvent.language, { message: this.langList });
        });

        // window.addEventListener('DOMContentLoaded', () => {
        //     this.checkLocalStorageLanguage();
        //     console.log('сюда зашел');
        // });
    }
}
