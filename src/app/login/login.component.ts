import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  pageTitle = 'Log In';

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {}

  login(loginForm: NgForm) {
    if(loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }

}
