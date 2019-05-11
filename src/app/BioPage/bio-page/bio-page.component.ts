import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.scss']
})
export class BioPageComponent implements OnInit {

  @Input() pokemonBioPage: any;

  constructor() { }

  ngOnInit() {
  }

}
