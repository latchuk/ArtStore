import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Arte } from '../models/arte.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArtesService {

    constructor(private firestore: AngularFirestore) { }

    getObservable(): Observable<Arte[]> {
        return this.firestore.collection<Arte>('artes').valueChanges({ idField: 'id' });
    }

    private convertToArte(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Arte {

        const dados = document.data();

        const arte = {
            id: document.id,
            ...dados
        } as Arte;

        if (dados.dataEdicao) {
            arte.dataEdicao = dados.dataEdicao.toDate();
        }

        if (dados.dataCadastro) {
            arte.dataCadastro = dados.dataCadastro.toDate();
        }

        return arte;

    }

    async add(estilo: Arte): Promise<Arte> {

        const documentRef = await this.firestore.collection<Arte>('artes').add(estilo);
        const document = await documentRef.get();

        return this.convertToArte(document);

    }

    async get(id: string): Promise<Arte> {

        const document = await this.firestore.collection<Arte>('artes').doc(id).get().toPromise();

        return this.convertToArte(document);

    }

    async update(id: string, arte: Arte): Promise<void> {

        await this.firestore.collection<Arte>('artes').doc(id).update(arte);

    }

}
