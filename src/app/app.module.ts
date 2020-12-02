import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SiteLayoutModule } from './contact/layouts/site-layout/site-layout.module';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './modules/auth/services/auth.service';
import { UsersService } from './modules/auth/services/users.service';
import { AdminModule } from './modules/admin/admin.module';
import { SystemModule } from './modules/system/system.module';
import { SharedModule } from './modules/shared/shared.module';
import { RecordService } from './contact/layouts/shared/serviсes/record.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    // SiteLayoutModule,
    AdminModule,
    SystemModule,
    SharedModule,
  ],
  providers: [UsersService, AuthService, RecordService],
  bootstrap: [AppComponent],
})
export class AppModule {}
