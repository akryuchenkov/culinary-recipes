import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteLayoutComponent} from './site-layout.component';
import {RecordComponent} from '../record/record.component';
import {AddRecordComponent} from '../record/add-record/add-record.component';
import {EditRecordComponent} from '../record/edit-record/edit-record.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import {FooterComponent} from '../shared/components/footer/footer.component';
import {SiteLayoutRoutingModule} from './site-layout-routing.module';
import {RecordService} from '../shared/serviсes/record.service';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../../modules/shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {DropdownDirective} from "../shared/directive/dropdown.directive";



@NgModule({
    declarations: [
        SiteLayoutComponent,
        RecordComponent,
        AddRecordComponent,
        EditRecordComponent,
        HeaderComponent,
        FooterComponent,
        DropdownDirective
    ],
    imports: [
        BrowserModule,
        SiteLayoutRoutingModule,
        FormsModule
    ],
    providers: [RecordService],
    exports: [
        HeaderComponent,
        FooterComponent,
        DropdownDirective
    ]
})
export class SiteLayoutModule { }
