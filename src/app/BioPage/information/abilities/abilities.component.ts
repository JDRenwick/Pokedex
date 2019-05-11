import { Component, OnInit, Input } from '@angular/core';
import { Ability } from 'src/app/Models/ability';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {

  @Input() abilities: Ability[];

  constructor() { }

  ngOnInit() {
  }

}
