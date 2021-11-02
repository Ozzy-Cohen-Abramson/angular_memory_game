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
  displayArr: any = [];
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

      localStorage.setItem('bigBoardScore', JSON.stringify(this.bigScoreArr));

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
        return;
      }
    }
    for (let i = 0; i < this.bigScoreArr.length; ++i) {
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
    this.setDisplayTable();
  }

  setDisplayTable() {
    const { displayArr } = this;
    const { userScore } = this;
    const { bigScoreArr } = this;
    if (bigScoreArr.length > 5) {
      for (let i = 0; i < 5; ++i) {
        displayArr.push(bigScoreArr[i]);
      }
      if (!displayArr.filter((row: any) => row === userScore.Date).length) {
        if (this.userScore.BoardSize === 8) {
          displayArr.push(userScore);
        }
      }
    }
  }
}
