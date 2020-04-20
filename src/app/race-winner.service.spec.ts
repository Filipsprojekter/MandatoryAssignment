import { TestBed } from '@angular/core/testing';

import { RaceWinnerService } from './race-winner.service';

describe('RaceWinnerService', () => {
  let service: RaceWinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceWinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
