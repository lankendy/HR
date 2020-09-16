/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TramQuanTracService } from './tram-quan-trac.service';

describe('Service: TramQuanTrac', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TramQuanTracService]
    });
  });

  it('should ...', inject([TramQuanTracService], (service: TramQuanTracService) => {
    expect(service).toBeTruthy();
  }));
});
