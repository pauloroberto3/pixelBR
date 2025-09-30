import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/Home.component';
import { CatalogoComponent } from './pages/Catalogo/Catalogo.component';
import { CarrinhoComponent } from './pages/Carrinho/Carrinho.component';
import { DetalheJogoComponent } from './pages/DetalheJogo/DetalheJogo.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'jogo/:id', component: DetalheJogoComponent },
];