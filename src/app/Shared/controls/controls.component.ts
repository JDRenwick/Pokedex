import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Arrows } from 'src/app/Models/arrows';
import { Arrow } from 'src/app/Models/arrow';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Input() arrowControls: Arrows;

  @Output() arrow: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  arrowClick(value: string) {
    this.arrow.emit(value);
  }

  goToVoice() {
    console.log("go to voice");
  }

  endVoice() {
    console.log("end voice");
  }

}
