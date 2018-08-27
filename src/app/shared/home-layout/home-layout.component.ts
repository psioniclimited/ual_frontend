import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <app-header></app-header>
    <p-toast position="top-right" class="ui-button-danger"></p-toast>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class HomeLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
