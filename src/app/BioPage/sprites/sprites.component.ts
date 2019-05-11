import { Component, OnInit, Input } from '@angular/core';
import { Sprite } from 'src/app/Models/sprite';

@Component({
  selector: 'app-sprites',
  templateUrl: './sprites.component.html',
  styleUrls: ['./sprites.component.scss']
})
export class SpritesComponent implements OnInit {

  @Input() sprites: Sprite[];

  currentSprite: Sprite;
  index: number = 0;

  constructor() { }

  ngOnInit() {
    this.currentSprite = this.sprites[this.index];
    
    setInterval(() => {
      this.index++
      this.index = this.index < this.sprites.length ? this.index : 0; 
      this.currentSprite = this.sprites[this.index];
    }, 3000)
  }

}
