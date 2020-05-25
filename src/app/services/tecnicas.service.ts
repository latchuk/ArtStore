import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tecnica } from '../models/tecnica.model';

@Injectable({
    providedIn: 'root'
})
export class TecnicasService {

    constructor(private firestore: AngularFirestore) { }

    getObservable(): Observable<Tecnica[]> {
        return this.firestore.collection<Tecnica>('tecnicas').valueChanges({ idField: 'id' });
    }

    private convertToTecnica(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Tecnica {

        const dados = document.data();

        const tecnica = {
            id: document.id,
            ...dados
        } as Tecnica;

        if (dados.dataEdicao) {
            tecnica.dataEdicao = dados.dataEdicao.toDate();
        }

        if (dados.dataCadastro) {
            tecnica.dataCadastro = dados.dataCadastro.toDate();
        }

        return tecnica;

    }

    async add(tecnica: Tecnica): Promise<Tecnica> {

        const documentRef = await this.firestore.collection<Tecnica>('tecnicas').add(tecnica);
        const document = await documentRef.get();

        return this.convertToTecnica(document);

    }

    async get(id: string): Promise<Tecnica> {

        const document = await this.firestore.collection<Tecnica>('tecnicas').doc(id).get().toPromise();

        return this.convertToTecnica(document);

    }

    async update(id: string, tecnica: Tecnica): Promise<void> {

        await this.firestore.collection<Tecnica>('tecnicas').doc(id).update(tecnica);

    }

}
