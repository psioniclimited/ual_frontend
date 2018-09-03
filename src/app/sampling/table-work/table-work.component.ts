import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-work',
  templateUrl: './table-work.component.html',
  styleUrls: ['./table-work.component.scss']
})
export class TableWorkComponent implements OnInit {
  cols: any[];
  artworkDetails: any[];
  constructor() {
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

  addPosition(event) {
    this.artworkDetails.push({
      position: 'New Position',
      combo_a: 'New Combo ?',
      combo_b: 'New Combo ?',
      combo_c: 'New Combo ?',
      combo_d: 'New Combo ?',
      combo_e: 'New Combo ?'
    });
  }

  onSubmit($event) {
    console.log(this.artworkDetails);
  }

  onDelete(index) {
    this.artworkDetails.splice(index, 1);
  }

  ngOnInit() {}
}
