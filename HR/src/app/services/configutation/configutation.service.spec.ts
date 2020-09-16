import { TestBed } from '@angular/core/testing';

import { ConfigutationService } from './configutation.service';

describe('ConfigutationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigutationService = TestBed.get(ConfigutationService);
    expect(service).toBeTruthy();
  });
});
