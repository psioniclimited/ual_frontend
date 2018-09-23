import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ArtworkDataService } from '../service/artwork-data.service';
import { environment } from '../../../environments/environment';
import { SampleCardDetails } from '../../_model/sample-card-details';
import {SampleCards} from '../../_model/sample-cards';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-sample-card-form',
  templateUrl: './sample-card-form.component.html',
  styleUrls: ['./sample-card-form.component.scss']
})
export class SampleCardFormComponent implements OnInit {
  id: number;
  items: MenuItem[];
  clientName = '';
  combos: any[];
  artworkImageUrl: string;
  constructor(private artworkDataService: ArtworkDataService,
              private route: ActivatedRoute,
              private router: Router) {}
  artworks: any[];
  artworkImages: any[];
  cols: any[];
  cardDetails: SampleCardDetails[];
  sampleCardForm: FormGroup;
  editSampleCard: SampleCards;
  date: Date;
  serverDate: Date;
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
      new SampleCardDetails('1', '', '', ''),
      new SampleCardDetails('2', '', '', ''),
      new SampleCardDetails('3', '', '', ''),
      new SampleCardDetails('4', '', '', ''),
      new SampleCardDetails('5', '', '', ''),
      new SampleCardDetails('6', '', '', ''),
      new SampleCardDetails('7', '', '', '')
    ];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.initForm();
  }

  initForm() {
    this.sampleCardForm = new FormGroup({
      combo_id: new FormControl(null, Validators.required),
      picks: new FormControl(null, Validators.required),
      repeats: new FormControl(null, Validators.required),
      width: new FormControl(null, Validators.required),
      length: new FormControl(null, Validators.required),
      ttl_picks: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      note: new FormControl(null, Validators.required),
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
    const sampleCards = new SampleCards(
      this.sampleCardForm.value['picks'],
      this.sampleCardForm.value['repeats'],
      this.sampleCardForm.value['width'],
      this.sampleCardForm.value['length'],
      this.sampleCardForm.value['ttl_picks'],
      this.sampleCardForm.value['description'],
      this.sampleCardForm.value['date'],
      this.sampleCardForm.value['note'],
      this.sampleCardForm.value['combo_id'].id,
      this.cardDetails
    );
    // console.log(this.sampleCardForm.value['combo_id'].id);
    this.artworkDataService.store(sampleCards).subscribe(response => {
      console.log(response);
    });
  }
}
