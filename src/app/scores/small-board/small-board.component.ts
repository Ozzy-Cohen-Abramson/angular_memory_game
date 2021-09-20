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
    this.smallScoreLocal = JSON.parse(
      localStorage.getItem('smallBoardScore') || '[]'
    );
    this.userScore = JSON.parse(localStorage.getItem('UserAll') || '{}');
    if (this.smallScoreLocal.length) {
      this.smallScoreArr = JSON.parse(
        localStorage.getItem('smallBoardScore') || '[]'
      );
    }
    if (this.userScore.BoardSize === 2) {
      this.containsObjects(this.userScore, this.smallScoreArr);
      console.log(this.smallScoreArr);

      localStorage.setItem(
        'smallBoardScore',
        JSON.stringify(this.smallScoreArr)
      );
      console.log(this.smallScoreLocal.length);

      this.checkIfExist();

      localStorage.setItem(
        'smallBoardScore',
        JSON.stringify(this.smallScoreArr)
      );
    }
    if (this.userScore.BoardSize !== 2) {
      this.smallScoreArr = JSON.parse(
        localStorage.getItem('smallBoardScore') || '[]'
      );
    }

    this.sortArr();
  }

  containsObjects(obj: any, list: any) {
    if (list.length === 0) {
      this.smallScoreArr.push(this.userScore);
    }
  }

  checkIfExist() {
    for (let i = 0; i < this.smallScoreArr.length; ++i) {
      if (this.smallScoreArr[i].Date === this.userScore.Date) {
        return console.log('Already in the list!');
      }
    }
    for (let i = 0; i < this.smallScoreArr.length; ++i) {
      console.log(this.smallScoreArr.length);
      if (this.smallScoreArr[i].Date !== this.userScore.Date) {
        return this.smallScoreArr.push(this.userScore);
      }
    }
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
