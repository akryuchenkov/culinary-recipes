import {Component, OnInit} from '@angular/core';
import {routes} from '../../../../routes';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  routes = routes;

  constructor() {
  }

  ngOnInit(): void {
  }

}
