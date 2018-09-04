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
      a: '',
      b: '',
      c: '',
      d: '',
      e: ''
    });
  }

  onDelete(index) {
    this.artworkDetails.splice(index, 1);
  }
}
