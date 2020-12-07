import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Record} from "../../shared/models/record.model";

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {
  currentRecordId = 1;
  currentRecord: Record;
 @Input() records: Record[] = [];
 @Output() onRecordEdit = new EventEmitter<Record>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){}
}
