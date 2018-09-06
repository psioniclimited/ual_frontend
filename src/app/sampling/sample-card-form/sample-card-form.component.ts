import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sample-card-form',
  templateUrl: './sample-card-form.component.html',
  styleUrls: ['./sample-card-form.component.scss']
})
export class SampleCardFormComponent implements OnInit {

  items: MenuItem[];


  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Woven Label', icon: 'fa fa-fw fa-bar-chart',
        routerLink: '/artwork/create'},
    ];
  }



}
