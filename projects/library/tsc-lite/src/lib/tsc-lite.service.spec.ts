import { TestBed } from '@angular/core/testing';

import { TscLiteService } from './tsc-lite.service';

describe('TscLiteService', () => {
  let service: TscLiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TscLiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
