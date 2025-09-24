import { Component, AfterViewInit } from '@angular/core';
import { GameCardComponent } from '../../components/GameCard/GameCard.component';
import { Jogo } from '../../models/jogo.model';
import { JOGOS } from '../../data/jogos';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import Swiper from 'swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GameCardComponent,
    RouterModule,
    CommonModule
  ],
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements AfterViewInit {
  jogosEmDestaque: Jogo[];
  slidesDoCarrossel: any[];

  constructor() {
    const idsDosJogosEmDestaque = [1, 5, 3, 6, 10];
    this.jogosEmDestaque = JOGOS.filter(jogo => idsDosJogosEmDestaque.includes(jogo.id));

    // Conteúdo do carrossel agora usa os novos caminhos de imagem
    this.slidesDoCarrossel = [
      {
        titulo: 'Celebre a Criatividade Nacional',
        texto: 'PixelBR é uma vitrine dedicada a celebrar e promover os incríveis jogos desenvolvidos no Brasil.',
        imagemFundo: '/assets/img/carousel/slide-1.jpg' // <-- CAMINHO ATUALIZADO
      },
      {
        titulo: 'Explore um Catálogo Selecionado',
        texto: 'Navegue por uma curadoria especial de jogos, dos grandes sucessos aos tesouros indie.',
        imagemFundo: '/assets/img/carousel/slide-1.jpg' // <-- CAMINHO ATUALIZADO
      },
      {
        titulo: 'Apoie os Desenvolvedores',
        texto: 'Cada jogo que você descobre aqui é uma oportunidade de apoiar o talento e a inovação da indústria brasileira.',
        imagemFundo: '/assets/img/carousel/slide-1.jpg' // <-- CAMINHO ATUALIZADO
      }
    ];
  }

  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      modules: [Pagination, Autoplay, EffectFade],
      effect: 'fade',
      fadeEffect: { crossFade: true },
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}