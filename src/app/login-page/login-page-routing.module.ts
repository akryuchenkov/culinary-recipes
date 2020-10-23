import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {LoginPageModule} from './login-page.module';



const routes: Routes = [
  {path: 'login', component: LoginPageModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class LoginPageRoutingModule { }
