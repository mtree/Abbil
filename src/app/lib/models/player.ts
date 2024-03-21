import { ICard } from './card';

export interface IPlayer {
  id: string;
  name: string;
  deck: ICard[];
  hand: ICard[];
  lifeTotal: number;

  drawCard(): void;
  playCard(cardId: string): void;
}

/**
 * Represents a player in the game.
 */
export class Player implements IPlayer {
  constructor(
    public id: string,
    public name: string,
    public deck: ICard[],
    public hand: ICard[] = [],
    public lifeTotal: number = 20
  ) { }

  /**
   * Draws a card from the player's deck and adds it to their hand.
   */
  drawCard(): void {
    const drawnCard = this.deck.pop();
    if (drawnCard) {
      this.hand.push(drawnCard);
    }
  }

  /**
   * Plays a card from the player's hand by removing it from the hand.
   * @param cardId
   */
  playCard(cardId: string): void {
    const cardIndex = this.hand.findIndex(card => card.id === cardId);
    if (cardIndex !== -1) {
      this.hand.splice(cardIndex, 1);
    }
  }
}
