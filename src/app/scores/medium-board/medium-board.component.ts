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
    this.userScore = JSON.parse(localStorage.getItem('UserAll') || '{}');
    if (this.userScore.BoardSize === 8) {
      this.mediumScoreArr = JSON.parse(
        localStorage.getItem('mediumBoardScore') || '[]'
      );
      this.containsObject(this.userScore, this.mediumScoreArr);

      localStorage.setItem(
        'mediumBoardScore',
        JSON.stringify(this.mediumScoreArr)
      );
      let i;

      for (i = 0; i < this.mediumScoreArr.length; ++i) {
        if (this.mediumScoreArr[i].Date === this.userScore.Date) {
          return console.log(
            this.mediumScoreArr[i].Date === this.userScore.Date
          );
        }
      }
      i = 0;
      for (i = 0; i < this.mediumScoreArr.length; ++i) {
        if (this.mediumScoreArr[i].Score < this.userScore.Score) {
          return this.mediumScoreArr.push(this.userScore);
        } else {
          return this.mediumScoreArr.unshift(this.userScore);
        }
      }
    }
    if (this.userScore.BoardSize !== 8) {
      this.mediumScoreArr = JSON.parse(
        localStorage.getItem('mediumBoardScore') || '[]'
      );
    }
  }

  containsObject(obj: any, list: any) {
    if (list.length === 0) {
      return this.mediumScoreArr.push(this.userScore);
    }
  }
}
