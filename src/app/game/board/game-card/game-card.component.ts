import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardData } from '../card-data.model';

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
          transform: 'perspective(600px) rotateY(180deg)',
        })
      ),
      state(
        'matched',

        style({
          transform: 'perspective(600px) rotateY(180deg)',
        })
      ),
      state(
        'not-matched',

        style({
          transform: 'perspective(600px) rotateY(180deg)',
          border: '1px solid red',
        })
      ),
      state(
        'green-match',

        style({
          transform: 'perspective(600px) rotateY(180deg)',
          border: '1px solid green',
        })
      ),
      transition('default => flipped', [animate('400ms')]),
      transition('not-matched => default', [animate('400ms')]),
      transition('* => matched', [animate('400ms')]),
    ]),
  ],
})
export class GameCardComponent implements OnInit {
  @Input() data!: CardData;

  @Output() cardClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // cardClicked() {
  //   if (this.data.state === 'default') {
  //     this.data.state = 'flipped';
  //   }
  // }

  showDetails() {
    console.log(this.data.breed);
  }
}