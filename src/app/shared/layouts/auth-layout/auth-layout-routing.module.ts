import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from './auth-layout.component';




const routes: Routes = [
  {path: '', component: AuthLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AuthLayoutRoutingModule {}
