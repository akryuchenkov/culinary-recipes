import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {routes as routeNames} from '../../routes';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: routeNames.auth.login,
        component: LoginPageComponent
      },
      {
        path: routeNames.auth.registration,
        component: RegisterPageComponent
      }
    ]
  }
];

// "/auth/login"
// "/auth/registration"

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
