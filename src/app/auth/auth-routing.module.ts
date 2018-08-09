import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { AuthGuard } from '../_guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth_user',
    component: AuthenticatedUserComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
