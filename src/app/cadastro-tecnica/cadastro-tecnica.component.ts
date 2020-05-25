import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { TecnicasService } from '../services/tecnicas.service';
import { Tecnica } from '../models/tecnica.model';

@Component({
    selector: 'app-cadastro-tecnica',
    templateUrl: './cadastro-tecnica.component.html',
    styleUrls: ['./cadastro-tecnica.component.scss']
})
export class CadastroTecnicaComponent implements OnInit {

    formulario = this.formBuilder.group({
        nome: ['', Validators.required]
    });

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    constructor(
        private formBuilder: FormBuilder,
        private tecnicasService: TecnicasService,
        private snackBar: MatSnackBar,
        private location: Location,
    ) { }

    ngOnInit(): void {
    }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const novaTecnica = this.formulario.value as Tecnica;
        novaTecnica.dataCadastro = new Date();

        const tecnica = await this.tecnicasService.add(novaTecnica);

        console.log('Uma nova tecnica foi salva ----------------------');
        console.log(tecnica);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

        this.snackBar.open('Nova tecnica cadastrada com sucesso!');

    }

    voltar() {
        this.location.back();
    }

}
