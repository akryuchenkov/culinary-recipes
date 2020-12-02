import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from '../models/record.model';
import { Observable } from 'rxjs';

@Injectable()
export class RecordService {
  constructor(private http: HttpClient) {}

  getAllRecords(): Observable<Record[]> {
    return this.http.get<Record[]>('http://localhost:3000/record');
  }

  createRecord(record: Record) {
    return this.http.post('http://localhost:3000/record', record);
  }
}
