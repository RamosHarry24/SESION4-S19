import { TestBed } from '@angular/core/testing';

import { TofservicesService } from './tofservices.service';

describe('TofservicesService', () => {
  let service: TofservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TofservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
