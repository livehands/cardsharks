import { CardModel } from './card.model';

export class DeckModel {

  suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  ranks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  deck: CardModel[];

  constructor() {
    this.deck = this.initDeck();
  }

  initDeck(): CardModel[] {
    const d = [];
    let card: CardModel;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 13; j++) {
        card = new CardModel(this.suits[i], this.ranks[j], j + 1);
        d.push(card);
      }
    }

    return d;
  }

  shuffle(): CardModel[] {

    const shuffledDeck = [];
    let card: CardModel;
    let key;
    const completedDeck = [];

    while (shuffledDeck.length < 52) {
      key = Math.floor((Math.random() * 52) + 1);
      if (!shuffledDeck[key]) {
        card = this.deck[key];
        shuffledDeck[key] = card;
      }
    }

    shuffledDeck.forEach(c => {
      completedDeck.push(c);
    });

    return completedDeck;
  }
}
