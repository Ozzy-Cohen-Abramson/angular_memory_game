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
  displayArr: any = [];
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

      localStorage.setItem(
        'smallBoardScore',
        JSON.stringify(this.smallScoreArr)
      );

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

    this.sortArr(this.smallScoreArr);
  }

  containsObjects(obj: any, list: any) {
    if (list.length === 0) {
      this.smallScoreArr.push(this.userScore);
    }
  }

  checkIfExist() {
    for (let i = 0; i < this.smallScoreArr.length; ++i) {
      if (this.smallScoreArr[i].Date === this.userScore.Date) {
        return;
      }
    }
    for (let i = 0; i < this.smallScoreArr.length; ++i) {
      if (this.smallScoreArr[i].Date !== this.userScore.Date) {
        console.log('object');
        return this.smallScoreArr.push(this.userScore);
      }
    }
  }

  sortArr(scoreList: any) {
    scoreList.sort(function (a: any, b: any) {
      return a.Score - b.Score;
    });
    this.setDisplayTable(scoreList);
  }

  setDisplayTable(scoreList: any) {
    const { displayArr } = this;
    const { userScore } = this;
    // console.log(scoreList);
    if (scoreList.length > 5) {
      for (let i = 0; i < 5; ++i) {
        displayArr.push(scoreList[i]);
      }
      if (!displayArr.filter((row: any) => row === userScore.Date).length) {
        if (this.userScore.BoardSize === 2) {
          displayArr.push(userScore);
        }
      }
    } else {
      this.displayArr = scoreList;
    }
    console.log(displayArr);
  }
}
