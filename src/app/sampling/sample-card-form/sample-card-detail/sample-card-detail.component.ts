import { Component, OnInit, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { Paginate } from '../../../_model/paginate';

@Component({
  selector: 'app-sample-card-detail',
  templateUrl: './sample-card-detail.component.html',
  styleUrls: ['./sample-card-detail.component.scss']
})
export class SampleCardDetailComponent implements OnInit {
  private subscription: Subscription;

  CardDetails: any[];

  @ViewChildren('dt') table;

  permissions: Paginate[];

  totalRecords: number;

  cols: any[];

  loading: boolean;
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'si', header: 'SI #' },
      { field: 'colour', header: 'Colour' },
      { field: 'art', header: 'Art #' },
      { field: 'dan', header: 'Dan' },
    ];

    this.loading = true;
  }

  addPosition(event) {
    this.CardDetails.push({
      position: '',
      a: '',
      b: '',
      c: '',
      d: '',
      e: ''
    });
  }
}
