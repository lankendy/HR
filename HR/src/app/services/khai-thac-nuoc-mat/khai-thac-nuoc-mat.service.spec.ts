/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KhaiThacNuocMatService } from './khai-thac-nuoc-mat.service';

describe('Service: KhaiThacNuocMat', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KhaiThacNuocMatService]
    });
  });

  it('should ...', inject([KhaiThacNuocMatService], (service: KhaiThacNuocMatService) => {
    expect(service).toBeTruthy();
  }));
});
