import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEfetivoComponent } from './cadastro-efetivo.component';

describe('CadastroEfetivoComponent', () => {
  let component: CadastroEfetivoComponent;
  let fixture: ComponentFixture<CadastroEfetivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroEfetivoComponent]
    });
    fixture = TestBed.createComponent(CadastroEfetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
