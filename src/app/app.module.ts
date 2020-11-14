import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SiteLayoutModule} from './shared/layouts/site-layout/site-layout.module';
import {AuthModule} from './modules/auth/auth.module';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './modules/auth/services/user.service';
import {AuthService} from './modules/auth/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    SiteLayoutModule,
    HttpClientModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
