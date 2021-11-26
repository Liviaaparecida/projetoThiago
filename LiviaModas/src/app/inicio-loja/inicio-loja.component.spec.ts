import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioLojaComponent } from './inicio-loja.component';

describe('InicioLojaComponent', () => {
  let component: InicioLojaComponent;
  let fixture: ComponentFixture<InicioLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioLojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
