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
  artwork_id: string;
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
    artwork_id: string = '',
    sampleCardDetails: SampleCardDetails[] = []
  ) {
    this.picks = picks;
    this.repeats = repeats;
    this.width = width;
    this.length = length;
    this.ttl_picks = ttl_picks;
    this.description = description;
    this.date = date;
    this.note = note;
    this.artwork_id = artwork_id;
    this.sampleCardDetails = sampleCardDetails;
  }
}
