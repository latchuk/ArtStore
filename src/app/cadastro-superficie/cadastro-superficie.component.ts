import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, Validators, FormBuilder } from '@angular/forms';
import { SuperficiesService } from '../services/superficies.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Superficie } from '../models/superficie.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-cadastro-superficie',
    templateUrl: './cadastro-superficie.component.html',
    styleUrls: ['./cadastro-superficie.component.scss']
})
export class CadastroSuperficieComponent implements OnInit {

    formulario = this.formBuilder.group({
        nome: ['', Validators.required]
    });

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    constructor(
        private formBuilder: FormBuilder,
        private superficiesService: SuperficiesService,
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

        const novaSuperficie = this.formulario.value as Superficie;
        novaSuperficie.dataCadastro = new Date();

        const superficie = await this.superficiesService.add(novaSuperficie);

        console.log('Uma nova superfície foi salva ----------------------');
        console.log(superficie);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

        this.snackBar.open('Nova superfície cadastrada com sucesso!');

    }

    voltar() {
        this.location.back();
    }

}
