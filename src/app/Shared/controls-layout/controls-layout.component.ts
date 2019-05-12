import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../controls.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Arrows } from 'src/app/Models/arrows';

@Component({
  selector: 'app-controls-layout',
  templateUrl: './controls-layout.component.html',
  styleUrls: ['./controls-layout.component.scss']
})
export class ControlsLayoutComponent implements OnInit {

  arrowControls: Arrows;

  constructor(private controlsService: ControlsService) { }

  ngOnInit() {
    this.controlsService.getArrowControls().subscribe(arrowControls => {
      this.arrowControls = arrowControls;
    });
  }
  arrowClick(value: string) {
    this.controlsService.arrowClicked(value);
  }

}
