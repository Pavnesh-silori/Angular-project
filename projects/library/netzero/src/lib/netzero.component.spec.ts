import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetzeroComponent } from './netzero.component';

describe('NetzeroComponent', () => {
  let component: NetzeroComponent;
  let fixture: ComponentFixture<NetzeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetzeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetzeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
