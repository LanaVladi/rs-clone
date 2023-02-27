import { VoiceControlController } from '../../../controller/VoiceControlController';
import { ObserverToView } from '../../../model/ObserverToView';
import { ModelEvent, ViewEvent } from '../../../types';
// import VoiceControl from '../../../model/APIWebSpeech';
import { BaseComponent } from '../../BaseComponent';
import '../voiceControl/voiceControl.css';
import { ObserverToModel } from './../../../model/ObserverToModel';

interface VoiceControlComponentProps {
    controller: VoiceControlController;
    observerToModel: ObserverToModel;
    observerToView: ObserverToView;
}

export class VoiceControlComponent extends BaseComponent<VoiceControlComponentProps> {
    private voiceControlIcon!: HTMLDivElement;
    private voiceControlModal!: HTMLDivElement;
    private modalInner!: HTMLDivElement;
    private overlay!: HTMLDivElement;
    private voiceRecordAnimation!: HTMLDivElement;
    private observerToModel: ObserverToModel;
    private observerToView: ObserverToView;

    constructor(controller: VoiceControlController, observerToModel: ObserverToModel, observerToView: ObserverToView) {
        super('voice-control-container', { controller, observerToModel, observerToView }, 'div');
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
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
