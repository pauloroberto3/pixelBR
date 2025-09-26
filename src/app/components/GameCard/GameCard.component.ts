import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho.service';
import { Jogo } from '../../models/jogo.model';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './GameCard.component.html',
  styleUrls: ['./GameCard.component.css']
})
export class GameCardComponent {
  @Input() jogos: Jogo[] = [];
  @Input() cardStyle: 'poster' | 'list' = 'poster';

  constructor(private carrinhoService: CarrinhoService) {}

  adicionarAoCarrinho(jogo: Jogo) {
    this.carrinhoService.adicionarItem(jogo);
    console.log(`${jogo.titulo} foi adicionado ao carrinho!`);
  }
}
