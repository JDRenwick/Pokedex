import { Component, OnInit } from '@angular/core';
import { BioPageService } from '../bio-page.service';
import { Observable, BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Type } from 'src/app/Models/type';
import { Sprite } from 'src/app/Models/sprite';

@Component({
  selector: 'app-bio-page-layout',
  templateUrl: './bio-page-layout.component.html',
  styleUrls: ['./bio-page-layout.component.scss']
})
export class BioPageLayoutComponent implements OnInit {

  private pokemonBioPageSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  readonly pokemonBioPageObservable: Observable<any> = this.pokemonBioPageSubject.asObservable();

  private spritesSubject: BehaviorSubject<Sprite[]> = new BehaviorSubject<Sprite[]>(null);
  readonly spritesObservable: Observable<Sprite[]> = this.spritesSubject.asObservable();

  constructor(private bioPageService: BioPageService) { }

  ngOnInit() {
    this.bioPageService.getPokemonBioPage().subscribe(pokemonBioPage => {
      this.setSprites(pokemonBioPage.sprites);
      this.pokemonBioPageSubject.next(pokemonBioPage);
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


}
