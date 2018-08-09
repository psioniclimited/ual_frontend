import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { HeaderComponent } from './shared/header/header.component';
import { LoginLayoutComponent } from './shared/login-layout/login-layout.component';
import { SigninComponent } from './shared/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    SigninComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
