import { Component, OnInit } from '@angular/core';

interface Food {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-game',
  templateUrl: `./game.component.html`,
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  boards: Food[] = [
    { value: 2, viewValue: '2X2' },
    { value: 4, viewValue: '4X4' },
    { value: 6, viewValue: '6X6' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
