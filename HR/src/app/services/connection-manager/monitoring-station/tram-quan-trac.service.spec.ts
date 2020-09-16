import { TestBed } from '@angular/core/testing';

import { TramQuanTracService } from './tram-quan-trac.service';

describe('TramQuanTracService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TramQuanTracService = TestBed.get(TramQuanTracService);
    expect(service).toBeTruthy();
  });
});
