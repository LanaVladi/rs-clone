import {
    langForSpeechAPI,
    wordsForGrammar,
    WEIGHT_VALUE_THIS_GRAMMAR,
    NUMBER_ALTERNATIVE_MATCHES,
    SPEECH_RATE,
} from '../constants';

class VoiceControl {
    private recognition: SpeechRecognition;
    private speechRecognitionList!: SpeechGrammarList;
    private synthesis: SpeechSynthesis;
    private lang: langForSpeechAPI;

    constructor(lang: string) {
        this.lang = lang === 'en' ? langForSpeechAPI.en : langForSpeechAPI.ru;
        this.recognition = new webkitSpeechRecognition();
        this.speechRecognitionList = new webkitSpeechGrammarList();
        this.synthesis = window.speechSynthesis;
    }

    public getSpeechRecognition(): SpeechRecognition {
        return this.recognition;
    }

    public getSpeechSynthesis(): SpeechSynthesis {
        return this.synthesis;
    }

    private init(): void {
        const wordsList =
            this.lang === langForSpeechAPI.en ? Object.keys(wordsForGrammar) : Object.values(wordsForGrammar);
        const grammar = `#JSGF V1.0; grammar words; public <word> = ${wordsList.join(' | ')} ;`;
        this.speechRecognitionList.addFromString(grammar, WEIGHT_VALUE_THIS_GRAMMAR);
        this.recognition.lang = this.lang;
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = NUMBER_ALTERNATIVE_MATCHES;
    }

    public async getRecord(): Promise<string> {
        this.init();
        this.recognition.start();
        console.log('PLEASE SPEAK');

        try {
            const record: string = await new Promise((resolve) => {
                this.recognition.onresult = (event) => {
                    const last = event.results.length - 1;
                    const result = event.results[last];
                    resolve(result[0].transcript);
                };

                this.recognition.onspeechend = () => {
                    this.recognition.stop();
                };

                this.recognition.onnomatch = () => {
                    console.log('NO MATCH');
                };

                this.recognition.onerror = (event) => {
                    console.log(`Error occurred in recognition: ${event.error}`);
                };
            });
            return record;
        } catch (error) {
            console.error(error);
            return '';
        }
    }

    private async getVoice(): Promise<SpeechSynthesisVoice | undefined> {
        try {
            const voices: Array<SpeechSynthesisVoice> = await new Promise((res): void => {
                const id = setInterval(() => {
                    if (this.synthesis.getVoices().length !== 0) {
                        res(this.synthesis.getVoices());
                        clearInterval(id);
                    }
                }, 10);
            });

            const voice = voices.find((voice) => voice.lang === this.lang);
            return voice;
        } catch (error) {
            console.error(error);
            return;
        }
    }

    public async speak(text: string): Promise<void> {
        if (this.synthesis.speaking) {
            console.error('speechSynthesis.speaking');
            this.synthesis.cancel();
            setTimeout(this.speak, 300);
        } else if (text !== '') {
            const utterThis = new SpeechSynthesisUtterance(text);
            const voice = await this.getVoice();
            if (voice) utterThis.voice = voice;
            utterThis.rate = SPEECH_RATE;

            utterThis.onend = () => {
                console.log('SpeechSynthesisUtterance.onend');
            };

            utterThis.onerror = () => {
                console.error('SpeechSynthesisUtterance.onerror');
            };

            this.synthesis.speak(utterThis);
        }
    }
}

export default VoiceControl;
