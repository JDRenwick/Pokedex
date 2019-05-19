import { Injectable } from '@angular/core';
import { BioPageRetrievalService } from './bio-page-retrieval.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BioPageService {

  constructor(private bioPageRetrievalService: BioPageRetrievalService) { }

  getPokemonBioPageById(id: number) {
    return this.bioPageRetrievalService.getBioPageById(id);
  }

  getPokemonBioPageByName(name: string) {
    return this.bioPageRetrievalService.getBioPageByName(name);
  }
}
