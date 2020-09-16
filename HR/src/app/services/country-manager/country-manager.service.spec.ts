/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountryManagerService } from './country-manager.service';

describe('Service: CountryManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryManagerService]
    });
  });

  it('should ...', inject([CountryManagerService], (service: CountryManagerService) => {
    expect(service).toBeTruthy();
  }));
});
