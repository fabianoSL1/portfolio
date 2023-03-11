import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FetchProjectsService } from './fetch-projects.service';

describe('FetchProjectsService', () => {
  let service: FetchProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(FetchProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
