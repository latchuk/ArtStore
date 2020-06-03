import { Component, OnInit } from '@angular/core';
import { ArtesService } from '../services/artes.service';
import { ActivatedRoute } from '@angular/router';
import { Arte } from '../models/arte.model';

interface Imagem {
    url: string;
    arquivo: File;
}

@Component({
    selector: 'app-edicao-lista-imagens-arte',
    templateUrl: './edicao-lista-imagens-arte.component.html',
    styleUrls: ['./edicao-lista-imagens-arte.component.scss']
})
export class EdicaoListaImagensArteComponent implements OnInit {

    carregando: boolean;
    idArte: string;
    arte: Arte;
    descricaoArte: string;
    imagens: Imagem[] = [];

    constructor(
        private actvitedRoute: ActivatedRoute,
        private artesService: ArtesService
    ) { }

    async ngOnInit() {

        this.carregando = true;

        this.idArte = this.actvitedRoute.snapshot.paramMap.get('id');

        this.arte = await this.artesService.get(this.idArte);

        this.descricaoArte = `${this.arte.nome} - ${this.arte.descricao}`;

        if (this.arte.imagens) {

            this.imagens = this.arte.imagens.map<Imagem>(urlImagem => {
                return { url: urlImagem, arquivo: null };
            });

        }

        this.carregando = false;

    }

    adicionarImagens(event: any) {

        const arquivos = event.target.files as FileList;

        for (let index = 0; index < arquivos.length; index++) {

            const arquivo = arquivos[index];

            this.imagens.push({ url: null, arquivo: arquivo });

        }

    }

    async atualizarImagens(url: string) {
        console.log(url);

        // this.arte.imagens = this.imagens.filter(x => x.url).map(x => x.url);

        // console.log(this.arte);

        // await this.artesService.update(this.idArte, this.arte);
    }

}
