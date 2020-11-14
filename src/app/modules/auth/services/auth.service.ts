import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private isAuth = false;

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this.isAuth;
  }
}
