import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculetteComponent } from './calculette.component';

describe('CalculetteComponent', () => {
  let component: CalculetteComponent;
  let fixture: ComponentFixture<CalculetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculetteComponent]
    });
    fixture = TestBed.createComponent(CalculetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
