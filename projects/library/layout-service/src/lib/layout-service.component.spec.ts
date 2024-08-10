import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutServiceComponent } from './layout-service.component';

describe('LayoutServiceComponent', () => {
  let component: LayoutServiceComponent;
  let fixture: ComponentFixture<LayoutServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
