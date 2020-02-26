import { Injectable } from '@angular/core';
import { TonePlayer } from '../util/sound';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  player = new TonePlayer();

  constructor() {}

  public play(note: string){
    this.player.play(note);
  }

  public stop(){
    this.player.stop();
  }
}
