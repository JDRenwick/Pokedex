import { Component, OnInit } from '@angular/core';
import { BioPageService } from '../bio-page.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Arrows } from 'src/app/Models/arrows';
import { Arrow } from 'src/app/Models/arrow';
import { Sprite } from 'src/app/Models/sprite';
import { ControlsService } from 'src/app/Shared/controls.service';

@Component({
  selector: 'app-bio-page-layout',
  templateUrl: './bio-page-layout.component.html',
  styleUrls: ['./bio-page-layout.component.scss']
})
export class BioPageLayoutComponent implements OnInit {

  private arrowControls: Arrows;

  private pokemonBioPageSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  readonly pokemonBioPageObservable: Observable<any> = this.pokemonBioPageSubject.asObservable();

  private spritesSubject: BehaviorSubject<Sprite[]> = new BehaviorSubject<Sprite[]>(null);
  readonly spritesObservable: Observable<Sprite[]> = this.spritesSubject.asObservable();


  private currentViewSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  readonly currentViewObservable: Observable<string> = this.currentViewSubject.asObservable();

  constructor(private bioPageService: BioPageService,
              private controlsService: ControlsService) { }

  ngOnInit() {
    this.bioPageService.getPokemonBioPage().subscribe(pokemonBioPage => {
      this.setSprites(pokemonBioPage.sprites);
      this.pokemonBioPageSubject.next(pokemonBioPage);
      this.setArrowControls();
    });

    this.controlsService.getArrowClicked().subscribe(value => {
      this.currentViewSubject.next(value);
      console.log(value)
    });
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

    this.spritesSubject.next(formattedSprites);
  }

  setArrowControls() {
    this.arrowControls = new Arrows(new Arrow("Evolution", "evolution"), 
                                    new Arrow("Stats", "stats"), 
                                    new Arrow("Abilities", "abilities"), 
                                    new Arrow("Forms", "forms"))
    this.controlsService.setArrowControls(this.arrowControls);
  }


}
