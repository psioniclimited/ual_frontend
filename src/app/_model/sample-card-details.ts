export class SampleCardDetails {
  sn: string;
  name: string;
  color: string;
  art: string;
  dan: string;

  constructor(
    sn: string = '',
    name: string = '',
    color: string = '',
    art: string = '',
    dan: string = ''
  ) {
    this.sn = sn;
    this.name = name;
    this.color = color;
    this.art = art;
    this.dan = dan;
  }
}
