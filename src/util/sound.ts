import Tone, { Time, Signal } from "tone";
class TonePlayer {

	synth: Tone.Synth = new Tone.Synth();
	element: any;
	useKeyboard = false;

	constructor(element = document){
		this.setElement(element);

		this.synth = new Tone.Synth({
			oscillator: {
				type: 'sine'
			},
			envelope: {
				attack : 0.01 ,
				decay : 0.01 ,
				sustain : 1 ,
				release : 0.01
			}
		}).toMaster();
	}

	toggleUseKeyboard = () => {
		this.useKeyboard = !this.useKeyboard;
	}

	play = (note: string = 'C4') => {
		let frequency = this.convertNoteToFreq(note);
		this.synth.triggerAttack(frequency);
	}

	stop = () => {
		this.synth.triggerRelease();
	}

	convertNoteToFreq = (note: string) => {
		let frequency = Tone.Frequency(note).toFrequency();
		return frequency;
	}

	setElement = (element = document) => {
		this.element = element;
		this.element.addEventListener('keydown', (e: any) => {
			if (this.useKeyboard){
				this.play();
			}
		});
		this.element.addEventListener('keyup', (e: any) => {
			if (this.useKeyboard){
				this.stop();
			}
		})
	}
}

class GlobalPlayer {
	instance: TonePlayer = new TonePlayer();
	getInstance = () => { return this.instance}
}

export { 
	TonePlayer,
	GlobalPlayer,
};