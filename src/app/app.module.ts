import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginPageModule} from './login-page/login-page.module';
import {RegisterPageModule} from './register-page/register-page.module';
import {AuthLayoutModule} from './shared/layouts/auth-layout/auth-layout.module';
import {SiteLayoutModule} from './shared/layouts/site-layout/site-layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoginPageModule,
    RegisterPageModule,
    AuthLayoutModule,
    SiteLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
