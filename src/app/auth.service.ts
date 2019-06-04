import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public isLoggedIn: boolean;
  public currentUser: CurrentUser;

  constructor() {}

  login(userName: string, password: string) {}

  logOut() {}
}

interface CurrentUser {
  userName: string;
}
