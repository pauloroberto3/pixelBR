import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common'; // Importa o serviço de Localização
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Propriedade que decide se o botão "Voltar" deve aparecer
  mostrarBotaoVoltar = false;

  constructor(private router: Router, private location: Location) {
    // "Ouve" as mudanças de rota na aplicação
    this.router.events.subscribe(event => {
      // Verifica se a navegação foi concluída com sucesso
      if (event instanceof NavigationEnd) {
        // Se a URL atual for a home page, esconde o botão
        if (event.urlAfterRedirects === '/home' || event.urlAfterRedirects === '/') {
          this.mostrarBotaoVoltar = false;
        } else {
          // Em qualquer outra página, mostra o botão
          this.mostrarBotaoVoltar = true;
        }
      }
    });
  }

  // Função que será chamada quando o botão for clicado
  voltarPaginaAnterior(): void {
    this.location.back(); // Usa o serviço Location para voltar no histórico
  }
}