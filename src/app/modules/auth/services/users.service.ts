import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  get(email: string): Observable<User> {
    return this.httpClient
      .get<User[]>(`${this.url}?email=${email}`)
      .pipe(map((users) => (users.length ? users[0] : null)));
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }
}
