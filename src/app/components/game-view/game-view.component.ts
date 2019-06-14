import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { PlayerModel } from 'src/app/models/player.model';


@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  currentCard: CardModel;
  player: PlayerModel;
  highScore: number;

  constructor() { }

  ngOnInit() {
    this.player = JSON.parse(localStorage.getItem('player'));
    this.highScore = JSON.parse(localStorage.getItem('highScore'));
    this.currentCard = new CardModel('clubs', 'K', 12);
  }

}
