import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  @Input() isOpen: boolean;

  @Output() open: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openCover() {
    this.open.emit(!this.isOpen);
  }

}
