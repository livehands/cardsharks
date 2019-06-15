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

  currentCard: CardModel;
  player: PlayerModel;
  highScore: number;
  gameOver: boolean;
  score: number;
  deck: CardModel[];
  board: CardModel[];
  swapCount = 1;
  status: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.score = 0;
    this.player = JSON.parse(localStorage.getItem('player'));
    this.highScore = JSON.parse(localStorage.getItem('highScore'));
    this.deck = new DeckModel().shuffle();
    this.currentCard = this.deck[0];
    this.board = [];
    this.board.push(this.currentCard);
    this.gameOver = false;
  }

  checkGame(guess: string) {
    const nextCard = this.deck[this.board.length];

    console.log('Guess: ' + guess);
    console.log('Current: ' + JSON.stringify(this.currentCard));
    console.log('Next: ' + JSON.stringify(nextCard));
    console.log('cc: ' + this.currentCard.value + ' nc: ' + nextCard.value);

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
      case 's':
        this.currentCard = nextCard;
        this.board.pop();
        this.board.push(nextCard);
        this.swapCount--;
        this.gameOver = false;
        break;
      default:
        console.log('nothing...');
        break;
    }

    this.recordScore();
  }

  wrong() {
    this.gameOver = true;
    this.status = 'GAME OVER';
  }

  correct(nc: CardModel) {
    this.score++;
    this.gameOver = false;
    this.status = 'Correct!!';
    this.currentCard = nc;
  }

  quitGame() {
    localStorage.removeItem('player');
    this.router.navigate(['/start']);
  }

  recordScore() {
    const hs: number = JSON.parse(localStorage.getItem('highscore'));

    if (hs <= this.score) {
      this.highScore = hs;
      this.player.highscore = hs;
      localStorage.setItem('highscore', JSON.stringify(this.score));
      localStorage.setItem('player', JSON.stringify(this.player));
    }
  }
  newGame() {
    this.recordScore();

    this.score = 0;
    this.swapCount = 1;
    this.gameOver = false;
    this.deck = new DeckModel().shuffle();
    this.board = [];
    this.currentCard = this.deck[0];
    this.board.push(this.currentCard);
    console.log(this.deck.length + ' ' + JSON.stringify(this.deck));
  }

}
