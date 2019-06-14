
export class CardModel {
  constructor(suit?: string, rank?: string, value?: number) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }

  suit: string;
  rank: string;
  value: number;
}
