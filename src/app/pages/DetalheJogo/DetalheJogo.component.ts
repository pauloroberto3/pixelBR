import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Jogo } from '../../models/jogo.model';
import { JOGOS } from '../../data/jogos';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-detalhe-jogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './DetalheJogo.component.html',
  styleUrls: ['./DetalheJogo.component.css']
})
export class DetalheJogoComponent implements OnInit {
  jogo: Jogo | undefined;

  constructor(
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jogo = JOGOS.find(j => j.id === +id);
    }
  }

  adicionarAoCarrinho(jogo: Jogo): void {
    this.carrinhoService.adicionarItem(jogo);
    alert(`${jogo.titulo} foi adicionado ao carrinho!`);
  }
}