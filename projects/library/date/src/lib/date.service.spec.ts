import { TestBed } from '@angular/core/testing';

import { DateService2 } from './date.service';

describe('DateService', () => {
  let service: DateService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
