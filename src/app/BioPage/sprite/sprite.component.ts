import { Component, OnInit, Input } from '@angular/core';
import { Sprite } from 'src/app/Models/sprite';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent implements OnInit {

  @Input() sprite: Sprite;

  constructor() { }

  ngOnInit() {
  }

}
