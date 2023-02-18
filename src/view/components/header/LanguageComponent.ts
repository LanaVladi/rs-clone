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
    private observerToModel: ObserverToModel;

    constructor(controller: LanguageController, observerToModel: ObserverToModel) {
        super('language-container', { controller, observerToModel }, 'div');
        this.observerToModel = observerToModel;
    }

    protected render(): void {
        this.langName = document.createElement('div');
        this.langName.className = 'lang-name';
        this.langName.textContent = 'RU';

        this.langIcon = document.createElement('div');
        this.langIcon.className = 'lang-icon';

        this.element.append(this.langIcon, this.langName);
    }

    protected addListeners() {
        this.element.addEventListener('click', async () => {
            const lang = this.langName.textContent?.toLowerCase();
            if (lang === 'ru') {
                this.langName.textContent = 'EN';
            } else {
                this.langName.textContent = 'RU';
            }
            this.observerToModel.notify(ViewEvent.language, { message: lang });
        });
    }
}
