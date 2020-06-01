import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoImagemArteComponent } from './edicao-imagem-arte.component';

describe('EdicaoImagemArteComponent', () => {
  let component: EdicaoImagemArteComponent;
  let fixture: ComponentFixture<EdicaoImagemArteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoImagemArteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoImagemArteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
