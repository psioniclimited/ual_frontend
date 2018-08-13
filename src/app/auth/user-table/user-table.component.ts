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
    this.userService.users(event).subscribe(users => {
      this.totalRecords = users.total;
      this.users = users.data;
      this.loading = false;
    });
  }
}
