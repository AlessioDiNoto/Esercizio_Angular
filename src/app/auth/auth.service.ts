import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('token', 'token-jwt-finto');
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('token');
  }
  isAutenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
