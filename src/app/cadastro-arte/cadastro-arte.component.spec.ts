import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroArteComponent } from './cadastro-arte.component';

describe('CadastroArteComponent', () => {
    let component: CadastroArteComponent;
    let fixture: ComponentFixture<CadastroArteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CadastroArteComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CadastroArteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
