import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {SiteLayoutModule} from "../../contact/layouts/site-layout/site-layout.module";

@NgModule({
  declarations: [HomePageComponent, MainPageComponent],
  imports: [CommonModule, SystemRoutingModule, SharedModule, SiteLayoutModule],
})
export class SystemModule {}
