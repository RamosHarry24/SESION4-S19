import { TestBed } from '@angular/core/testing';

import { UserServicesApiService } from './user-services-api.service';

describe('UserServicesApiService', () => {
  let service: UserServicesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServicesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
