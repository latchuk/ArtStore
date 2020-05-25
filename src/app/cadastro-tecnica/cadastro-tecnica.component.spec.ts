import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTecnicaComponent } from './cadastro-tecnica.component';

describe('CadastroTecnicaComponent', () => {
  let component: CadastroTecnicaComponent;
  let fixture: ComponentFixture<CadastroTecnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTecnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
