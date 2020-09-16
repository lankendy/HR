import { TestBed } from '@angular/core/testing';

import { ResCountryService } from './res-country.service';

describe('UomUomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResCountryService = TestBed.get(ResCountryService);
    expect(service).toBeTruthy();
  });
});
