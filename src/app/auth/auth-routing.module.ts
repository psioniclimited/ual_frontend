import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { AuthGuard } from '../_guard/auth.guard';
import { UserFormComponent } from './user-form/user-form.component';
import { UserTableComponent } from './user-table/user-table.component';
import { PermissionComponent } from './permission/permission.component';
import { PermissionFormComponent } from './permission/permission-form/permission-form.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {
    path: 'auth_user',
    component: AuthenticatedUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: UserFormComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UserTableComponent
  },
  {
    path: 'permissions',
    component: PermissionComponent,
    children: [
      { path: '', component: PermissionFormComponent },
      { path: ':id/edit', component: PermissionFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
