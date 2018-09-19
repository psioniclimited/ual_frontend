import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ArtworkDataService } from '../service/artwork-data.service';
import { environment } from '../../../environments/environment';
import { SampleCardDetails } from '../../_model/sample-card-details';
import {SampleCards} from '../../_model/sample-cards';

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
  cardDetails: SampleCardDetails[];
  sampleCardForm: FormGroup;
  editSampleCard: SampleCards;
  ngOnInit() {
    this.editSampleCard = new SampleCards();
    this.items = [
      {
        label: 'Woven Label',
        icon: 'fa fa-fw fa-bar-chart',
        routerLink: '/artwork/create'
      }
    ];
    this.cols = [
      { field: 'serial', header: 'Serial' },
      { field: 'colour', header: 'Colour' },
      { field: 'art', header: 'Art #' },
      { field: 'dan', header: 'DAN' }
    ];
    this.cardDetails = [
      new SampleCardDetails('1', '#fff', 'art', 'testing'),
      new SampleCardDetails('2', '#fff', 'art', 'testing'),
      new SampleCardDetails('3', '#fff', 'art', 'testing'),
      new SampleCardDetails('4', '#fff', 'art', 'testing'),
      new SampleCardDetails('5', '#fff', 'art', 'testing'),
      new SampleCardDetails('6', '#fff', 'art', 'testing'),
      new SampleCardDetails('7', '#fff', 'art', 'testing')
    ];
    this.initForm();
  }

  initForm() {
    this.sampleCardForm = new FormGroup({
      artwork_id: new FormControl(null),
      picks: new FormControl(null),
      repeats: new FormControl(null),
      width: new FormControl(null),
      length: new FormControl(null),
      ttl_picks: new FormControl(null),
      description: new FormControl(null),
      date: new FormControl(null),
      note: new FormControl(null),
      sampleCardDetails: new FormControl(null)
    });
  }

  filterArtwork(event) {
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
    this.artworkImageUrl = environment.api_url + '/artwork_image/' + id;
  }

  onSubmit() {

  }
}
