import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  template: `
    <p-toast position="top-right" class="ui-button-danger"></p-toast>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class LoginLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
