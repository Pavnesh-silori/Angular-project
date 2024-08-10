import { TestBed } from '@angular/core/testing';

import { NetzeroService } from './netzero.service';

describe('NetzeroService', () => {
  let service: NetzeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetzeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
