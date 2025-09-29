import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Jogo } from '../models/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  // 'items' agora é privado para garantir que só o serviço o manipule.
  private items: Jogo[] = [];
  // 'cartItemCount' continua a ser o nosso observável para o header.
  private cartItemCount = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCount.asObservable();

  constructor() { }

  // --- MÉTODOS NOVOS E MELHORADOS ---

  // 1. Adicionar um item ao carrinho
  adicionarItem(item: Jogo) {
    this.items.push(item);
    // Emite o novo número de itens para quem estiver a "ouvir" (o header).
    this.cartItemCount.next(this.items.length);
    console.log('Itens no carrinho:', this.items);
  }

  // 2. Obter a lista completa de itens do carrinho
  getItems(): Jogo[] {
    return this.items;
  }

  // 3. Obter o preço total
  getPrecoTotal(): number {
    // Usa a função 'reduce' para somar o preço de todos os itens.
    return this.items.reduce((total, item) => total + item.preco, 0);
  }

  // 4. Remover um item específico do carrinho pelo seu ID
  removerItem(itemId: number) {
    // Encontra o índice do primeiro item com o ID correspondente.
    const index = this.items.findIndex(item => item.id === itemId);
    
    // Se encontrou o item (index não é -1), remove-o da lista.
    if (index > -1) {
      this.items.splice(index, 1);
      this.cartItemCount.next(this.items.length); // Atualiza o contador
    }
  }

  // 5. Limpar todos os itens do carrinho
  limparCarrinho() {
    this.items = [];
    this.cartItemCount.next(0);
  }
}