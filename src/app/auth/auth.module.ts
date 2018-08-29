import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

// Components
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserTableComponent } from './user-table/user-table.component';
import { TableModule } from 'primeng/table';
import { PermissionComponent } from './permission/permission.component';
import { PermissionFormComponent } from './permission/permission-form/permission-form.component';
import { PermissionTableComponent } from './permission/permission-table/permission-table.component';
import { DropdownModule } from 'primeng/primeng';
import { PermissionStartComponent } from './permission/permission-start/permission-start.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DropdownModule
  ],
  declarations: [
    AuthenticatedUserComponent,
    UserFormComponent,
    UserTableComponent,
    PermissionComponent,
    PermissionFormComponent,
    PermissionTableComponent,
    PermissionStartComponent
  ]
})
export class AuthModule {}
