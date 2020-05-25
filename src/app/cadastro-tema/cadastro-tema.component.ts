import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { TemasService } from '../services/temas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tema } from '../models/tema.model';

@Component({
    selector: 'app-cadastro-tema',
    templateUrl: './cadastro-tema.component.html',
    styleUrls: ['./cadastro-tema.component.scss']
})
export class CadastroTemaComponent implements OnInit {

    formulario = this.formBuilder.group({
        nome: ['', Validators.required]
    });

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    constructor(
        private formBuilder: FormBuilder,
        private temasService: TemasService,
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

        const novoTema = this.formulario.value as Tema;
        novoTema.dataCadastro = new Date();

        const tema = await this.temasService.add(novoTema);

        console.log('Um novo tema foi salvo ----------------------');
        console.log(tema);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

        this.snackBar.open('Novo tema cadastrado com sucesso!');

    }

    voltar() {
        this.location.back();
    }


}
