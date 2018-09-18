import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Artwork } from '../../_model/artwork';
import { Observable } from 'rxjs';
import { Paginate } from '../../_model/paginate';

@Injectable({
  providedIn: 'root'
})
export class ArtworkDataService {

  constructor(private http: HttpClient) { }

  // show all the artwork
  index(event): Observable<Paginate> {
    let params = new HttpParams();
    event.query
      ? (params = params.set('reference_number', event.query.toLowerCase()))
      : (params = params);
    return this.http.get<Paginate>('/artwork_data', { params: params });
  }
}
