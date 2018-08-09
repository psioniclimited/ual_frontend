import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { FormsModule} from '@angular/forms';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [SigninComponent, AuthenticatedUserComponent]
})
export class AuthModule { }
