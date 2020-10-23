import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {SiteLayoutComponent} from './site-layout.component';






const routes: Routes = [
  {path: 'site', component: SiteLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SiteLayoutRoutingModule {}
