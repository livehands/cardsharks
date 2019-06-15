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
    let d: CardModel[] = this.initDeck();

    const shuffledDeck = [];
    let key;

    while (shuffledDeck.length < 52) {
      key = Math.floor((Math.random() * d.length));
      console.log('key' + key + ': ' + key);
      shuffledDeck.push(d[key]);
      d.splice(key);
    }

    console.log('Shuffle: ' + shuffledDeck.length + ' ' + JSON.stringify(shuffledDeck));
    return shuffledDeck;
  }
}
