import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.loggedIn.next(true);
    }
  }

  login(email: string, senha: string): boolean {
    const emailValido = 'user@pixelbr.com';
    const senhaValida = '123456';
    if (email === emailValido && senha === senhaValida) {
      localStorage.setItem('isLoggedIn', 'true');
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}