import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoListaImagensArteComponent } from './edicao-lista-imagens-arte.component';

describe('EdicaoListaImagensArteComponent', () => {
  let component: EdicaoListaImagensArteComponent;
  let fixture: ComponentFixture<EdicaoListaImagensArteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoListaImagensArteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoListaImagensArteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
