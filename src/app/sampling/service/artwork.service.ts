import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Artwork} from '../../_model/artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor(private http: HttpClient) { }

  store(artwork: Artwork) {
    return this.http.post('/artwork', artwork);
  }
}
