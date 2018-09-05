import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './shared/login-layout/login-layout.component';
import { SigninComponent } from './shared/signin/signin.component';
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent, // {4}
    children: [
      {
        path: 'login',
        component: SigninComponent // {5}
      }
    ]
  },
  // {
  //   path: 'auth',
  //   loadChildren: '../app/auth/auth.module#AuthModule',
  // },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: 'auth', loadChildren: '../app/auth/auth.module#AuthModule' },
      { path: '', loadChildren: '../app/sampling/sampling.module#SamplingModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
