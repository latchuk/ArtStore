import { Injectable } from '@angular/core';
import { Estilo } from '../models/estilo.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EstilosService {

  constructor(private firestore: AngularFirestore) { }

  async add(estilo: Estilo): Promise<Estilo> {

    const docRef = await this.firestore.collection<Estilo>('estilos').add(estilo);
    const doc = await docRef.get();

    return {
      id: doc.id,
      ...doc.data()
    } as Estilo;

  }

}
