import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { TamanhosService } from '../services/tamanhos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Tamanho } from '../models/tamanho.model';
import { CustomValidators } from '../validators/custom-validators';

@Component({
    selector: 'app-cadastro-tamanho',
    templateUrl: './cadastro-tamanho.component.html',
    styleUrls: ['./cadastro-tamanho.component.scss']
})
export class CadastroTamanhoComponent implements OnInit {

    formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        largura: ['', [Validators.required, CustomValidators.number]],
        altura: ['', [Validators.required, CustomValidators.number]]
    });

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    constructor(
        private formBuilder: FormBuilder,
        private tamanhosService: TamanhosService,
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

        const novoTamanho = this.formulario.value as Tamanho;
        novoTamanho.dataCadastro = new Date();

        const tamanho = await this.tamanhosService.add(novoTamanho);

        console.log('Um novo tamanho foi salvo ----------------------');
        console.log(tamanho);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

        this.snackBar.open('Novo tamanho cadastrado com sucesso!');

    }

    voltar() {
        this.location.back();
    }

}
