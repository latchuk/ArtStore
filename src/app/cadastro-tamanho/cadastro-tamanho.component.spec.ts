import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTamanhoComponent } from './cadastro-tamanho.component';

describe('CadastroTamanhoComponent', () => {
  let component: CadastroTamanhoComponent;
  let fixture: ComponentFixture<CadastroTamanhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTamanhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTamanhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
