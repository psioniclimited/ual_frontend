import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { UserService } from '../../service/user.service';
import { Paginate } from '../../../_model/paginate';
import { LazyLoadEvent } from 'primeng/api';
import { PermissionService } from '../../service/permission.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Permission } from '../../../_model/permission';

@Component({
  selector: 'app-permission-table',
  templateUrl: './permission-table.component.html',
  styleUrls: ['./permission-table.component.scss']
})
export class PermissionTableComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  @ViewChildren('dt') table;

  permissions: Paginate[];

  totalRecords: number;

  cols: any[];

  loading: boolean;

  constructor(
    private permissionService: PermissionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.permissionService.permission_data.subscribe(
      (permission: Permission) => {
        console.log(this.table);
      }
    );

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'display_name', header: 'Display Name' },
      { field: 'description', header: 'Description' }
    ];

    this.loading = true;
  }

  loadPermissionsLazy(event: LazyLoadEvent) {
    this.permissionService.permissions(event).subscribe(permissions => {
      this.totalRecords = permissions.total;
      this.permissions = permissions.data;
      this.loading = false;
    });
  }

  editPermission(id: number) {
    this.router.navigate(['../permissions/', id, 'edit'], {
      relativeTo: this.route
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
