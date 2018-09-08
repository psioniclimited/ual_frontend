import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Artwork } from '../../_model/artwork';
import { Observable } from 'rxjs';
import { Paginate } from '../../_model/paginate';
import { map } from 'rxjs/operators';
import {Permission} from '../../_model/permission';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  constructor(private http: HttpClient) {}

  store(artwork: Artwork) {
    return this.http.post('/artwork', artwork);
  }

  // show all the artwork
  index(event): Observable<Paginate> {
    // @ts-ignore
    let params = new HttpParams()
      .set('page', String(event.first / event.rows + 1))
      .set('per_page', event.rows);
    // .set('global', event.filters.global);
    event.filters.global
      ? (params = params.set('global', event.filters.global.value))
      : (params = params);
    event.sortField
      ? (params = params.set(
          'sort_by',
          event.sortField + '.' + event.sortOrder
        ))
      : (params = params);
    return this.http.get<Paginate>('/artwork', { params: params });
  }

  show(id: number): Observable<Artwork>  {
    return this.http.get<Artwork>('/artwork/' + id);
  }
}
