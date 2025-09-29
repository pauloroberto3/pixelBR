import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Jogo } from '../../models/jogo.model';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './Carrinho.component.html',
  styleUrls: ['./Carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  // Propriedades para guardar os dados que vêm do serviço
  itensDoCarrinho: Jogo[] = [];
  precoTotal = 0;

  // Injetamos o CarrinhoService para podermos usá-lo
  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    // Quando a página é carregada, atualizamos os dados locais
    this.atualizarDadosDoCarrinho();
  }

  // Função para remover um item
  removerItemDoCarrinho(itemId: number): void {
    this.carrinhoService.removerItem(itemId);
    // Depois de remover, atualizamos os dados novamente para refletir a mudança
    this.atualizarDadosDoCarrinho();
  }

  // Função central para buscar os dados do serviço
  private atualizarDadosDoCarrinho(): void {
    this.itensDoCarrinho = this.carrinhoService.getItems();
    this.precoTotal = this.carrinhoService.getPrecoTotal();
  }
}