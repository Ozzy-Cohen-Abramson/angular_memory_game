import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-board',
  templateUrl: './small-board.component.html',
  styleUrls: ['./small-board.component.css'],
})
export class SmallBoardComponent implements OnInit {
  userScore: any;
  smallScoreLocal: any = [];

  smallScoreArr: any = [];
  constructor() {}

  ngOnInit(): void {
    this.userScore = JSON.parse(localStorage.getItem('UserAll') || '{}');
    if (this.userScore.BoardSize === 2) {
      this.smallScoreArr = JSON.parse(
        localStorage.getItem('smallBoardScore') || '[]'
      );
      this.containsObject(this.userScore, this.smallScoreArr);

      localStorage.setItem(
        'smallBoardScore',
        JSON.stringify(this.smallScoreArr)
      );
      let i;

      for (i = 0; i < this.smallScoreArr.length; ++i) {
        if (this.smallScoreArr[i].Date === this.userScore.Date) {
          return console.log(
            this.smallScoreArr[i].Date === this.userScore.Date
          );
        }
      }
      i = 0;
      for (i = 0; i < this.smallScoreArr.length; ++i) {
        if (this.smallScoreArr[i].Score < this.userScore.Score) {
          return this.smallScoreArr.push(this.userScore);
        } else {
          return this.smallScoreArr.unshift(this.userScore);
        }
      }
    }
    if (this.userScore.BoardSize !== 2) {
      this.smallScoreArr = JSON.parse(
        localStorage.getItem('smallBoardScore') || '[]'
      );
    }
    this.sortArr();
  }

  containsObject(obj: any, list: any) {
    if (list.length === 0) {
      return this.smallScoreArr.push(this.userScore);
    }
    this.sortArr();
  }
  sortArr() {
    this.smallScoreArr = JSON.parse(
      localStorage.getItem('smallBoardScore') || '[]'
    );
    this.smallScoreArr.sort(function (a: any, b: any) {
      return a.Score - b.Score;
    });
  }
}
