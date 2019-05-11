import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PokedexApp';

  isOpen: boolean = false;

  open(shouldOpen: boolean) {
    this.isOpen = shouldOpen;
  }
}
