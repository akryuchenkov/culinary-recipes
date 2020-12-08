import { Component, OnInit } from '@angular/core';
import {Record} from "../shared/models/record.model";
import {RecordService} from "../shared/serviсes/record.service";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  records: Record[] = [];
  isLoaded = false;

  constructor(private recordService: RecordService ) { }

  ngOnInit() {
    this.recordService.getRecords()
      .subscribe( (records: Record[]) => {
      this.records = records;
      this.isLoaded = true;
    });
}
  newRecordAdded(record: Record){
    this.records.push(record);
  }
  recordWasEdited(record: Record){
    const idx = this.records
      .findIndex(c => c.id === record.id);
    this.records[idx] = record;
  }
}
