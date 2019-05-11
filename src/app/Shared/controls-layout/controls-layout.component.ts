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
      console.log(arrowControls);
      this.arrowControls = arrowControls;
    });
  }
  arrowClick(value: string) {
    console.log(value);
    this.controlsService.arrowClicked(value);
  }

}
