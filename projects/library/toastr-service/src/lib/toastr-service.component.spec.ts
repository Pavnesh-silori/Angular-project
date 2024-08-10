import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrServiceComponent } from './toastr-service.component';

describe('ToastrServiceComponent', () => {
  let component: ToastrServiceComponent;
  let fixture: ComponentFixture<ToastrServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastrServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastrServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
