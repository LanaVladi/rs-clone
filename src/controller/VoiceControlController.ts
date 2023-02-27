import VoiceControl from '../model/APIWebSpeech';
import { ObserverToModel } from '../model/ObserverToModel';
import { ObserverToView } from '../model/ObserverToView';
import { TranslatorModel } from '../model/TranslatorModel';
import { VoiceControlComponent } from '../view/components/voiceControl/VoiceControlComponents';
import { BaseController } from './BaseController';

export class VoiceControlController extends BaseController<VoiceControlComponent> {
    public component: VoiceControlComponent;
    public observerToModel: ObserverToModel;
    public observerToView: ObserverToView;
    public language: TranslatorModel;
    public voiceControlModel: VoiceControl;

    constructor(
        observerToModel: ObserverToModel,
        observerToView: ObserverToView,
        language: TranslatorModel,
        voiceControlModel: VoiceControl
    ) {
        super();
        this.language = language;
        this.voiceControlModel = voiceControlModel;
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.component = new VoiceControlComponent(this, observerToModel, observerToView);
    }
}
