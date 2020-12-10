import { Component, OnInit } from '@angular/core';
import {User} from "../../../auth/model/user.model";
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
