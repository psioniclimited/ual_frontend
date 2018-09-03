import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-work',
  templateUrl: './table-work.component.html',
  styleUrls: ['./table-work.component.scss']
})
export class TableWorkComponent implements OnInit {
  @Input()
  cols: any[];
  @Input()
  artworkDetails: any[];
  constructor() {}

  ngOnInit() {}

  addPosition(event) {
    this.artworkDetails.push({
      position: '',
      combo_a: '',
      combo_b: '',
      combo_c: '',
      combo_d: '',
      combo_e: ''
    });
  }

  onDelete(index) {
    this.artworkDetails.splice(index, 1);
  }
}
