import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ArtworkDataService } from '../service/artwork-data.service';
import { SampleCardDetails } from '../../_model/sample-card-details';
import { SampleCards } from '../../_model/sample-cards';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  artwork_id: string;
  beams: any[];
  cuts: any[];
  constructor(
    private artworkDataService: ArtworkDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  artworks: any[];
  cols: any[];
  cardDetails: SampleCardDetails[];
  sampleCardForm: FormGroup;
  editSampleCard: SampleCards;
  date: Date;
  serverDate: Date;
  ngOnInit() {
    this.editSampleCard = new SampleCards();
    this.beams = [
      {name: 'Black', value: 0},
      {name: 'White', value: 1},
    ];
    this.cuts = [
      {name: 'MUSONIC', value: 1},
      {name: 'STRAIGHT CUT', value: 2},
      {name: 'END FOLD', value: 3},
      {name: 'CENTER FOLD', value: 4},
      {name: 'DIAGONAL CUT', value: 5},
      {name: 'BOOK FOLD', value: 6},
    ];
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
      beam: new FormControl(null, Validators.required),
      cut_id: new FormControl(null, Validators.required),
      filename: new FormControl(null, Validators.required),
      artwork_id: new FormControl(null, Validators.required),
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
    this.artwork_id = event.id;
    this.clientName = event.client_name;
    this.combos = event.combos;
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
      this.sampleCardForm.value['beam'].value,
      this.sampleCardForm.value['cut_id'].value,
      this.sampleCardForm.value['filename'],
      this.artwork_id,
      this.cardDetails
    );
    console.log(sampleCards);
    this.artworkDataService.store(sampleCards).subscribe(response => {
      console.log(response);
    });
  }
}
