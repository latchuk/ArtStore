import { Component, OnInit } from '@angular/core';
import { ArtesService } from '../services/artes.service';
import { ActivatedRoute } from '@angular/router';

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
    descricaoArte: string;
    imagens: Imagem[] = [];

    constructor(
        private actvitedRoute: ActivatedRoute,
        private artesService: ArtesService
    ) { }

    async ngOnInit() {

        this.carregando = true;

        this.idArte = this.actvitedRoute.snapshot.paramMap.get('id');

        const arte = await this.artesService.get(this.idArte);

        this.descricaoArte = `${arte.nome} - ${arte.descricao}`;

        if (arte.imagens) {

            this.imagens = arte.imagens.map<Imagem>(urlImagem => {
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

}
