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
  items: MenuItem[];
  clientName = '';
  combos: any[];
  artworkImageUrl: string;
  constructor(private artworkDataService: ArtworkDataService) {}
  artworks: any[];
  artworkImages: any[];
  cols: any[];
  cardDetails: any[];
  ngOnInit() {
    this.items = [
      {label: 'Woven Label', icon: 'fa fa-fw fa-bar-chart',
        routerLink: '/artwork/create'},
    ];
    this.cols = [
      { field: '', header: '' },
      { field: 'serial', header: 'Serial' },
      { field: 'colour', header: 'Colour' },
      { field: 'art', header: 'Art #' },
      { field: 'dan', header: 'DAN' }
    ];
    this.cardDetails = [
      { empty: '', serial: '1', color: '#fff', art: 'art', dan: 'testing' },
      { empty: '', serial: '2', color: '#fff', art: 'art', dan: 'testing' },
    ];
  }

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
    this.artworkImages = event.artwork_images;
  }
  showArtworkImage(id: number) {
    this.artworkImageUrl =  environment.api_url + '/artwork_image/' + id;
  }
}
