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
    { breed: 'bouvier', image: 'bouvier/n02106382_2715' },
    { breed: 'akita', image: 'akita/Japaneseakita' },
    { breed: 'boxer', image: 'boxer/n02108089_3162' },
    { breed: 'pyrenees', image: 'pyrenees/n02111500_4104' },
    { breed: 'beagle', image: 'beagle/n02088364_12154' },
    { breed: 'pug', image: 'pug/n02110958_6627' },
    { breed: 'dingo', image: 'dingo/n02115641_6250' },
    { breed: 'chow', image: 'chow/n02112137_3523' },
    { breed: 'schipperke', image: 'schipperke/n02104365_8919' },
    { breed: 'coonhound', image: 'coonhound/n02089078_243' },
    { breed: 'pitbull', image: 'pitbull/20190801_154956' },
    { breed: 'entlebucher', image: 'entlebucher/n02108000_2065' },
    { breed: 'lhasa', image: 'lhasa/n02098413_4100' },
    { breed: 'kelpie', image: 'kelpie/n02105412_2301' },
    { breed: 'labrador', image: 'labrador/n02099712_7968' },
    { breed: 'labrador', image: 'labrador/n02099712_2223' },
    { breed: 'pyrenees', image: 'pyrenees/n02111500_2010' },
    { breed: 'pembroke', image: 'pembroke/n02113023_5985' },
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
    this.cardImages.forEach((dog) => {
      const cardData: CardData = {
        breed: dog.breed,
        imageId: dog.image,
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
