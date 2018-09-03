import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Artwork } from '../../_model/artwork';

@Component({
  selector: 'app-artwork-form',
  templateUrl: './artwork-form.component.html',
  styleUrls: ['./artwork-form.component.scss']
})
export class ArtworkFormComponent implements OnInit {
  division: any[];
  selectedCity: any;
  date: Date;
  cols: any[];
  artworkForm: FormGroup;
  artworkDetailForm: FormGroup;
  artworkDetails: any[];

  constructor() {
    this.division = [
      { name: 'Men', code: 'NY' },
      { name: 'Women', code: 'RM' },
      { name: 'Children', code: 'LDN' }
    ];
    this.cols = [
      { field: 'position', header: 'Position' },
      { field: 'combo_a', header: 'Combo A' },
      { field: 'combo_b', header: 'Combo B' },
      { field: 'combo_c', header: 'Combo C' },
      { field: 'combo_d', header: 'Combo D' },
      { field: 'combo_e', header: 'Combo E' }
    ];
    this.artworkDetails = [
      {
        position: 'A',
        combo_a: 'blue',
        combo_b: 'yellow',
        combo_c: 'red',
        combo_d: 'white',
        combo_e: 'black'
      },
      {
        position: 'B-Felt',
        combo_a: 'blue',
        combo_b: 'yellow',
        combo_c: 'red',
        combo_d: 'white',
        combo_e: 'black'
      },
      {
        position: 'C',
        combo_a: 'blue',
        combo_b: 'yellow',
        combo_c: 'red',
        combo_d: 'white',
        combo_e: 'black'
      }
    ];
  }

  ngOnInit() {
    this.artworkForm = new FormGroup({
      reference_num: new FormControl(null),
      client_name: new FormControl(null),
      division: new FormControl(null),
      date: new FormControl(null),
      description: new FormControl(null),
      note: new FormControl(null)
    });
  }

  onSubmit() {

    const artwork = new Artwork(
      this.artworkForm.value['reference_num'],
      this.artworkForm.value['client_name'],
      this.artworkForm.value['division'],
      this.artworkForm.value['date'],
      this.artworkForm.value['description'],
      this.artworkForm.value['note'],
      this.artworkDetails
    );

    console.log(artwork);
  }
}
