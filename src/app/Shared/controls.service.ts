import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Arrows } from 'src/app/Models/arrows';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  private arrowsSubject: BehaviorSubject<Arrows> = new BehaviorSubject<Arrows>(null);
  readonly arrowsObservable: Observable<Arrows> = this.arrowsSubject.asObservable();

  private arrowClickedSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  readonly arrowClickedObservable: Observable<string> = this.arrowClickedSubject.asObservable();

  constructor() { }

  getArrowControls(): Observable<Arrows> {
    return this.arrowsObservable;
  }

  setArrowControls(arrowControls: Arrows) {
    this.arrowsSubject.next(arrowControls);
  }

  getArrowClicked(): Observable<string> {
    return this.arrowClickedObservable;
  }

  arrowClicked(value: string) {
    console.log(value);
    this.arrowClickedSubject.next(value);
  }
}
