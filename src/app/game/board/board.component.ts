import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardData } from './card-data.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  cardImages = [
    'bouvier/n02106382_2715',
    'akita/Japaneseakita',
    'boxer/n02108089_3162',
    'pyrenees/n02111500_4104',
    'beagle/n02088364_12154',
    'pug/n02110958_6627',
    'dingo/n02115641_6250',
    'chow/n02112137_3523',
    'schipperke/n02104365_8919',
    'coonhound/n02089078_243',
    'pitbull/20190801_154956',
    'entlebucher/n02108000_2065',
    'lhasa/n02098413_4100',
    'kelpie/n02105412_2301',
    'labrador/n02099712_7968',
    'labrador/n02099712_2223',
    'pyrenees/n02111500_2010',
    'pembroke/n02113023_5985',
  ];

  cards: CardData[] = [];

  flippedCards: CardData[] = [];

  matchedCount = 0;

  shuffleArray(anArray: any[]): any[] {
    return anArray
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.setupCards();
  }

  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default',
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });
    });

    this.cards = this.shuffleArray(this.cards);
  }

  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }
    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState =
        cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;

        // if (this.matchedCount === this.cardImages.length) {
        //   const dialogRef = this.dialog.open(RestartDialogComponent, {
        //     disableClose: true
        //   });

        //   dialogRef.afterClosed().subscribe(() => {
        //     this.restart();
        //   });
        // }
      }
    }, 1000);
  }
}
