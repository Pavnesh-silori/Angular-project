import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationServiceComponent } from './organization-service.component';

describe('OrganizationServiceComponent', () => {
  let component: OrganizationServiceComponent;
  let fixture: ComponentFixture<OrganizationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
