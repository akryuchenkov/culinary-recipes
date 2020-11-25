import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteLayoutComponent} from './site-layout.component';
import {RecordComponent} from '../record/record.component';
import {AddRecordComponent} from '../record/add-record/add-record.component';
import {EditRecordComponent} from '../record/edit-record/edit-record.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import {FooterComponent} from '../shared/components/footer/footer.component';
import {SiteLayoutRoutingModule} from './site-layout-routing.module';



@NgModule({
  declarations: [
    SiteLayoutComponent,
    RecordComponent,
    AddRecordComponent,
    EditRecordComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SiteLayoutRoutingModule
  ]
})
export class SiteLayoutModule { }
