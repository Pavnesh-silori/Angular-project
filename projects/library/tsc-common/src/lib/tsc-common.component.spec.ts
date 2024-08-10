import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TscCommonComponent } from './tsc-common.component';

describe('TscCommonComponent', () => {
  let component: TscCommonComponent;
  let fixture: ComponentFixture<TscCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TscCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TscCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
