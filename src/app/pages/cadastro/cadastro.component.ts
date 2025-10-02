import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 1. Importe o FormsModule

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // 2. Adicione-o aos imports
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cadastroSucesso = false;
  // 3. Nova propriedade para controlar a checkbox. Começa como 'false'.
  termosAceites = false;

  constructor(private router: Router) {}

  fazerCadastro() {
    // A função só executa se os termos forem aceites (botão está ativo)
    this.cadastroSucesso = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}