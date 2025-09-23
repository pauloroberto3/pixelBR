import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/Home.component';
import { CatalogoComponent } from './pages/Catalogo/Catalogo.component';
import { CarrinhoComponent } from './pages/Carrinho/Carrinho.component';
import { DetalheJogoComponent } from './pages/DetalheJogo/DetalheJogo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'jogo/:id', component: DetalheJogoComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
