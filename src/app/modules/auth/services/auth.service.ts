import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    this.isAuth = Boolean(localStorage.getItem('isAuth'));
  }

  private isAuth = false;

  login() {
    this.isAuth = true;
    localStorage.setItem('isAuth', 'true');
  }

  logout() {
    this.isAuth = false;
    window.localStorage.clear();
  }

  get isLoggedIn(): boolean {
    return this.isAuth;
  }
}
