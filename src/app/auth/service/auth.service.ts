import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(private http: HttpClient, private router: Router) {}

  login(creds) {
    return this.http.post('http://localhost:8000/user/login', creds).pipe(
      map(token => {
        // login successful if there's a jwt token in the response
        // @ts-ignore
        if (token && token.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // @ts-ignore
          localStorage.setItem('token', JSON.stringify(token.token));
          this.loggedIn.next(true);
          this.router.navigate(['/auth/auth_user']);
        }
        return token;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
    this.router.navigate(['/auth/signin']);
  }
}
