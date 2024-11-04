import { TestBed } from '@angular/core/testing';

import { TourneyService } from './tourney.service';

describe('TourneyService', () => {
  let service: TourneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
