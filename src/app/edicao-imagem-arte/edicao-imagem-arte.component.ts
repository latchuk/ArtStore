import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-edicao-imagem-arte',
    templateUrl: './edicao-imagem-arte.component.html',
    styleUrls: ['./edicao-imagem-arte.component.scss']
})
export class EdicaoImagemArteComponent implements OnInit, OnDestroy {

    @Input() url: string;
    @Input() arquivo: File;
    @Input() idArte: string;

    @Output() fileUploded: EventEmitter<string> = new EventEmitter();

    progressoEnvio: number;

    private fileReference: AngularFireStorageReference;
    private uploadTask: AngularFireUploadTask;

    private percentageChangesSubscription: Subscription;
    private snapshotChangesSubscription: Subscription;

    constructor(private fireStorage: AngularFireStorage) { }

    ngOnInit(): void {

        if (this.url || !this.arquivo) {
            return;
        }

        const nome = `${this.idArte}_${new Date().getTime()}_${this.arquivo.name}`;

        console.log(nome);
        console.log('Iniciou o upload');

        this.fileReference = this.fireStorage.ref(nome);
        this.uploadTask = this.fireStorage.upload(nome, this.arquivo);

        this.percentageChangesSubscription = this.uploadTask.percentageChanges()
            .subscribe(x => {
                console.log(x);
                this.progressoEnvio = x;
            });

        this.snapshotChangesSubscription = this.uploadTask.snapshotChanges()
            .pipe(finalize(() => this.uploadFinalizado()))
            .subscribe();

    }

    ngOnDestroy(): void {

        this.uploadTask.cancel();

        if (this.percentageChangesSubscription) {
            this.percentageChangesSubscription.unsubscribe();
        }

        if (this.snapshotChangesSubscription) {
            this.percentageChangesSubscription.unsubscribe();
        }

    }

    private async uploadFinalizado() {

        const url = await this.fileReference.getDownloadURL().toPromise();

        this.url = url;
        this.arquivo = null;

        this.fileUploded.emit(url);

    }

}
