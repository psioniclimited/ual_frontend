export class SampleCardDetails {
  sn: string;
  color: string;
  art: string;
  dan: string;

  constructor(
    sn: string = '',
    color: string = '',
    art: string = '',
    dan: string = ''
  ) {
    this.sn = sn;
    this.color = color;
    this.art = art;
    this.dan = dan;
  }
}
