import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Paginate} from '../../_model/paginate';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  users(event) {
    // @ts-ignore
    const params = new HttpParams()
      .set('page', (event.first / event.rows) + 1)
      .set('per_page', event.rows);
    return this.http.get<Paginate>('/user', {params: params});
  }
  store() {}
  delete() {}
}
