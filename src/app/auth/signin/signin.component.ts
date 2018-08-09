import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form = {
    email: 'riger400@gmail.com',
    password: 'qwerasdf'
  };

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    console.log("woking on it");
  }

  onSubmit( ) {
    this.authService.login(this.form)
      .pipe(first())
      .subscribe(
        data => {
          // this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
        });
  }

}
