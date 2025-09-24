import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Jogo {
  id: number;
  titulo: string;
  descricao: string;
  genero: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private url = 'assets/games.json';

  constructor(private http: HttpClient) {}

  obterJogos(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(this.url);
  }
}
