import { Component, OnInit, ViewChildren } from '@angular/core';
import { ArtworkService } from '../service/artwork.service';
import { Paginate } from '../../_model/paginate';
import { LazyLoadEvent } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.scss']
})
export class ArtworkListComponent implements OnInit {
  @ViewChildren('dt')
  table;
  artworkList: Paginate[];
  totalRecords: number;
  cols: any[];
  loading: boolean;
  artworkImageUrl: string;

  constructor(
    private artworkService: ArtworkService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'date', header: 'Date Received' },
      { field: 'client_name', header: 'Client Name' },
      { field: 'reference_number', header: 'Reference No' },
      { field: 'division', header: 'Division' },
      { field: 'description', header: 'Description' },
      { field: 'name', header: 'Combo' },
      { field: 'files', header: 'Files' }
    ];
    this.loading = true;
  }

  loadArtworks(event: LazyLoadEvent) {
    this.artworkService.index(event).subscribe(artworks => {
      this.totalRecords = artworks.total;
      this.artworkList = artworks.data;
      this.loading = false;
    });
  }
  editArtwork(id: number) {
    console.log(id);
    this.router.navigate(['../artwork/', id, 'edit'], {
      relativeTo: this.route
    });
  }

  showArtworkImage(id: number) {
    this.artworkImageUrl =  environment.api_url + '/artwork_image/' + id;
  }
}
