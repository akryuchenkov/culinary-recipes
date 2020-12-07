import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SiteLayoutComponent} from "../../contact/layouts/site-layout/site-layout.component";
import {RecordComponent} from "../../contact/layouts/record/record.component";

const routes: Routes = [
  {path: 'contact', component: SiteLayoutComponent, children: [
      {path: 'record', component: RecordComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
