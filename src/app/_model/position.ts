import { Combo } from './combo';

export class Position {
  name: string;
  combos: Combo[];
  constructor(
    name: string = 'A',
    combos: Combo[] = [
      new Combo('a', 'blue'),
      new Combo('b', 'gold'),
      new Combo('c', ''),
      new Combo('d', ''),
      new Combo('e', ''),
    ]) {
    this.name = name;
    this.combos = combos;
  }
}
