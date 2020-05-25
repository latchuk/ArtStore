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

    private convertToEstilo(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Estilo {

        const dados = document.data();

        const estilo = {
            id: document.id,
            ...dados
        } as Estilo;

        if (dados.dataEdicao) {
            estilo.dataEdicao = dados.dataEdicao.toDate();
        }

        if (dados.dataCadastro) {
            estilo.dataCadastro = dados.dataCadastro.toDate();
        }

        return estilo;

    }

    async add(estilo: Estilo): Promise<Estilo> {

        const documentRef = await this.firestore.collection<Estilo>('estilos').add(estilo);
        const document = await documentRef.get();

        return this.convertToEstilo(document);

    }

    async get(id: string): Promise<Estilo> {

        const document = await this.firestore.collection<Estilo>('estilos').doc(id).get().toPromise();

        return this.convertToEstilo(document);

    }

    async update(id: string, estilo: Estilo): Promise<void> {

        await this.firestore.collection<Estilo>('estilos').doc(id).update(estilo);

    }

}
