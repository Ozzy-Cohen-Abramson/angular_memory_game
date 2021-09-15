import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export interface CardData {
  breed: string;
  imageId: string;
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none',
        })
      ),
      state(
        'flipped',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('200ms')]),
    ]),
  ],
})
export class GameCardComponent implements OnInit {
  data: CardData = {
    breed: 'bouvier',
    imageId: 'n02106382_2715',
    state: 'default',
  };
  constructor() {}

  ngOnInit(): void {}

  cardClicked() {
    if (this.data.state === 'default') {
      this.data.state = 'flipped';
    }
  }

  showDetails() {
    console.log(this.data.breed);
  }
  // fetch random dog images
  // https://dog.ceo/api/breeds/image/random/4
}
