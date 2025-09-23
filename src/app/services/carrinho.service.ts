import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private items: any[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  cartItemCount$ = this.cartItemCount.asObservable();

  constructor() { }

  adicionarItem(item: any) {
    this.items.push(item);
    this.cartItemCount.next(this.items.length);
    console.log('Item adicionado!', this.items);
  }
}