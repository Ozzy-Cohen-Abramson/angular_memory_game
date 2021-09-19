import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  seconds: number = 0;
  minutes: number = 0;
  date: any;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.date = new Date();
      localStorage.setItem('StartTime', JSON.stringify(this.date.getTime()));

      setInterval(() => {
        this.seconds += 1;
        if (this.seconds % 60 === 0) {
          this.seconds = 0;
          this.minutes += 1;
        }
      }, 1000);
    }, 4000);
  }
}
