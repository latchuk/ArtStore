import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoEstiloComponent } from './edicao-estilo.component';

describe('EdicaoEstiloComponent', () => {
  let component: EdicaoEstiloComponent;
  let fixture: ComponentFixture<EdicaoEstiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoEstiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoEstiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
