import { Player } from './player';
import { ICard } from './card';

describe('Player', () => {
  let player: Player;
  let mockCard: ICard;

  beforeEach(() => {
    mockCard = { id: '1', name: 'Test Card', cost: 1, power: 1, toughness: 1, abilities: ['Test Ability'] };
    player = new Player('1', 'Test Player', [mockCard]);
  });

  it('should create an instance', () => {
    expect(player).toBeTruthy();
  });

  it('should draw a card', () => {
    player.drawCard();
    expect(player.hand.length).toBe(1);
    expect(player.deck.length).toBe(0);
  });

  it('should play a card', () => {
    player.drawCard();
    player.playCard('1');
    expect(player.hand.length).toBe(0);
  });
});
