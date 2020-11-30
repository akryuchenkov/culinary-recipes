import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SiteLayoutModule } from './contact/layouts/site-layout/site-layout.module';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './modules/auth/services/auth.service';
import { UsersService } from './modules/auth/services/users.service';





@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    SiteLayoutModule,
    HttpClientModule
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
