import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ArtworkDataService } from '../service/artwork-data.service';

@Component({
  selector: 'app-sample-card-form',
  templateUrl: './sample-card-form.component.html',
  styleUrls: ['./sample-card-form.component.scss']
})
export class SampleCardFormComponent implements OnInit {
  clientName = '';
  combos: any[];
  constructor(private artworkDataService: ArtworkDataService) {}
  artworks: any[];

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
  }
}
