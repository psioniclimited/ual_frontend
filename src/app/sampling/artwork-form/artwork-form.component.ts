import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-artwork-form',
  templateUrl: './artwork-form.component.html',
  styleUrls: ['./artwork-form.component.scss']
})
export class ArtworkFormComponent implements OnInit {
  cities: any[];
  cars: any[];
  selectedCity: any;
  date: Date;

  artworkForm: FormGroup;
  artworkDetailForm: FormGroup;
  artworkDetails: any[];

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.cars = [{ position: 'Hello', ComboA: 'hello' }];
    this.artworkDetails = [
      {
        position: 'A',
        combos: {
          'Combo A': 'red',
          'Combo B': 'blue'
        }
      },
      {
        position: 'B-Felt',
        combos: {
          'Combo A': 'green',
          'Combo B': 'gold'
        }
      }
    ];
  }

  ngOnInit() {
    this.artworkForm = new FormGroup({
      reference_num: new FormControl(null),
      client_name: new FormControl(null),
      selectedCity: new FormControl(null),
      date: new FormControl(null),
      description: new FormControl(null),
      artworkDetails: new FormGroup({})
    });
  }

  addCombo() {
    this.artworkDetails.forEach(function(artworkDetail) {
      const combo_name =
        'Combo ' +
        String.fromCharCode(65 + Object.keys(artworkDetail.combos).length);
      artworkDetail.combos[combo_name] = '';
    });
  }
}
