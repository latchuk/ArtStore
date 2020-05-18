import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEstiloComponent } from './cadastro-estilo.component';

describe('CadastroEstiloComponent', () => {
  let component: CadastroEstiloComponent;
  let fixture: ComponentFixture<CadastroEstiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEstiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEstiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
