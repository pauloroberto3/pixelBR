import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '../../components/GameCard/GameCard.component';
import { Jogo } from '../../models/jogo.model';
import { JOGOS } from '../../data/jogos';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, GameCardComponent],
  templateUrl: './Catalogo.component.html',
  styleUrls: ['./Catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  todosOsJogos: Jogo[] = JOGOS;
  jogosFiltrados: Jogo[] = [];
  generos: string[] = [];
  generoSelecionado: string | null = null;

  ngOnInit(): void {
    const generosUnicos = new Set(this.todosOsJogos.map(jogo => jogo.genero));
    this.generos = [...generosUnicos].sort();
    this.jogosFiltrados = this.todosOsJogos;
  }

  selecionarGenero(genero: string) {
    this.generoSelecionado = (this.generoSelecionado === genero) ? null : genero;
    this.aplicarFiltros();
  }

  limparFiltros() {
    this.generoSelecionado = null;
    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    if (!this.generoSelecionado) {
      this.jogosFiltrados = this.todosOsJogos;
    } else {
      this.jogosFiltrados = this.todosOsJogos.filter(
        jogo => jogo.genero === this.generoSelecionado
      );
    }
  }
}
