import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Jogo } from '../models/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private items: Jogo[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCount.asObservable();

  constructor() { }

  adicionarItem(item: Jogo) {
    this.items.push(item);
    this.cartItemCount.next(this.items.length);
    console.log('Itens no carrinho:', this.items);
  }

  getItems(): Jogo[] {
    return this.items;
  }

  getPrecoTotal(): number {
    return this.items.reduce((total, item) => total + item.preco, 0);
  }

  removerItem(itemId: number) {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index > -1) {
      this.items.splice(index, 1);
      this.cartItemCount.next(this.items.length);
    }
  }

  limparCarrinho() {
    this.items = [];
    this.cartItemCount.next(0);
  }
}