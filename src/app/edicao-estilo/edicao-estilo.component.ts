import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { EstilosService } from '../services/estilos.service';
import { Estilo } from '../models/estilo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-estilo',
  templateUrl: './edicao-estilo.component.html',
  styleUrls: ['./edicao-estilo.component.scss']
})
export class EdicaoEstiloComponent implements OnInit {

  estilo: Estilo;

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private estilosService: EstilosService,
    private activedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    this.estilo = await this.estilosService.get(id);

    this.formulario.patchValue(this.estilo);

  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    // const estilo = this.formulario.value as Estilo;
    // const estiloRetorno = await this.estilosService.add(estilo);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }

}
