import { TestBed } from '@angular/core/testing';

import { SignalsSimpleStoreService } from './signals-simple-store.service';

describe('SignalsSimpleStoreService', () => {
  let service: SignalsSimpleStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalsSimpleStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
