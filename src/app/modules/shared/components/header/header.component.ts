import { Component, OnInit } from '@angular/core';
import { User } from '../../../auth/model/user.model';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: User;
  get isAuth() {
    return this.authService.isLoggedIn;
  }
  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth', 'login']);
  }
}
