import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   private title = 'Article Blog';
  currentUser = sessionStorage.getItem('username');
  hasAuth: boolean;

  constructor(private userService: UserService, private router: Router) { }

  toggleNavigation() {
      this.hasAuth = !!sessionStorage.getItem('authToken');
      this.currentUser = sessionStorage.getItem('username');
    }

    logout() {
        this.userService.logoutUser()
            .subscribe(
            () => {
                this.router.navigate(['/home']);
                sessionStorage.clear();
                this.toggleNavigation();
            },
            error => console.log(error.json())
            );
    }
}
