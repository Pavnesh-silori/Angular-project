import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitServiceComponent } from './unit-service.component';

describe('UnitServiceComponent', () => {
  let component: UnitServiceComponent;
  let fixture: ComponentFixture<UnitServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
