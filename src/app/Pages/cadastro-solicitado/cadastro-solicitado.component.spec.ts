import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSolicitadoComponent } from './cadastro-solicitado.component';

describe('CadastroSolicitadoComponent', () => {
  let component: CadastroSolicitadoComponent;
  let fixture: ComponentFixture<CadastroSolicitadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroSolicitadoComponent]
    });
    fixture = TestBed.createComponent(CadastroSolicitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
