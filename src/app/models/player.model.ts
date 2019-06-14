export class PlayerModel {

  name: string;
  highscore: number;

  constructor(name?: string, highScore?: number) {
    this.name = name;
    this.highscore = highScore;
  }
}
