import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cadastroSucesso = false;
  termosAceites = false;

  constructor(private router: Router) {}

  fazerCadastro() {
    this.cadastroSucesso = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}