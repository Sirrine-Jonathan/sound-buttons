import { Component, OnInit } from '@angular/core';
import notes from '../../util/notes';

@Component({
  selector: 'app-sound-board',
  templateUrl: './sound-board.component.html',
  styleUrls: ['./sound-board.component.scss'],
})
export class SoundBoardComponent implements OnInit {

  sounds = notes;

  constructor() { }

  ngOnInit() {}
  
}
