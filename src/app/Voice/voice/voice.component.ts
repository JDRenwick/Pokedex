import { Component, OnInit, Inject } from '@angular/core';
import annyang from "annyang";
import { Router } from '@angular/router';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit {

  constructor(private router: Router) { }

  commands = {
    'show me :pokemon': this.searchForPokemon,
    'test': ()=> alert("WOOP!")
  }

  ngOnInit() {
    annyang.addCommands(this.commands);

    annyang.start()
  }

  searchForPokemon(pokemon) {
    if (!!parseInt(pokemon)) {
      this.router.navigate([`bio/number/${pokemon}`])
    }
    else {
      this.router.navigate([`bio/name/${pokemon}`])
    }
  }

}
