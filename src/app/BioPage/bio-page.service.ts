import { Injectable } from '@angular/core';
import { BioPageRetrievalService } from './bio-page-retrieval.service';
import { Subject, of, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BioPageService {

  private pokemonBioPage: any;

  constructor(private bioPageRetrievalService: BioPageRetrievalService) { }

  getPokemonBioPage(): Observable<any> {
    if (!this.pokemonBioPage) {
      const pokemonBioPageSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
      this.bioPageRetrievalService.getBioPage().subscribe(pokemonBioPage => {
        this.pokemonBioPage = pokemonBioPage;
        pokemonBioPageSubject.next(this.pokemonBioPage);
      });
      return pokemonBioPageSubject.asObservable();
    } else {
      return of(this.pokemonBioPage);
    }
  }

}
