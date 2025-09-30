import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  // A propriedade que estava a faltar.
  // Começa como 'false' para mostrar o formulário.
  cadastroSucesso = false;

  constructor(private router: Router) {}

  fazerCadastro() {
    // 1. Altera a propriedade para 'true' para mostrar a mensagem de sucesso
    this.cadastroSucesso = true;

    // 2. Espera 3 segundos e depois redireciona para o login
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}