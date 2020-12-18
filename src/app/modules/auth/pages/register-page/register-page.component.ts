import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import {Message} from "../../model/message.model";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  form: FormGroup;
  message: Message;
  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.message = new Message('danger', '');
    this.form = new FormGroup({
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.forbiddenEmails.bind(this)
      ),
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);

    this.userService.create(user).subscribe(() => {
      this.router.navigate(['auth/login'], {
        queryParams: {
          canLogin: true,
        },
      });
    });
  }
  private showMessage(message: Message) {
    this.message = message;

    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }
  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.get(control.value).subscribe((user: User) => {
        if (user) {
          resolve({ forbiddenEmail: true });
          this.showMessage({
            text: 'Такой email уже зарегистрирован',
            type: 'danger',
          });
        } else {
          resolve(null);
        }
      });
    });
  }
}
