import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from '../shared/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { HomeLayoutComponent } from '../shared/home-layout/home-layout.component';
import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  declarations: [AuthenticatedUserComponent]
})
export class AuthModule {}
