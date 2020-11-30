import { Component, OnInit } from '@angular/core';
import {RecordService} from "../../shared/serviсes/record.service";
import {FormGroup, NgForm} from "@angular/forms";
import {Record} from "../../shared/models/record.model";



@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  constructor(private  recordServise: RecordService) { }

  ngOnInit(): void {
  }
onSubmit(form: NgForm){
    const {name, date, description} = form.value;
    const record = new Record(name, date, description);
    this.recordServise.createRecord(record)
      .subscribe(() => {
       form.reset();
      });
}
}
