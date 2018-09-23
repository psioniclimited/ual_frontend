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
  combo_id: string;
  beam: string;
  cut_id: string;
  filename: string;
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
    combo_id: string = '',
    beam: string = '',
    cut_id: string = '',
    filename: string = '',
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
    this.combo_id = combo_id;
    this.beam = beam;
    this.cut_id = cut_id;
    this.filename = filename;
    this.artwork_id = artwork_id;
    this.sampleCardDetails = sampleCardDetails;
  }
}
