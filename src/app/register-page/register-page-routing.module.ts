import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {RegisterPageComponent} from './register-page.component';



const routes: Routes = [
  {path: 'register', component: RegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RegisterPageRoutingModule {}
