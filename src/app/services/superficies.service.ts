import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Superficie } from '../models/superficie.model';

@Injectable({
    providedIn: 'root'
})
export class SuperficiesService {

    constructor(private firestore: AngularFirestore) { }

    getObservable(): Observable<Superficie[]> {
        return this.firestore.collection<Superficie>('superficies').valueChanges({ idField: 'id' });
    }

    private convertToSuperficie(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Superficie {

        const dados = document.data();

        const superficie = {
            id: document.id,
            ...dados
        } as Superficie;

        if (dados.dataEdicao) {
            superficie.dataEdicao = dados.dataEdicao.toDate();
        }

        if (dados.dataCadastro) {
            superficie.dataCadastro = dados.dataCadastro.toDate();
        }

        return superficie;

    }

    async add(superficie: Superficie): Promise<Superficie> {

        const documentRef = await this.firestore.collection<Superficie>('superficies').add(superficie);
        const document = await documentRef.get();

        return this.convertToSuperficie(document);

    }

    async get(id: string): Promise<Superficie> {

        const document = await this.firestore.collection<Superficie>('superficies').doc(id).get().toPromise();

        return this.convertToSuperficie(document);

    }

    async update(id: string, superficie: Superficie): Promise<void> {

        await this.firestore.collection<Superficie>('superficies').doc(id).update(superficie);

    }

}
