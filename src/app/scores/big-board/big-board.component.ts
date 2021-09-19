import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-board',
  templateUrl: './big-board.component.html',
  styleUrls: ['./big-board.component.css'],
})
export class BigBoardComponent implements OnInit {
  userScore: any;
  bigScoreLocal: any = [];

  bigScoreArr: any = [];
  constructor() {}

  ngOnInit(): void {
    this.userScore = JSON.parse(localStorage.getItem('UserAll') || '{}');
    if (this.userScore.BoardSize === 18) {
      this.bigScoreArr = JSON.parse(
        localStorage.getItem('bigBoardScore') || '[]'
      );
      this.containsObject(this.userScore, this.bigScoreArr);

      localStorage.setItem('bigBoardScore', JSON.stringify(this.bigScoreArr));
      let i;

      for (i = 0; i < this.bigScoreArr.length; ++i) {
        if (this.bigScoreArr[i].Date === this.userScore.Date) {
          return console.log(this.bigScoreArr[i].Date === this.userScore.Date);
        }
      }
      i = 0;
      for (i = 0; i < this.bigScoreArr.length; ++i) {
        if (this.bigScoreArr[i].Score < this.userScore.Score) {
          return this.bigScoreArr.push(this.userScore);
        } else {
          return this.bigScoreArr.unshift(this.userScore);
        }
      }
    }
    if (this.userScore.BoardSize !== 18) {
      this.bigScoreArr = JSON.parse(
        localStorage.getItem('bigBoardScore') || '[]'
      );
    }

    this.sortArr();
  }

  containsObject(obj: any, list: any) {
    if (list.length === 0) {
      return this.bigScoreArr.push(this.userScore);
    }
    this.sortArr();
  }

  sortArr() {
    this.bigScoreArr.sort(function (a: any, b: any) {
      return a.Score - b.Score;
    });
  }
}
