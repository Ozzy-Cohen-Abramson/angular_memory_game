import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  seconds: number = 0;
  // minutes: number = 0;
  constructor() {}

  ngOnInit(): void {
    const obs$ = interval(1000);
    obs$.subscribe((d) => {
      this.seconds = d;
      // if (this.seconds % 60 === 0) {
      //   d = 0;
      //   this.seconds = 0;
      //   this.minutes = this.minutes + 1;
      // }
    });
  }
}
