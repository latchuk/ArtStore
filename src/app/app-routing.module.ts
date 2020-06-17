import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroEstiloComponent } from './cadastro-estilo/cadastro-estilo.component';
import { CadastroArteComponent } from './cadastro-arte/cadastro-arte.component';
import { EdicaoEstiloComponent } from './edicao-estilo/edicao-estilo.component';
import { CadastroSuperficieComponent } from './cadastro-superficie/cadastro-superficie.component';
import { CadastroTamanhoComponent } from './cadastro-tamanho/cadastro-tamanho.component';
import { CadastroTecnicaComponent } from './cadastro-tecnica/cadastro-tecnica.component';
import { CadastroTemaComponent } from './cadastro-tema/cadastro-tema.component';
import { EdicaoArteComponent } from './edicao-arte/edicao-arte.component';
import { EdicaoListaImagensArteComponent } from './edicao-lista-imagens-arte/edicao-lista-imagens-arte.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },

    { path: 'usuarios/cadastro', component: CadastroUsuarioComponent },
    { path: 'estilos/cadastro', component: CadastroEstiloComponent },
    { path: 'superficies/cadastro', component: CadastroSuperficieComponent },
    { path: 'tamanhos/cadastro', component: CadastroTamanhoComponent },
    { path: 'tecnicas/cadastro', component: CadastroTecnicaComponent },
    { path: 'temas/cadastro', component: CadastroTemaComponent },
    { path: 'artes/cadastro', component: CadastroArteComponent },

    { path: 'estilos/:id/edicao', component: EdicaoEstiloComponent },
    { path: 'artes/:id/edicao', component: EdicaoArteComponent },
    { path: 'artes/:id/edicao/imagens', component: EdicaoListaImagensArteComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
