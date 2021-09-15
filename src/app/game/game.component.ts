import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';

interface Board {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-game',
  templateUrl: `./game.component.html`,
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  userName = '';
  boardSize = '';
  player: any = '';

  boardCreated = true;
  boards: Board[] = [
    { value: 2, viewValue: '2X2' },
    { value: 4, viewValue: '4X4' },
    { value: 6, viewValue: '6X6' },
  ];

  constructor() {}

  ngOnInit(): void {}

  createBoard(name: string, board: string) {
    // console.log(name, board);
    this.boardCreated = true;
    this.player = new Player(name, board);
    console.log(this.player);
  }
}
