import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
  ],
  // bootstrap: [AuthLayoutComponent],
  // exports: [AuthLayoutComponent]
})
export class SharedModule {
}
