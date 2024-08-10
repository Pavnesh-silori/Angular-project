import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbacServiceComponent } from './rbac-service.component';

describe('RbacServiceComponent', () => {
  let component: RbacServiceComponent;
  let fixture: ComponentFixture<RbacServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbacServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RbacServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
