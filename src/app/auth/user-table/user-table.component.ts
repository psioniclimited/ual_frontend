import { Component, OnInit } from '@angular/core';
import { User } from '../../_model/user';
import { UserService } from '../service/user.service';
import { Paginate } from '../../_model/paginate';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  // datasource: Car[];

  users: Paginate[];

  totalRecords: number;

  cols: any[];

  loading: boolean;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.userService.users().subscribe(users => {
    //   this.totalRecords = users.total;
    // });

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'created_at', header: 'Created At' }
    ];

    this.loading = true;
  }

  loadUsersLazy(event: LazyLoadEvent) {
    this.userService.users().subscribe(users => {
      this.totalRecords = users.total;
      this.users = users.data;
      this.loading = false;
    });
  }

  // loadCarsLazy(event: LazyLoadEvent) {
  //   this.loading = true;
  //
  //   //in a real application, make a remote request to load data using state metadata from event
  //   //event.first = First row offset
  //   //event.rows = Number of rows per page
  //   //event.sortField = Field name to sort with
  //   //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
  //   //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
  //
  //   //imitate db connection over a network

  //   setTimeout(() => {
  //     if (this.datasource) {
  //       this.cars = this.datasource.slice(
  //         event.first,
  //         event.first + event.rows
  //       );
  //       this.loading = false;
  //     }
  //   }, 1000);
  // }
}
