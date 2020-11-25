import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SiteLayoutComponent} from './contact/layouts/site-layout/site-layout.component';

const routes: Routes = [
  // {
  //   path: '', component: AuthLayoutComponent, children: [
  //     {path: '', redirectTo: '/login', pathMatch: 'full'},
  //   ]
  // },
  // {
  //   path: '', component: SiteLayoutComponent, children: []
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
