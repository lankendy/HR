/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndicatorManagerService } from './indicator-manager.service';

describe('Service: IndicatorManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicatorManagerService]
    });
  });

  it('should ...', inject([IndicatorManagerService], (service: IndicatorManagerService) => {
    expect(service).toBeTruthy();
  }));
});
