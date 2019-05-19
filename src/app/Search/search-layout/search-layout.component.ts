import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-layout',
  templateUrl: './search-layout.component.html',
  styleUrls: ['./search-layout.component.scss']
})
export class SearchLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(query:string) {
    if (parseInt(query)) {
      this.router.navigate([`bio/number/${query}`])
    }
    else {
      this.router.navigate([`bio/name/${query}`])
    }
  }

}
