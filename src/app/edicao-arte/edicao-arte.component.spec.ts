import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoArteComponent } from './edicao-arte.component';

describe('EdicaoProdutoComponent', () => {
    let component: EdicaoArteComponent;
    let fixture: ComponentFixture<EdicaoArteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EdicaoArteComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EdicaoArteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
