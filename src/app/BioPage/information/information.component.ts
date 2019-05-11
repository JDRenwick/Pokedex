import { Component, OnInit, Input } from '@angular/core';
import { Ability } from 'src/app/Models/ability';
import { Stat } from 'src/app/Models/stat';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  @Input() currentInfo: string;
  @Input() abilities: Ability[];
  @Input() stats: Stat[];

  constructor() { }

  ngOnInit() {
  }

}
