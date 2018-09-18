import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sample-card-detail',
  templateUrl: './sample-card-detail.component.html',
  styleUrls: ['./sample-card-detail.component.scss']
})
export class SampleCardDetailComponent implements OnInit {
  private subscription: Subscription;
  @Input()
  cols: any[];
  @Input()
  cardDetails: any[];
  @ViewChildren('dt')
  table;
  constructor() {}

  ngOnInit() {}

  addPosition(event) {}

  onDelete(index) {
    this.cardDetails.splice(index, 1);
  }
}
