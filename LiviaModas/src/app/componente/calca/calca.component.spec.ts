import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcaComponent } from './calca.component';

describe('CalcaComponent', () => {
  let component: CalcaComponent;
  let fixture: ComponentFixture<CalcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
