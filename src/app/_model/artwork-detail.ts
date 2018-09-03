export class ArtworkDetail {
  position: string;
  combo_a: string;
  combo_b: string;
  combo_c: string;
  combo_d: string;
  combo_e: string;

  constructor(
    position: string,
    combo_a: string,
    combo_b: string,
    combo_c: string,
    combo_d: string,
    combo_e: string
  ) {
    this.position = position;
    this.combo_a = combo_a;
    this.combo_b = combo_b;
    this.combo_c = combo_c;
    this.combo_d = combo_d;
    this.combo_e = combo_e;
  }
}
