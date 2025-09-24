import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import { Jogo } from '../../models/jogo.model';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './GameCard.component.html',
  styleUrls: ['./GameCard.component.css']
})
export class GameCardComponent {
  @Input() jogos: Jogo[] = [];
  // Nova propriedade para controlar o estilo: 'poster' (vertical) ou 'list' (deitado)
  @Input() cardStyle: 'poster' | 'list' = 'poster';

  constructor(private carrinhoService: CarrinhoService) {}

  adicionarAoCarrinho(jogo: Jogo) {
    this.carrinhoService.adicionarItem(jogo);
  }
}