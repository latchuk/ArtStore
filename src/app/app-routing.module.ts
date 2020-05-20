import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroEstiloComponent } from './cadastro-estilo/cadastro-estilo.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { EdicaoEstiloComponent } from './edicao-estilo/edicao-estilo.component';


const routes: Routes = [

  { path: 'estilos/cadastro', component: CadastroEstiloComponent },
  { path: 'estilos/:id/edicao', component: EdicaoEstiloComponent },
  { path: 'produtos/cadastro', component: CadastroProdutoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
