import { TestBed } from '@angular/core/testing';

import { FetchContactService } from './fetch-contact.service';

describe('FetchContactService', () => {
  let service: FetchContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
