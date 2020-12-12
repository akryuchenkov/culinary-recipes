import { Component, OnInit } from '@angular/core';
import { Record } from 'src/app/contact/layouts/shared/models/record.model';
import { RecordService } from 'src/app/contact/layouts/shared/serviсes/record.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  records: Record[] = [];
  searchValue = '';
  searchPlaceholder = 'Название';
  searchField = 'name';

  constructor(private recordsService: RecordService) {}

  ngOnInit(): void {
    this.recordsService
      .getAllRecords()
      .subscribe((records) => (this.records = records));
  }
  changeCriteria(field: string){
    const namesMap = {
      name: 'Название рецепта',
      date: 'Дата',
      description: 'Ингредиент'
    };
    this.searchPlaceholder = namesMap[field];
    this.searchField = field;
  }
}
