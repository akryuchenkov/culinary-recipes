import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {SiteLayoutComponent} from './site-layout.component';

import {RecordComponent} from "../record/record.component";



const routes: Routes = [
  {path: '', component: SiteLayoutComponent, children: [
      {path: 'record', component: RecordComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SiteLayoutRoutingModule {}
