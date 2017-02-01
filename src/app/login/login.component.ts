import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(
    private userService: UserService,
    private router: Router,
    private app: AppComponent
    ) { }
  validCredentials = true;
  loginUserData = {
    username: '',
    password: ''
  };
  login() {
    this.userService.loginUser(this.loginUserData)
      .subscribe(data => {
        this.userService.saveAuthInSession(data)
        this.router.navigate(['/notes']);
        this.app.toggleNavigation();
      },
      () => {
        this.validCredentials = false;
      });
  }
}