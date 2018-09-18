import { SampleCardDetails } from './sample-card-details';

export class SampleCards {
  picks: string;
  repeats: string;
  width: string;
  length: string;
  ttl_picks: string;
  description: string;
  date: string;
  note: string;
  sampleCardDetails: SampleCardDetails[];
  constructor(
    picks: string = '',
    repeats: string = '',
    width: string = '',
    length: string = '',
    ttl_picks: string = '',
    description: string = '',
    date: string = '',
    note: string = '',
    sampleCardDetails: SampleCardDetails[] = [
      new SampleCardDetails('1', '#fff', 'art', 'testing'),
      new SampleCardDetails('2', '#fff', 'art', 'testing'),
      new SampleCardDetails('3', '#fff', 'art', 'testing'),
      new SampleCardDetails('4', '#fff', 'art', 'testing'),
      new SampleCardDetails('5', '#fff', 'art', 'testing'),
      new SampleCardDetails('6', '#fff', 'art', 'testing'),
      new SampleCardDetails('7', '#fff', 'art', 'testing')
    ]
  ) {
    this.picks = picks;
    this.repeats = repeats;
    this.width = width;
    this.length = length;
    this.ttl_picks = ttl_picks;
    this.description = description;
    this.date = date;
    this.note = note;
    this.sampleCardDetails = sampleCardDetails;
  }
}
