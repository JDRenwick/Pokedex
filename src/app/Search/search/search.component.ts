import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  query: string;

  constructor() { }

  ngOnInit() {
  }

  buttonClicked() {
    this.search.emit(this.query);
  }

  keyup(key) {
    if (key.keyCode === 13) {
      this.buttonClicked();
    }
  }

}
