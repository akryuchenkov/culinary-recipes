import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  // bootstrap: [AuthLayoutComponent],
  // exports: [AuthLayoutComponent]
})
export class SharedModule {}
