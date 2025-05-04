import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error = false;

  @Output() isLogin = new EventEmitter<void>();

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.error = !this.auth.login(this.username, this.password);
    if (!this.error) {
      this.router.navigate(['/homepage'], {
        queryParams: { username: this.username }, //Passo lo username come parametro
      });
      this.isLogin.emit();
    }
  }
}
