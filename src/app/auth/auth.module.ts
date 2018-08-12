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

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
  ],
  declarations: [AuthenticatedUserComponent, UserFormComponent]
})
export class AuthModule {}
