import { TestBed } from '@angular/core/testing';

import { TscCommonService } from './tsc-common.service';

describe('TscCommonService', () => {
  let service: TscCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TscCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
