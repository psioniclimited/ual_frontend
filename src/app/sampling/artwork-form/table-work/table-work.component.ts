import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Position } from '../../../_model/position';

@Component({
  selector: 'app-table-work',
  templateUrl: './table-work.component.html',
  styleUrls: ['./table-work.component.scss']
})
export class TableWorkComponent implements OnInit {
  color: string;
  @Input()
  cols: any[];
  @Input()
  artworkDetails: Position[];
  constructor() {}

  ngOnInit() {
    console.log(this.artworkDetails);
  }

  addPosition(event) {
    this.artworkDetails.push(new Position());
  }

  onDelete(index) {
    this.artworkDetails.splice(index, 1);
  }
}
