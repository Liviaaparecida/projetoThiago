import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlusaComponent } from './blusa.component';

describe('BlusaComponent', () => {
  let component: BlusaComponent;
  let fixture: ComponentFixture<BlusaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlusaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlusaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
