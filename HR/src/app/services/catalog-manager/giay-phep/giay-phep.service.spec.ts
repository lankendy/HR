/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GiayPhepService } from './giay-phep.service';

describe('Service: GiayPhep', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiayPhepService]
    });
  });

  it('should ...', inject([GiayPhepService], (service: GiayPhepService) => {
    expect(service).toBeTruthy();
  }));
});
