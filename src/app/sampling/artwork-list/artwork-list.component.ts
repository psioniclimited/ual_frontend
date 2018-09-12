import { Component, OnInit, ViewChildren } from '@angular/core';
import { ArtworkService } from '../service/artwork.service';
import { Paginate } from '../../_model/paginate';
import { LazyLoadEvent } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.scss']
})
export class ArtworkListComponent implements OnInit {
  @ViewChildren('dt')
  table;

  permissions: Paginate[];

  totalRecords: number;

  cols: any[];

  loading: boolean;

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
      { field: 'files', header: 'Files' },
    ];

    this.loading = true;
  }

  loadArtworks(event: LazyLoadEvent) {
    this.artworkService.index(event).subscribe(artworks => {
      this.totalRecords = artworks.total;
      this.permissions = artworks.data;
      console.log(this.permissions);
      this.loading = false;
    });
  }

  editPermission(id: number) {
    console.log(id);
    this.router.navigate(['../artwork/', id, 'edit'], {
      relativeTo: this.route
    });
  }
}
