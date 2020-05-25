import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroEstiloComponent } from './cadastro-estilo/cadastro-estilo.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { EdicaoEstiloComponent } from './edicao-estilo/edicao-estilo.component';
import { CadastroSuperficieComponent } from './cadastro-superficie/cadastro-superficie.component';
import { CadastroTamanhoComponent } from './cadastro-tamanho/cadastro-tamanho.component';
import { CadastroTecnicaComponent } from './cadastro-tecnica/cadastro-tecnica.component';
import { CadastroTemaComponent } from './cadastro-tema/cadastro-tema.component';
import { EdicaoProdutoComponent } from './edicao-produto/edicao-produto.component';


const routes: Routes = [

    { path: 'estilos/cadastro', component: CadastroEstiloComponent },
    { path: 'superficies/cadastro', component: CadastroSuperficieComponent },
    { path: 'tamanhos/cadastro', component: CadastroTamanhoComponent },
    { path: 'tecnicas/cadastro', component: CadastroTecnicaComponent },
    { path: 'temas/cadastro', component: CadastroTemaComponent },
    { path: 'produtos/cadastro', component: CadastroProdutoComponent },

    { path: 'estilos/:id/edicao', component: EdicaoEstiloComponent },
    { path: 'produtos/:id/edicao', component: EdicaoProdutoComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
