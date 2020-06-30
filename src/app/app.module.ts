import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Angular locale
import localept from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localept, 'pt');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { environment } from 'src/environments/environment';
import { EdicaoEstiloComponent } from './edicao-estilo/edicao-estilo.component';
import { CadastroEstiloComponent } from './cadastro-estilo/cadastro-estilo.component';
import { CadastroArteComponent } from './cadastro-arte/cadastro-arte.component';
import { CadastroSuperficieComponent } from './cadastro-superficie/cadastro-superficie.component';
import { CadastroTamanhoComponent } from './cadastro-tamanho/cadastro-tamanho.component';
import { CadastroTecnicaComponent } from './cadastro-tecnica/cadastro-tecnica.component';
import { CadastroTemaComponent } from './cadastro-tema/cadastro-tema.component';
import { EdicaoArteComponent } from './edicao-arte/edicao-arte.component';
import { EdicaoListaImagensArteComponent } from './edicao-lista-imagens-arte/edicao-lista-imagens-arte.component';
import { EdicaoImagemArteComponent } from './edicao-imagem-arte/edicao-imagem-arte.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './home/home.component';
import { ArtesComponent } from './artes/artes.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
    declarations: [
        AppComponent,
        EdicaoEstiloComponent,
        CadastroEstiloComponent,
        CadastroArteComponent,
        CadastroSuperficieComponent,
        CadastroTamanhoComponent,
        CadastroTecnicaComponent,
        CadastroTemaComponent,
        EdicaoArteComponent,
        EdicaoListaImagensArteComponent,
        EdicaoImagemArteComponent,
        LoginComponent,
        CadastroUsuarioComponent,
        HomeComponent,
        ArtesComponent,
        CarrinhoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,

        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatDividerModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatMenuModule,
        MatListModule,
        MatCheckboxModule,

    ],
    providers: [
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
        { provide: LOCALE_ID, useValue: 'pt' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
