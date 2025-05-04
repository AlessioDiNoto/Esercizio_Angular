import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'compito_intermedio';
  isLoggedIn: boolean = false;

  handleLogin() {
    //console.log('login ricevuto');
    this.isLoggedIn = true;
  }
  handleLogout() {
    //console.log('logout ricevuto');
    this.isLoggedIn = false;
  }
}
