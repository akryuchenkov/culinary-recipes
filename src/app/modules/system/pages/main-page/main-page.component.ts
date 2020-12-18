import { Component, OnInit } from '@angular/core';
import { Record } from 'src/app/contact/layouts/shared/models/record.model';
import { RecordService } from '../../../../contact/layouts/shared/serviсes/record.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  records: Record[] = [];

  constructor(private recordsService: RecordService) {}

  ngOnInit(): void {
    this.recordsService
      .getAllRecords()
      .subscribe((records) => (this.records = records));
  }
}
