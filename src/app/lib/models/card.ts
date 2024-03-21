export interface ICard {
  id: string;
  name: string;
  cost: number;
  power: number;
  toughness: number;
  abilities: string[];
}

export class Card implements ICard {
  constructor(
    public id: string,
    public name: string,
    public cost: number,
    public power: number,
    public toughness: number,
    public abilities: string[]
  ) {}
}
