import { Component, OnInit } from '@angular/core';
import { Paginate } from '../../../_model/paginate';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss']
})
export class RoleTableComponent implements OnInit {
  permissions: Paginate[];

  totalRecords: number;

  cols: any[];

  loading: boolean;

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'display_name', header: 'Display Name' },
      { field: 'description', header: 'Description' }
      // { field: 'action', header: 'Actions' }
    ];

    this.loading = true;
  }

  // loadUsersLazy(event: LazyLoadEvent) {
  //   this.permissionService.permissions(event).subscribe(permissions => {
  //     this.totalRecords = permissions.total;
  //     this.permissions = permissions.data;
  //     this.loading = false;
  //   });
  // }
  //
  // editPermission(id: number) {
  //   this.router.navigate(['../permissions/', id , 'edit'], {relativeTo: this.route});
  // }

}
