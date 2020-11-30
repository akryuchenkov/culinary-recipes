import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AppRoutingModule} from "../../app-routing.module";


@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule
  ],
  // bootstrap: [AuthLayoutComponent],
  // exports: [AuthLayoutComponent]
})
export class SharedModule {}
