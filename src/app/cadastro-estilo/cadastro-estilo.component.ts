import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { EstilosService } from '../services/estilos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Estilo } from '../models/estilo.model';

@Component({
  selector: 'app-cadastro-estilo',
  templateUrl: './cadastro-estilo.component.html',
  styleUrls: ['./cadastro-estilo.component.scss']
})
export class CadastroEstiloComponent implements OnInit {

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private estilosService: EstilosService,
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

    const novoEstilo = this.formulario.value as Estilo;
    novoEstilo.dataCadastro = new Date();

    const estilo = await this.estilosService.add(novoEstilo);

    console.log('Um novo estilo foi salvo ----------------------');
    console.log(estilo);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

    this.snackBar.open('Novo estilo cadastrado com sucesso!');

  }

  voltar() {
    this.location.back();
  }

}
