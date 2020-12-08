import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Record} from "../../shared/models/record.model";
import {RecordService} from "../../shared/serviсes/record.service";
import {Message} from "../../../../modules/auth/model/message.model";

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {
  currentRecordId = 1;
  currentRecord: Record;
  message: Message;
 @Input() records: Record[] = [];
 @Output() onRecordEdit = new EventEmitter<Record>();

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
    this.message = new Message('success', '');
    this.OnRecordChange();
  }

  onSubmit(form: NgForm) {
    const {name, date, description} = form.value;
    const record = new Record(name, date, description, +this.currentRecordId);
    this.recordService.updateRecord(record)
      .subscribe((data: Record) => {
        this.onRecordEdit.emit(data);
        this.message.text = 'Пост успешно добавлен';
        window.setTimeout(() => this.message.text = '', 5000);
      });
  }
    OnRecordChange() {
    this.currentRecord = this.records
      .find(c => c.id === +this.currentRecordId);
  }
}
