import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SiteLayoutModule } from '../../contact/layouts/site-layout/site-layout.module';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../contact/layouts/shared/pipes/search.pipe';

@NgModule({
  declarations: [HomePageComponent, MainPageComponent, SearchPipe],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,
    SiteLayoutModule,
    FormsModule,
  ],
})
export class SystemModule {}
