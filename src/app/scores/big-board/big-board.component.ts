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
    this.bigScoreLocal = JSON.parse(
      localStorage.getItem('bigBoardScore') || '[]'
    );
    this.userScore = JSON.parse(localStorage.getItem('UserAll') || '{}');
    if (this.bigScoreLocal.length) {
      this.bigScoreArr = JSON.parse(
        localStorage.getItem('bigBoardScore') || '[]'
      );
    }
    if (this.userScore.BoardSize === 18) {
      this.containsObjects(this.userScore, this.bigScoreArr);
      console.log(this.bigScoreArr);

      localStorage.setItem('bigBoardScore', JSON.stringify(this.bigScoreArr));
      console.log(this.bigScoreLocal.length);

      this.checkIfExist();

      localStorage.setItem('bigBoardScore', JSON.stringify(this.bigScoreArr));
    }
    if (this.userScore.BoardSize !== 18) {
      this.bigScoreArr = JSON.parse(
        localStorage.getItem('bigBoardScore') || '[]'
      );
    }

    this.sortArr();
  }

  containsObjects(obj: any, list: any) {
    if (list.length === 0) {
      this.bigScoreArr.push(this.userScore);
    }
  }

  checkIfExist() {
    for (let i = 0; i < this.bigScoreArr.length; ++i) {
      if (this.bigScoreArr[i].Date === this.userScore.Date) {
        return console.log('Already in the list!');
      }
    }
    for (let i = 0; i < this.bigScoreArr.length; ++i) {
      console.log(this.bigScoreArr.length);
      if (this.bigScoreArr[i].Date !== this.userScore.Date) {
        return this.bigScoreArr.push(this.userScore);
      }
    }
  }

  sortArr() {
    this.bigScoreArr = JSON.parse(
      localStorage.getItem('bigBoardScore') || '[]'
    );
    this.bigScoreArr.sort(function (a: any, b: any) {
      return a.Score - b.Score;
    });
  }
}
