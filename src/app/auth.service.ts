import { Injectable } from '@angular/core';
import { CurrentUser } from './typings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: boolean;
  public currentUser: CurrentUser;

  constructor() {}

  login(userName: string, password: string) {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
