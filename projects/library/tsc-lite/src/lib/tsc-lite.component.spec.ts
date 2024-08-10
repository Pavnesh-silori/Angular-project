import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TscLiteComponent } from './tsc-lite.component';

describe('TscLiteComponent', () => {
  let component: TscLiteComponent;
  let fixture: ComponentFixture<TscLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TscLiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TscLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
