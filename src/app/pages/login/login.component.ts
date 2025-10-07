import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 1. Importe o FormsModule
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // 2. Adicione-o aos imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  senha = '';
  mensagemErro = '';

  constructor(private authService: AuthService) {}

  fazerLogin() {
    const sucesso = this.authService.login(this.email, this.senha);
    if (!sucesso) {
      this.mensagemErro = 'Email ou senha inválidos. Tente novamente.';
    }
  }
}
