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
      { field: 'combo_c', header: 'Combo C' }
    ];
    this.artworkDetails = [
      {
        position: 'A',
        combo_a: 'blue',
        combo_b: 'yellow',
        combo_c: 'red'
      },
      {
        position: 'B-Felt',
        combo_a: 'blue',
        combo_b: 'yellow',
        combo_c: 'red'
      },
      {
        position: 'C',
        combo_a: 'blue',
        combo_b: 'yellow',
        combo_c: 'red'
      }
    ];
  }

  addPosition(event) {
    this.artworkDetails.push({
      position: 'New Position',
      combo_a: ' ',
      combo_b: ' ',
      combo_c: ' '
    });
  }

  onSubmit($event) {
    console.log(this.artworkDetails);
  }

  ngOnInit() {}
}
