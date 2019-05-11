import { Component, OnInit, Input } from '@angular/core';
import { Type } from 'src/app/Models/type';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;
  @Input() types: Type[];

  constructor() { }

  ngOnInit() {
  }

}
