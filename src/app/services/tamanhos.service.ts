import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tamanho } from '../models/tamanho.model';

@Injectable({
    providedIn: 'root'
})
export class TamanhosService {

    constructor(private firestore: AngularFirestore) { }

    getObservable(): Observable<Tamanho[]> {
        return this.firestore.collection<Tamanho>('tamanhos').valueChanges({ idField: 'id' });
    }

    private convertToTamanho(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Tamanho {

        const dados = document.data();

        const tamanho = {
            id: document.id,
            ...dados
        } as Tamanho;

        if (dados.dataEdicao) {
            tamanho.dataEdicao = dados.dataEdicao.toDate();
        }

        if (dados.dataCadastro) {
            tamanho.dataCadastro = dados.dataCadastro.toDate();
        }

        return tamanho;

    }

    async add(tamanho: Tamanho): Promise<Tamanho> {

        const documentRef = await this.firestore.collection<Tamanho>('tamanhos').add(tamanho);
        const document = await documentRef.get();

        return this.convertToTamanho(document);

    }

    async get(id: string): Promise<Tamanho> {

        const document = await this.firestore.collection<Tamanho>('tamanhos').doc(id).get().toPromise();

        return this.convertToTamanho(document);

    }

    async update(id: string, tamanho: Tamanho): Promise<void> {

        await this.firestore.collection<Tamanho>('tamanhos').doc(id).update(tamanho);

    }

}
