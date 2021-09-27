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
  boardSize: any = 4;
  player: any = '';

  boardCreated = false;

  // loop over this!

  boards: Board[] = [
    { value: 2, viewValue: '2X2' },
    { value: 8, viewValue: '4X4' },
    { value: 18, viewValue: '6X6' },
  ];

  constructor() {}

  ngOnInit(): void {}

  createBoard(name: string, board: string) {
    this.boardCreated = true;
    this.boardSize = parseInt(board);
    this.player = new Player(name, this.boardSize);
  }
}
