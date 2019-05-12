import { Component, OnInit } from '@angular/core';
import { BioPageService } from '../bio-page.service';
import { Observable, Subject } from 'rxjs';
import { Arrows } from 'src/app/Models/arrows';
import { Arrow } from 'src/app/Models/arrow';
import { Sprite } from 'src/app/Models/sprite';
import { ControlsService } from 'src/app/Shared/controls.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bio-page-layout',
  templateUrl: './bio-page-layout.component.html',
  styleUrls: ['./bio-page-layout.component.scss']
})
export class BioPageLayoutComponent implements OnInit {

  gettingInfo: boolean = true;
  pokemonBioPage;
  sprites: Sprite[];
  currentView: string;

  private arrowControls: Arrows;


  constructor(private bioPageService: BioPageService,
              private route: ActivatedRoute,
              private controlsService: ControlsService) { }

  ngOnInit() {
    this.gettingInfo = true;

    const id = this.route.snapshot.paramMap.get('id');
    const name = this.route.snapshot.paramMap.get('name');

    if (!!id) {
      this.bioPageService.getPokemonBioPageById(id).subscribe(pokemonBioPage => this.setBioPage(pokemonBioPage));
    } else if (!!name) {
      this.bioPageService.getPokemonBioPageByName(name).subscribe(pokemonBioPage => this.setBioPage(pokemonBioPage));
    }

    this.controlsService.getArrowClicked().subscribe(value => {
      this.currentView = value;
    });
  }
  setBioPage(pokemonBioPage) {
    this.setSprites(pokemonBioPage.sprites);
    this.pokemonBioPage = pokemonBioPage;
    this.setArrowControls();
    this.gettingInfo = false;
  }
  setSprites(sprites: any) {
    const formattedSprites: Sprite[] = [];
    if (!!sprites.front_female) {
      formattedSprites.push(new Sprite("Regular", "Male", sprites.front_default));
      formattedSprites.push(new Sprite("Regular", "Female", sprites.front_female));
    } else {
      formattedSprites.push(new Sprite("Regular", null, sprites.front_default));
    }
    if (!!sprites.front_shiny_female) {
      formattedSprites.push(new Sprite("Shiny", "Male", sprites.front_shiny));
      formattedSprites.push(new Sprite("Shiny", "Female", sprites.front_shiny_female));
    } else {
      formattedSprites.push(new Sprite("Shiny", null, sprites.front_shiny));
    }

    this.sprites = formattedSprites;
  }

  setArrowControls() {
    this.arrowControls = new Arrows(new Arrow("Evolution", "evolution"), 
                                    new Arrow("Stats", "stats"), 
                                    new Arrow("Abilities", "abilities"), 
                                    new Arrow("Forms", "forms"))
    this.controlsService.setArrowControls(this.arrowControls);
  }


}
