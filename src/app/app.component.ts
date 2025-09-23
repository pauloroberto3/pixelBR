import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrinhoComponent } from "./pages/Carrinho/Carrinho.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarrinhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pixelBR';
}
