import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ReceiptCardComponent } from './components/receipt-card/receipt-card.component';
import { AuthService } from '../auth/services/auth.service';

@NgModule({
  declarations: [HeaderComponent, ReceiptCardComponent],
  imports: [CommonModule, RouterModule],
  providers: [AuthService],

  bootstrap: [HeaderComponent, ReceiptCardComponent],
  exports: [HeaderComponent, ReceiptCardComponent],
})
export class SharedModule {}
