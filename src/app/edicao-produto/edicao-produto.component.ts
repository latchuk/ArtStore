import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { EstilosService } from '../services/estilos.service';
import { ArtesService } from '../services/artes.service';
import { Estilo } from '../models/estilo.model';
import { Observable } from 'rxjs';
import { Arte } from '../models/arte.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { SuperficiesService } from '../services/superficies.service';
import { TamanhosService } from '../services/tamanhos.service';
import { TecnicasService } from '../services/tecnicas.service';
import { TemasService } from '../services/temas.service';
import { Superficie } from '../models/superficie.model';
import { Tamanho } from '../models/tamanho.model';
import { Tecnica } from '../models/tecnica.model';
import { Tema } from '../models/tema.model';
import { CustomValidators } from '../validators/custom-validators';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edicao-produto',
    templateUrl: './edicao-produto.component.html',
    styleUrls: ['./edicao-produto.component.scss']
})
export class EdicaoProdutoComponent implements OnInit {

    idProduto: string;
    produto: Arte;

    temas: Observable<Tema[]>;
    estilos: Observable<Estilo[]>;
    tecnicas: Observable<Tecnica[]>;
    tamanhos: Observable<Tamanho[]>;
    superficies: Observable<Superficie[]>;

    formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        descricao: ['', Validators.required],
        valor: ['', [Validators.required, CustomValidators.number]],
        idTema: ['', Validators.required],
        idEstilo: ['', Validators.required],
        idTecnica: ['', Validators.required],
        idTamanho: ['', Validators.required],
        idSuperficie: ['', Validators.required],
    });

    constructor(
        private formBuilder: FormBuilder,
        private temasService: TemasService,
        private estilosService: EstilosService,
        private tecnicasService: TecnicasService,
        private tamanhosService: TamanhosService,
        private superficiesService: SuperficiesService,
        private artesService: ArtesService,
        private snackBar: MatSnackBar,
        private location: Location,
        private activedRoute: ActivatedRoute,
    ) { }

    async ngOnInit() {
        this.temas = this.temasService.getObservable();
        this.estilos = this.estilosService.getObservable();
        this.tecnicas = this.tecnicasService.getObservable();
        this.tamanhos = this.tamanhosService.getObservable();
        this.superficies = this.superficiesService.getObservable();

        this.idProduto = this.activedRoute.snapshot.paramMap.get('id');
        this.produto = await this.artesService.get(this.idProduto);

        this.formulario.patchValue(this.produto);
    }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const arteEditada = this.formulario.value as Arte;
        arteEditada.dataEdicao = new Date();

        const arte = await this.artesService.update(this.idProduto, arteEditada);

        console.log('Um arte foi editada -------------------------');
        console.log('Arte:');
        console.log(this.produto);
        console.log('Campos atualizados:');
        console.log(arteEditada);

        Object.assign(this.produto, arteEditada);

        this.formulario.enable();

        this.snackBar.open('Arte atualizada com sucesso!');

    }

    voltar() {
        this.location.back();
    }

}
