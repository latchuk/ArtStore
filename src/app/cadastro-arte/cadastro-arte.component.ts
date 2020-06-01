import { Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
    selector: 'app-cadastro-arte',
    templateUrl: './cadastro-arte.component.html',
    styleUrls: ['./cadastro-arte.component.scss']
})
export class CadastroArteComponent implements OnInit {

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

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

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
    ) { }

    ngOnInit(): void {
        this.temas = this.temasService.getObservable();
        this.estilos = this.estilosService.getObservable();
        this.tecnicas = this.tecnicasService.getObservable();
        this.tamanhos = this.tamanhosService.getObservable();
        this.superficies = this.superficiesService.getObservable();
    }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const novaArte = this.formulario.value as Arte;
        novaArte.dataCadastro = new Date();

        const arte = await this.artesService.add(novaArte);

        console.log('Uma nova arte foi salva ----------------------');
        console.log(arte);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

        this.snackBar.open('Nova arte cadastrada com sucesso!');

    }

    voltar() {
        this.location.back();
    }

}
