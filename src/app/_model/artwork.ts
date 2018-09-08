import { ArtworkDetail } from './artwork-detail';

export class Artwork {
  reference_number: string;
  client_name: string;
  division: string;
  date: string;
  description: string;
  note: string;
  artwork_images: any[];
  artworkDetails: ArtworkDetail[];

  constructor(
    reference_number: string = '',
    client_name: string = '',
    division: string = '',
    date: string = '',
    description: string = '',
    note: string = '',
    artwork_images: any[] = [],
    artworkDetails: ArtworkDetail[] = []
  ) {
    this.reference_number = reference_number;
    this.client_name = client_name;
    this.division = division;
    this.date = date;
    this.description = description;
    this.note = note;
    this.artwork_images = artwork_images;
    this.artworkDetails = artworkDetails;
  }
}
