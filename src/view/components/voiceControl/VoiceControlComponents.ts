import { VoiceControlController } from '../../../controller/VoiceControlController';
import { ObserverToView } from '../../../model/ObserverToView';
import { TranslatorModel } from '../../../model/TranslatorModel';
import INotify, { ModelEvent, NotifyParameters, pagesLang, ViewEvent } from '../../../types';
import { BaseComponent } from '../../BaseComponent';
import '../voiceControl/voiceControl.css';
import { ObserverToModel } from './../../../model/ObserverToModel';

interface VoiceControlComponentProps {
    controller: VoiceControlController;
    observerToModel: ObserverToModel;
    observerToView: ObserverToView;
    language: TranslatorModel;
}

export class VoiceControlComponent extends BaseComponent<VoiceControlComponentProps> implements INotify {
    private voiceControlIcon!: HTMLDivElement;
    private voiceControlModal!: HTMLDivElement;
    private modalInner!: HTMLDivElement;
    private overlay!: HTMLDivElement;
    private voiceRecordAnimation!: HTMLDivElement;
    private observerToModel: ObserverToModel;
    private observerToView: ObserverToView;
    private storageKeyLang = 'lang';
    private startLang!: pagesLang;
    public language: TranslatorModel;

    constructor(
        controller: VoiceControlController,
        observerToModel: ObserverToModel,
        observerToView: ObserverToView,
        language: TranslatorModel
    ) {
        super('voice-control-container', { controller, observerToModel, observerToView, language }, 'div');
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.language = language;
        this.startLang = this.checkLocalStorageLanguage();
        this.notify({ message: this.startLang, typeEvents: ModelEvent.language });
        this.observerToView.subscribe(ModelEvent.language, this);
    }

    protected checkLocalStorageLanguage() {
        if (!JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`)) {
            const startLangInit = 'ru';
            localStorage.setItem(this.storageKeyLang, JSON.stringify(startLangInit));
            return this.language.getTranslateRu();
        } else {
            const startLangInit = JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`);
            if (startLangInit === 'en') {
                return this.language.getTranslateEn();
            } else {
                return this.language.getTranslateRu();
            }
        }
    }

    notify<T>(params: NotifyParameters<T>): void {
        switch (params.typeEvents) {
            case ModelEvent.language: {
                const langObject = <pagesLang>params.message;

                this.modalInner.innerText = langObject.pleaseSpeak;

                break;
            }
        }
    }

    protected render(): void {
        this.voiceControlIcon = document.createElement('div');
        this.voiceControlIcon.className = 'voice-control-icon';

        this.voiceControlModal = document.createElement('div');
        this.voiceControlModal.className = 'voice-control-modal';
        this.voiceControlModal.style.visibility = 'hidden';

        this.modalInner = document.createElement('div');
        this.modalInner.className = 'modal-inner';
        this.modalInner.innerText = this.props.controller.language.getTranslateRu().pleaseSpeak;

        this.voiceRecordAnimation = document.createElement('div');
        this.voiceRecordAnimation.className = 'voice-record-animation';
        this.voiceRecordAnimation.innerHTML = `
            <div class="circle-ripple"></div>
            <div class="circle-ripple-2"></div>
            <div class="circle">
                <div class="circle-2">
                    <div class="microphone-icon"></div>
                </div>
            </div>
        `;

        this.voiceControlModal.append(this.voiceRecordAnimation, this.modalInner);

        this.overlay = document.createElement('div');
        this.overlay.className = 'voice-control-overlay';

        this.element.append(this.voiceControlIcon, this.voiceControlModal, this.overlay);
    }

    protected addListeners(): void {
        this.voiceControlIcon.addEventListener('click', async () => {
            this.voiceControlModal.style.visibility = 'visible';
            this.overlay.style.visibility = 'visible';
            const record = await this.props.controller.voiceControlModel.getRecord();
            this.observerToModel.notify(ViewEvent.voice, { message: record, typeEvents: ModelEvent.voice });
        });
    }
}
