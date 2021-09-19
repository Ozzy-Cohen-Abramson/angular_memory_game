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
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
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
