import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      agree: new FormControl(null, [Validators.requiredTrue]),
    });
  }

  onSubmit() {
  }
}
