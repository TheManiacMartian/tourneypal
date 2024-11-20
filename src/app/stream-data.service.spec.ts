import { TestBed } from '@angular/core/testing';

import { StreamDataService } from './stream-data.service';

describe('StreamDataService', () => {
  let service: StreamDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
