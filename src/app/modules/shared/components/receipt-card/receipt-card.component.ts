import { Component, Input, OnInit } from '@angular/core';
import { Record } from 'src/app/contact/layouts/shared/models/record.model';

@Component({
  selector: 'app-receipt-card',
  templateUrl: './receipt-card.component.html',
  styleUrls: ['./receipt-card.component.css']
})
export class ReceiptCardComponent implements OnInit {
  @Input()
  record: Record = new Record('', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
