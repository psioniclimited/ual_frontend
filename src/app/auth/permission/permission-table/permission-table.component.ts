import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Paginate } from '../../../_model/paginate';
import { LazyLoadEvent } from 'primeng/api';
import { PermissionService } from '../../service/permission.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permission-table',
  templateUrl: './permission-table.component.html',
  styleUrls: ['./permission-table.component.scss']
})
export class PermissionTableComponent implements OnInit {
  permissions: Paginate[];

  totalRecords: number;

  cols: any[];

  loading: boolean;

  constructor(private permissionService: PermissionService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'display_name', header: 'Display Name' },
      { field: 'description', header: 'Description' }
      // { field: 'action', header: 'Actions' }
    ];

    this.loading = true;
  }

  loadUsersLazy(event: LazyLoadEvent) {
    this.permissionService.permissions(event).subscribe(permissions => {
      this.totalRecords = permissions.total;
      this.permissions = permissions.data;
      this.loading = false;
    });
  }

  editPermission(id: number) {
    console.log(id);
    this.permissionService.editService(id);
  }
}
