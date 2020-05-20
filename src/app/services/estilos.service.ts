import { Injectable } from '@angular/core';
import { Estilo } from '../models/estilo.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstilosService {

  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Estilo[]> {
    return this.firestore.collection<Estilo>('estilos').valueChanges({ idField: 'id' });
  }

  async add(estilo: Estilo): Promise<Estilo> {

    const docRef = await this.firestore.collection<Estilo>('estilos').add(estilo);
    const doc = await docRef.get();

    return {
      id: doc.id,
      ...doc.data()
    } as Estilo;

  }

  async get(id: string): Promise<Estilo> {

    const doc = await this.firestore.collection<Estilo>('estilos').doc(id).get().toPromise();

    return {
      id: doc.id,
      ...doc.data()
    } as Estilo;

  }


}
