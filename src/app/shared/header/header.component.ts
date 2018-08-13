import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  onLogout() {
    this.authService.logout().subscribe(data => {
      console.log(data);
    });
  }
}
