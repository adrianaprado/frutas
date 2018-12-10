import { Component } from '@angular/core';
import { LoginService } from './providers/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frutas';

  constructor(private loginService: LoginService, private router: Router) {
    console.trace('AppComponent constructor');
  }

  logout() {
    console.trace('BackofficeComponent logout');
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  logueado() {
    if (!this.loginService.isLogged()) {
      return false;
    }
    return true;
  }
}
