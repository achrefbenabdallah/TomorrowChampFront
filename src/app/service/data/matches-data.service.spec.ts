import { TestBed } from '@angular/core/testing';

import { MatchesDataService } from './matches-data.service';

describe('MatchesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchesDataService = TestBed.get(MatchesDataService);
    expect(service).toBeTruthy();
  });
});
