import { CardModel } from './card.model';

export class DeckModel {

  suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
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
    let d = this.deck;
    console.log('original Deck: ' + JSON.stringify(d));
    const shuffledDeck = [];
    let key;
    console.log(JSON.stringify(d));

    while (shuffledDeck.length < 52) {
      key = Math.floor((Math.random() * d.length) + 1);
      key--;
      console.log('key' + key + ': ' + key);
      shuffledDeck.push(d[key]);
      d.splice(key, 1);
      console.log(JSON.stringify(d));
      console.log('Dlength' + d.length);
    }

    console.log('Shuffle: ' + shuffledDeck.length + ' ' + JSON.stringify(shuffledDeck));
    return shuffledDeck;
  }
}
