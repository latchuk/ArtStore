import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Produto } from './models/produto.model';
import { Estilo } from './models/estilo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ArtStore';

  constructor(private firestore: AngularFirestore) { }

  async ngOnInit() {

    const documento = await this.firestore.collection('produtos')
      .doc('JdDszidbeK0wvJnryaP9')
      .get()
      .toPromise();

    const produto = {
      id: documento.id,
      ...documento.data()
    } as Produto;

    console.log(produto);

    const documentoEstilo = await this.firestore.collection('estilos')
      .doc(produto.idEstilo)
      .get()
      .toPromise();

    const estilo = {
      id: documentoEstilo.id,
      ...documentoEstilo.data()
    } as Estilo;

    console.log('Nome do produto: ' + produto.nome);
    console.log('Descrição do estilo: ' + estilo.descricao);

  }

}
