import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthLayoutComponent} from './auth-layout.component';
import {LoginPageRoutingModule} from '../../../login-page/login-page-routing.module';



@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule
  ]
})
export class AuthLayoutModule { }
