import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Arrows } from 'src/app/Models/arrows';

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

  up() {
    this.arrow.emit("up");
  }
  left() {
    this.arrow.emit("left");
  }
  right() {
    this.arrow.emit("right");
  }
  down() {
    this.arrow.emit("down");
  }

}
