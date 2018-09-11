import { Combo } from './combo';

export class Position {
  name: string;
  combos: Combo[];
  constructor(
    name: string = 'A',
    combos: Combo[] = [
      new Combo('red', 'blue'),
      new Combo('white', 'gold'),
      new Combo('', ''),
      new Combo('', ''),
      new Combo('', ''),
    ]) {
    this.name = name;
    this.combos = combos;
  }
}
