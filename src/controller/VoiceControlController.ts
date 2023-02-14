import { VoiceControlComponent } from '../view/components/voiceControl/VoiceControlComponents';
import { BaseController } from './BaseController';

export class VoiceControlController extends BaseController<VoiceControlComponent> {
    public component: VoiceControlComponent;
    

    constructor() {
        super();
        this.component = new VoiceControlComponent(this);
    }
}
