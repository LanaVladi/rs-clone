import { lang, langObj } from '../../../constants';
import { VoiceControlController } from '../../../controller/VoiceControlController';
import { BaseComponent } from '../../BaseComponent';
import '../voiceControl/voiceControl.css'

interface VoiceControlComponentProps {
    controller: VoiceControlController;
}

export class VoiceControlComponent extends BaseComponent<VoiceControlComponentProps> {
    private voiceControlIcon!: HTMLDivElement;
    private voiceControlModal!: HTMLDivElement;
    private modalInner!: HTMLDivElement;
    private overlay!: HTMLDivElement;
    private voiceRecordAnimation!: HTMLDivElement;

    constructor(controller: VoiceControlController) {
        super('voice-control-container', { controller }, 'div');
    }

    protected render(): void {
        this.voiceControlIcon = document.createElement('div');
        this.voiceControlIcon.className = 'voice-control-icon';

        this.voiceControlModal = document.createElement('div');
        this.voiceControlModal.className = 'voice-control-modal';
        this.voiceControlModal.style.visibility = 'hidden';

        this.modalInner = document.createElement('div');
        this.modalInner.className = 'modal-inner';
        this.modalInner.innerText = langObj[lang].pleaseSpeak;
        
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
        this.voiceControlIcon.addEventListener('click', () => {
            this.voiceControlModal.style.visibility = 'visible';
        });
    }
}
