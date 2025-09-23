import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MatIconModule, RouterModule],
  standalone: true
})
export class HeaderComponent {
  itemCount = 0;

  constructor(private carrinhoService: CarrinhoService) { }
  ngOnInit(): void {
    this.carrinhoService.cartItemCount$.subscribe(count => {
      this.itemCount = count;
    });
  }
}
