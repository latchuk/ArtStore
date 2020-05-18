import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { EstilosService } from '../services/estilos.service';
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
  ) { }

  ngOnInit(): void {
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    const estilo = this.formulario.value as Estilo;
    const estiloRetorno = await this.estilosService.add(estilo);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }

}
