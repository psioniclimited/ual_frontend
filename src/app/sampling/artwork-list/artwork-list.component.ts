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
  private remote_data: RemoteData;
  remmote_array = [];

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
      // console.log(permissions.data[0]['position']['artwork']);
      this.totalRecords = permissions.total;
      // for (let i = 0; i < permissions.data.length; i++) {
      //   for (
      //     let j = 0;
      //     j <
      //     permissions.data[i]['position']['artwork']['artwork_images'].length;
      //     j++
      //   ) {
      //     console.log(
      //       permissions.data[i]['position']['artwork']['artwork_images'][j][
      //         'filepath'
      //       ]
      //     );
      //   }
      //   this.remote_data = new RemoteData(
      //     permissions.data[i]['position']['artwork']['date'],
      //     permissions.data[i]['position']['artwork']['client_name'],
      //     permissions.data[i]['position']['artwork']['reference_number'],
      //     permissions.data[i]['position']['artwork']['division'],
      //     permissions.data[i]['position']['artwork']['description'],
      //     permissions.data[i]['name']
      //   );
      //   this.remmote_array.push(this.remote_data);
      // }
      console.log(permissions.data);
      // permissions.data.splice(0, 10);
      // for (let i = 0; i < this.remmote_array.length; i++) {
      //   permissions.data.push(this.remmote_array[i]);
      // }
      console.log(this.remmote_array);
      this.permissions = permissions.data;
      this.loading = false;
    });
  }

  editPermission(id) {
    console.log(id);
  }
}

class RemoteData {
  date: string;
  client_name: string;
  reference_number: string;
  division: string;
  description: string;
  name: string;

  constructor(
    date: string,
    client_name: string,
    reference_number: string,
    division: string,
    description: string,
    name: string
  ) {
    this.date = date;
    this.client_name = client_name;
    this.reference_number = reference_number;
    this.division = division;
    this.description = description;
    this.name = name;
  }
}
