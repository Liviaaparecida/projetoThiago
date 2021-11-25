import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaquetaComponent } from './jaqueta.component';

describe('JaquetaComponent', () => {
  let component: JaquetaComponent;
  let fixture: ComponentFixture<JaquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaquetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
