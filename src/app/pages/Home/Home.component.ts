import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameCardComponent } from '../../components/GameCard/GameCard.component';
import { Jogo } from '../../models/jogo.model';
import { JOGOS } from '../../data/jogos';

import Swiper from 'swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    GameCardComponent
  ],
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  jogosEmDestaque: Jogo[] = [];
  slidesDoCarrossel: any[];

  constructor() {
    this.slidesDoCarrossel = [
      {
        titulo: 'Celebre a Criatividade Nacional',
        texto: 'PixelBR é uma vitrine dedicada a celebrar e promover os incríveis jogos desenvolvidos no Brasil.',
        imagemFundo: '/assets/img/carousel/slide-1.jpg'
      },
      {
        titulo: 'Explore um Catálogo Selecionado',
        texto: 'Navegue por uma curadoria especial de jogos, dos grandes sucessos aos tesouros indie.',
        imagemFundo: '/assets/img/carousel/slide-1.jpg'
      },
      {
        titulo: 'Apoie os Desenvolvedores',
        texto: 'Cada jogo que você descobre aqui é uma oportunidade de apoiar o talento e a inovação da indústria brasileira.',
        imagemFundo: '/assets/img/carousel/slide-1.jpg'
      }
    ];
  }

  ngOnInit(): void {
    const todosOsJogos = [...JOGOS];
    const jogosBaralhados = todosOsJogos.sort(() => 0.5 - Math.random());

    this.jogosEmDestaque = jogosBaralhados.slice(0, 4);
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