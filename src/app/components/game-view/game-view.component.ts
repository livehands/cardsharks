import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { PlayerModel } from 'src/app/models/player.model';
import { Router } from '@angular/router';
import { DeckModel } from 'src/app/models/deck-model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  highScoreKey = 'highScore';
  playerKey = 'player';

  currentCard: CardModel;
  player: PlayerModel;
  highScore: number;
  gameOver: boolean;
  score: number;
  deck: CardModel[];
  board: CardModel[];
  swapCount = 1;
  status: string;
  deckCount: number; // how many cards drawn...needed for swap...

  constructor(private router: Router) { }

  ngOnInit() {
    this.score = 0;
    this.player = JSON.parse(localStorage.getItem(this.playerKey));
    const hs = JSON.parse(localStorage.getItem(this.highScoreKey));
    if (hs) {
      this.highScore = hs;
    } else {
      this.highScore = 0;
    }

    this.deck = new DeckModel().shuffle();
    this.currentCard = this.deck[0];
    this.board = [];
    this.board.push(this.currentCard);
    this.gameOver = false;
    this.deckCount = 0;
  }

  checkGame(guess: string) {
    this.deckCount++;
    const nextCard = this.deck[this.deckCount];

    switch (guess) {
      case 'l':
        this.board.push(nextCard);
        if (this.currentCard.value > nextCard.value) {
          this.correct(nextCard);
        } else {
          this.wrong();
        }

        break;
      case 'h':
        this.board.push(nextCard);
        if (this.currentCard.value < nextCard.value) {
          this.correct(nextCard);
        } else {
          this.wrong();
        }
        break;
      default:
        this.wrong();
        break;
    }

    this.recordScore();
  }

  swapCard() {
    // Increase the number of cards drawn and get the latest card
    this.deckCount++;
    const newCard = this.deck[this.deckCount];

    // Remove card from board and replace with the new card.
    this.board.pop();
    this.currentCard = newCard;
    this.board.push(newCard);
    this.swapCount--;
    this.gameOver = false;
  }
  wrong() {
    this.gameOver = true;
    this.recordScore();
    this.status = 'GAME OVER';
  }

  correct(nc: CardModel) {
    this.score++;
    this.gameOver = false;
    this.status = 'Correct!!';
    this.currentCard = nc;
  }

  quitGame() {
    localStorage.removeItem(this.playerKey);
    this.router.navigate(['/start']);
  }

  recordScore() {
    const hs: number = JSON.parse(localStorage.getItem(this.highScoreKey));

    if ((!hs) || (hs <= this.score)) {
      this.highScore = this.score;
      this.player.highscore = this.score;
      localStorage.setItem(this.highScoreKey, JSON.stringify(this.score));
      localStorage.setItem(this.playerKey, JSON.stringify(this.player));
    }
  }
  newGame() {
    this.recordScore();

    this.score = 0;
    this.swapCount = 1;
    this.deckCount = 0;
    this.gameOver = false;
    this.deck = new DeckModel().shuffle();
    this.board = [];
    this.currentCard = this.deck[this.deckCount];
    this.board.push(this.currentCard);
  }

}
