import { Player } from '@angular/core/src/render3/interfaces/player';

export class GameModel {

  player: Player;
  score: number;
  highScore: number;

  constructor(player?: Player, score?: number, highScore?: number) {
    this.highScore = highScore;
    this.score = score;
    this.player = player;
  }

}
