import { TestBed } from '@angular/core/testing';

import { SecurityuserService } from './securityuser.service';

describe('SecurityuserService', () => {
  let service: SecurityuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
