import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Massage} from '../../model/message.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  massage: Massage;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.massage = new Massage('danger', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['canLogin']){
          this.showMassage({
            text: 'Регистрация успешно завершена',
            type: 'success'
          });
        }
      });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  private showMassage(massage: Massage){
    this.massage = massage;

    window.setTimeout(() => {
      this.massage.text = '';
    }, 5000);
  }
  onSubmit(): void {
    const formData = this.form.value;

    this.userService.getUsers(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            console.log('Вы успешно авторизованы');
          } else {
            this.showMassage({
              text: 'Пароль введён неверно',
              type: 'danger'
            });
          }
        }else {
          this.showMassage({
            text: 'Такого пользователя не существует',
            type: 'danger'
          });
        }
      });
  }

}
