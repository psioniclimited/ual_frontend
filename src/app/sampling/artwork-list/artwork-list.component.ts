import { Component, OnInit, ViewChildren } from '@angular/core';
import { ArtworkService } from '../service/artwork.service';
import { Paginate } from '../../_model/paginate';
import { LazyLoadEvent } from 'primeng/api';

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

  constructor(private artworkServipe: ArtworkService) {}

  ngOnInit() {
    this.cols = [
      { field: 'date', header: 'Date Received' },
      { field: 'client_name', header: 'Client Name' },
      { field: 'reference_number', header: 'Reference No' },
      { field: 'division', header: 'Division' },
      { field: 'description', header: 'Description' },
      { field: 'name', header: 'Combo' }
    ];

    this.loading = true;
  }

  loadPermissionsLazy(event: LazyLoadEvent) {
    this.artworkServipe.index(event).subscribe(permissions => {
      this.totalRecords = permissions.total;
      this.permissions = permissions.data;
      this.loading = false;
    });
  }

  editPermission(id) {
    console.log(id);
  }
}
