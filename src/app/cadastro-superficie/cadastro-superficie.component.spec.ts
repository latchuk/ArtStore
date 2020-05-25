import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSuperficieComponent } from './cadastro-superficie.component';

describe('CadastroSuperficieComponent', () => {
  let component: CadastroSuperficieComponent;
  let fixture: ComponentFixture<CadastroSuperficieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSuperficieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSuperficieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
