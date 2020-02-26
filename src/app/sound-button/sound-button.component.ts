import { Component, OnInit, Input } from '@angular/core';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-sound-button',
  templateUrl: './sound-button.component.html',
  styleUrls: ['./sound-button.component.scss'],
})
export class SoundButtonComponent implements OnInit {

  @Input() note = null;

  constructor(private soundService: SoundService) {}

  ngOnInit() {}

  play(){
    console.log('play', this.note);
    this.soundService.play(this.note);
  }

  stop(){
    console.log('stop');
    this.soundService.stop();
  }
}
