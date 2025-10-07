import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  itemCount = 0;
  private cartSubscription!: Subscription;
  
  isMenuAberto = false;

  constructor(
    private carrinhoService: CarrinhoService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.cartSubscription = this.carrinhoService.cartItemCount$.subscribe(count => {
      this.itemCount = count;
    });
  }

  toggleMenu(): void {
    this.isMenuAberto = !this.isMenuAberto;
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}