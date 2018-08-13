import { Injectable } from '@angular/core';
import { User } from '../../_model/user';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Paginate} from '../../_model/paginate';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get<Paginate>('/user');
  }
  store() {}
  delete() {}
}
