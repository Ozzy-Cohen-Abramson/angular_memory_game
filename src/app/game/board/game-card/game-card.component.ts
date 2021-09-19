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
          transition: 'all 0.3s ease',
          border: '5px solid transparent',
        })
      ),
      state(
        'matched',

        style({
          transform: 'perspective(600px) rotateY(180deg)',
          transition: 'all 0.3s ease',
          border: '5px solid transparent',
        })
      ),
      state(
        'not-matched',

        style({
          transform: 'perspective(600px) rotateY(180deg)',
          border: '5px solid red',
          transition: 'all 0.3s ease',
        })
      ),
      state(
        'green-match',

        style({
          transform: 'perspective(600px) rotateY(180deg)',
          transition: 'all 0.3s ease',
          border: '5px solid green',
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

  ngOnInit(): void {
    if (this.data.breed.includes('-')) {
      this.data.breed = this.data.breed.split('-')[0];
    }
  }

  showDetails() {
    console.log(this.data.breed);
  }
}
