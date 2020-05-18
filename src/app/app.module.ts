import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { environment } from 'src/environments/environment';
import { EdicaoEstiloComponent } from './edicao-estilo/edicao-estilo.component';
import { CadastroEstiloComponent } from './cadastro-estilo/cadastro-estilo.component';

@NgModule({
  declarations: [
    AppComponent,
    EdicaoEstiloComponent,
    CadastroEstiloComponent
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
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
