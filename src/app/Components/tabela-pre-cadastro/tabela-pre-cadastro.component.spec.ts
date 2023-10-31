import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPreCadastroComponent } from './tabela-pre-cadastro.component';

describe('TabelaPreCadastroComponent', () => {
  let component: TabelaPreCadastroComponent;
  let fixture: ComponentFixture<TabelaPreCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaPreCadastroComponent]
    });
    fixture = TestBed.createComponent(TabelaPreCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
