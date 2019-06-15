import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { PlayerModel } from 'src/app/models/player.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  currentCard: CardModel;
  player: PlayerModel;
  highScore: number;
  gameOver: boolean;
  score: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.player = JSON.parse(localStorage.getItem('player'));
    this.highScore = JSON.parse(localStorage.getItem('highScore'));
    this.currentCard = new CardModel('clubs', 'K', 12);
  }

  checkGame(guess: string) {

  }

  quitGame() {
    localStorage.removeItem('player');
    this.router.navigate(['/start']);
  }

  newGame() {
    const highScore: number = JSON.parse(localStorage.getItem('highscore'));
    if (highScore < this.score) {
      localStorage.setItem('highscore', JSON.stringify(this.score));
    }

    this.score = 0;
    // Shuffle Deck...Start again...

    this.gameOver = false;
  }

}
