import Tone, { Time, Signal } from "tone";
class TonePlayer {

	synth: Tone.Synth = new Tone.Synth();
	element: any;

	constructor(element = document){
		this.element = element;
		this.element.addEventListener('keydown', (e: any) => {
			console.log(e);
			this.play();
		});
		this.element.addEventListener('keyup', (e: any) => {
			this.stop();
		})

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

	play = (note = "D#2") => {
		this.synth.triggerAttack(note);
	}

	stop = () => {
		this.synth.triggerRelease();
	}

	setElement = (element = document) => {
		this.element = element;
		this.element.addEventListener('keydown', (e: any) => {
			console.log(e);
			this.play();
		});
		this.element.addEventListener('keyup', (e: any) => {
			this.stop();
		})
	}
}

class GlobalPlayer {
	instance: TonePlayer = new TonePlayer();
	getInstance = () => { return this.instance}
}

export { 
	TonePlayer,
	GlobalPlayer
};