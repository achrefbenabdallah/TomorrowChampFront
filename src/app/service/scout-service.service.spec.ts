import { TestBed } from '@angular/core/testing';

import { ScoutServiceService } from './scout-service.service';

describe('ScoutServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoutServiceService = TestBed.get(ScoutServiceService);
    expect(service).toBeTruthy();
  });
});
