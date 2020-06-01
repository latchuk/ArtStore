import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EstilosService } from '../services/estilos.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Estilo } from '../models/estilo.model';

@Component({
    selector: 'app-edicao-estilo',
    templateUrl: './edicao-estilo.component.html',
    styleUrls: ['./edicao-estilo.component.scss']
})
export class EdicaoEstiloComponent implements OnInit {

    idEstilo: string;
    estilo: Estilo;

    formulario = this.formBuilder.group({
        nome: ['', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder,
        private estilosService: EstilosService,
        private activedRoute: ActivatedRoute,
        private snackBar: MatSnackBar,
        private location: Location,
    ) { }

    async ngOnInit() {

        this.formulario.disable();

        this.idEstilo = this.activedRoute.snapshot.paramMap.get('id');
        this.estilo = await this.estilosService.get(this.idEstilo);

        this.formulario.patchValue(this.estilo);

        this.formulario.enable();

    }

    async submit() {

        if (!this.formulario.valid || !this.estilo) {
            return;
        }

        this.formulario.disable();

        const estiloEditado = this.formulario.value as Estilo;
        estiloEditado.dataEdicao = new Date();

        await this.estilosService.update(this.idEstilo, estiloEditado);

        console.log('Um estilo foi editado -------------------------');
        console.log('Estilo:');
        console.log(this.estilo);
        console.log('Campos atualizados:');
        console.log(estiloEditado);


        Object.assign(this.estilo, estiloEditado);

        this.formulario.enable();

        this.snackBar.open('Estilo atualizado com sucesso!');

    }

    voltar() {
        this.location.back();
    }

}
