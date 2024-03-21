import { IPlayer, Player } from './player';

export interface IGame {
  id: string;
  players: IPlayer[];
  turn: number;

  nextTurn(): void;
}

/**
 * Represents a game.
 */
export class Game implements IGame {
  constructor(
    public id: string,
    public players: Player[],
    public turn: number = 0
  ) { }

  /**
   * Advances the game to the next turn.
   * This method increments the turn number and triggers the drawCard method for the next player.
   */
  nextTurn(): void {
    this.turn++;

    this.players[this.turn % this.players.length].drawCard();
  }
}
