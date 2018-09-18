import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ArtworkDataService } from '../service/artwork-data.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-sample-card-form',
  templateUrl: './sample-card-form.component.html',
  styleUrls: ['./sample-card-form.component.scss']
})
export class SampleCardFormComponent implements OnInit {
  clientName = '';
  combos: any[];
  artworkImageUrl: string;
  constructor(private artworkDataService: ArtworkDataService) {}
  artworks: any[];
  artworkImages: any[];
  ngOnInit() {}

  filterArtwork(event) {
    console.log(event.query);
    // this.artworkData = [];
    this.artworkDataService.index(event).subscribe(
      data => {
        this.artworks = data.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  selectArtwork(event) {
    this.clientName = event.client_name;
    this.combos = event.combos;
    console.log(event);
    this.artworkImages = event.artwork_images;
    console.log(this.artworkImages);
    // this.artworkImageUrl =  environment.api_url + '/artwork_image/' + id;
  }
  showArtworkImage(id: number) {
    console.log(id);
    this.artworkImageUrl =  environment.api_url + '/artwork_image/' + id;
  }
}
