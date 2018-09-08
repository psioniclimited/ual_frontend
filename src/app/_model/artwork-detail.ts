export class ArtworkDetail {
  position: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;

  constructor(
    position: string = '',
    a: string = '',
    b: string = '',
    c: string = '',
    d: string = '',
    e: string = ''
  ) {
    this.position = position;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
  }
}
