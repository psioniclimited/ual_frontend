import {Position} from './position';

export class Artwork {
  reference_number: string;
  client_name: string;
  division: string;
  date: string;
  description: string;
  note: string;
  artwork_images: any[];
  positions: Position[];

  constructor(
    reference_number: string = '',
    client_name: string = '',
    division: string = '',
    date: string = '',
    description: string = '',
    note: string = '',
    artwork_images: any[] = [],
    positions: Position[] = []
  ) {
    this.reference_number = reference_number;
    this.client_name = client_name;
    this.division = division;
    this.date = date;
    this.description = description;
    this.note = note;
    this.artwork_images = artwork_images;
    this.positions = positions;
  }
}
