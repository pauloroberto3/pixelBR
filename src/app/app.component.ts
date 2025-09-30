import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // Importe o Location
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { AuthHeaderComponent } from './components/AuthHeader/AuthHeader.component';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AuthHeaderComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthPage = false;
  // Variável para controlar o botão "Voltar" (RESTAURADA)
  mostrarBotaoVoltar = false;

  constructor(private router: Router, private location: Location) { // Injete o Location
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Lógica para os cabeçalhos
        if (event.url === '/login' || event.url === '/cadastro') {
          this.isAuthPage = true;
        } else {
          this.isAuthPage = false;
        }

        // Lógica para o botão "Voltar" (RESTAURADA)
        const rotasParaEsconderBotao = ['/login', '/cadastro', '/home', '/'];
        if (rotasParaEsconderBotao.includes(event.urlAfterRedirects)) {
          this.mostrarBotaoVoltar = false;
        } else {
          this.mostrarBotaoVoltar = true;
        }
      }
    });
  }

  // Função para voltar (RESTAURADA)
  voltarPaginaAnterior(): void {
    this.location.back();
  }
}