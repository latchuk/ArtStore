import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { EstilosService } from '../services/estilos.service';
import { ProdutosService } from '../services/produtos.service';
import { Estilo } from '../models/estilo.model';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {

  estilos: Observable<Estilo[]>;

  formulario = this.formBuilder.group({
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    idEstilo: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private estilosService: EstilosService,
    private produtosService: ProdutosService,
  ) { }

  ngOnInit(): void {
    this.estilos = this.estilosService.getObservable();
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    const novoProduto = this.formulario.value as Produto;
    const produtoSalvo = await this.produtosService.add(novoProduto);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }

}
