import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-board',
  templateUrl: './medium-board.component.html',
  styleUrls: ['./medium-board.component.css'],
})
export class MediumBoardComponent implements OnInit {
  userScore: any;
  mediumScoreLocal: any = [];

  mediumScoreArr: any = [];
  constructor() {}

  ngOnInit(): void {
    this.mediumScoreLocal = JSON.parse(
      localStorage.getItem('mediumBoardScore') || '[]'
    );
    this.userScore = JSON.parse(localStorage.getItem('UserAll') || '{}');
    if (this.mediumScoreLocal.length) {
      this.mediumScoreArr = JSON.parse(
        localStorage.getItem('mediumBoardScore') || '[]'
      );
    }
    if (this.userScore.BoardSize === 8) {
      this.containsObjects(this.userScore, this.mediumScoreArr);
      console.log(this.mediumScoreArr);

      localStorage.setItem(
        'mediumBoardScore',
        JSON.stringify(this.mediumScoreArr)
      );
      console.log(this.mediumScoreLocal.length);

      this.checkIfExist();

      localStorage.setItem(
        'mediumBoardScore',
        JSON.stringify(this.mediumScoreArr)
      );
    }
    if (this.userScore.BoardSize !== 8) {
      this.mediumScoreArr = JSON.parse(
        localStorage.getItem('mediumBoardScore') || '[]'
      );
    }

    this.sortArr();
  }

  containsObjects(obj: any, list: any) {
    if (list.length === 0) {
      this.mediumScoreArr.push(this.userScore);
    }
  }

  checkIfExist() {
    for (let i = 0; i < this.mediumScoreArr.length; ++i) {
      if (this.mediumScoreArr[i].Date === this.userScore.Date) {
        return console.log('Already in the list!');
      }
    }
    for (let i = 0; i < this.mediumScoreArr.length; ++i) {
      console.log(this.mediumScoreArr.length);
      if (this.mediumScoreArr[i].Date !== this.userScore.Date) {
        return this.mediumScoreArr.push(this.userScore);
      }
    }
  }

  sortArr() {
    this.mediumScoreArr = JSON.parse(
      localStorage.getItem('mediumBoardScore') || '[]'
    );
    this.mediumScoreArr.sort(function (a: any, b: any) {
      return a.Score - b.Score;
    });
  }
}
