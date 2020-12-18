import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    this.isAuth = Boolean(localStorage.getItem('isAuth'));

    const jsonUser = localStorage.getItem('user');
    this.user = jsonUser ? JSON.parse(jsonUser) : null;
  }

  private isAuth = false;
  private user: User;

  login(user: User) {
    this.isAuth = true;
    localStorage.setItem('isAuth', 'true');
    
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user, null, 2));
  }

  logout() {
    this.isAuth = false;
    window.localStorage.clear();
  }

  get isLoggedIn(): boolean {
    return this.isAuth;
  }

  get currentUser(): User {
    return this.user;
  }
}
