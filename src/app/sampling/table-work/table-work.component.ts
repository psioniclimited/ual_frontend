import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-work',
  templateUrl: './table-work.component.html',
  styleUrls: ['./table-work.component.scss']
})
export class TableWorkComponent implements OnInit {
  artworkDetails: any[];
  constructor() {
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

  ngOnInit() {}
}
