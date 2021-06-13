import { TestBed } from '@angular/core/testing';

import { PlayersDataService } from './players-data.service';

describe('PlayersDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayersDataService = TestBed.get(PlayersDataService);
    expect(service).toBeTruthy();
  });
});
