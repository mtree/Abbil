import { Game } from './game';
import { Player } from './player';
import { Card } from './card';

describe('Game', () => {
  let game: Game;
  let player1: Player;
  let player2: Player;
  let card: Card;

  beforeEach(() => {
    card = new Card('1', 'Test Card', 1, 1, 1, ['Test Ability']);
    player1 = new Player('1', 'Player 1', [card]);
    player2 = new Player('2', 'Player 2', [card]);
    game = new Game('1', [player1, player2]);
  });

  it('should create an instance', () => {
    expect(game).toBeTruthy();
  });

  it('should advance to the next turn', () => {
    game.nextTurn();
    expect(game.turn).toBe(1);
  });

  it('should make the next player draw a card', () => {
    game.nextTurn();
    expect(player2.hand.length).toBe(1);
  });
});
