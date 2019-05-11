import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss']
})
export class LightsComponent implements OnInit {

  @Input() isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

}
