import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Player } from 'src/app/shared/player.model';
import { CardData } from './card-data.model';
import * as moment from 'moment';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  animations: [
    trigger('board-size', [
      state(
        '2',
        style({
          marginTop: '70px',
          gridTemplateColumns: 'repeat(2, 10%)',
          gap: '15px',
        })
      ),
      state(
        '8',
        style({
          marginTop: '50px',
          gridTemplateColumns: 'repeat(4, 10%)',
          gap: '15px',
        })
      ),
      state(
        '18',
        style({
          gridTemplateColumns: 'repeat(9, 9%)',
          gap: '15px',
        })
      ),
    ]),
  ],
})
export class BoardComponent implements OnInit {
  @Input() player!: Player;
  @Input() data!: CardData;

  gameDate: any;
  startTime: any;
  date: any;
  counter: number = 5;
  fetchUrl: string[] = [];
  dogObj: any = {};
  cardImages: Array<any> = [];
  cardBreedFetch: string[] = [];

  cards: CardData[] = [];

  flippedCards: CardData[] = [];

  matchedCount = 0;
  mooveCount = 0;
  boardSize: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.counterDown();
    for (let i = 0; i < this.player.size; ++i) {
      this.http
        .get('https://dog.ceo/api/breeds/image/random')
        .subscribe((res: any) => {
          this.fetchUrl = res.message.split('/');
          this.dogObj = { breed: this.fetchUrl[4], image: res.message };
          this.cardBreedFetch.push(this.fetchUrl[4]);
          this.cardImages.push(this.dogObj);
        });
    }

    this.setupCards();
  }

  counterDown(): void {
    setInterval(() => {
      this.counter = this.counter - 1;
    }, 1000);
  }

  setupCards(): void {
    this.cards = [];
    setTimeout(() => {
      this.cardImages.forEach((dog) => {
        if (this.boardSize <= this.player.size) {
          this.boardSize += 1;
          const cardData: CardData = {
            breed: dog.breed,
            imageId: dog.image,
            state: 'default',
          };

          this.cards.push({ ...cardData });
          this.cards.push({ ...cardData });
        }
      });

      this.cards = this.shuffleArray(this.cards);
    }, 5000);
  }

  shuffleArray(anArray: any[]): any[] {
    return anArray
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }
    }
  }

  checkForCardMatch(): void {
    this.mooveCount += 1;
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState =
        cardOne.imageId === cardTwo.imageId ? 'flipped' : 'not-matched';
      cardOne.state = cardTwo.state = nextState;

      if (nextState === 'flipped') {
        this.flippedCards = [];

        cardOne.state = cardTwo.state = 'green-match';
        setTimeout(() => {
          cardOne.state = cardTwo.state = 'flipped';
        }, 5000);
      }
      if (nextState === 'not-matched') {
        setTimeout(() => {
          cardOne.state = cardTwo.state = 'default';
          this.flippedCards = [];
        }, 5000);
      }
      if (nextState === 'flipped') {
        this.matchedCount++;

        if (this.matchedCount === this.player.size) {
          this.date = new Date();

          this.startTime = localStorage.getItem('StartTime');
          localStorage.setItem(
            'UserAll',
            JSON.stringify({
              User: this.player.name,
              BoardSize: this.player.size,
              Moves: this.mooveCount,
              EndTime: (this.date.getTime() - this.startTime) / 1000,
              Score: Math.round(
                this.date.getTime() - this.startTime + this.mooveCount * 0.5
              ),

              Date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            })
          );
          setTimeout(() => {
            window.location.href = 'http://localhost:4200/scores';
          }, 1000);
        }
      }
    }, 1000);
  }
}
