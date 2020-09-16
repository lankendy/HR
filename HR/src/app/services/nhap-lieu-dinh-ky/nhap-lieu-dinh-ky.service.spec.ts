/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NhapLieuDinhKyService } from './nhap-lieu-dinh-ky.service';

describe('Service: NhapLieuDinhKy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NhapLieuDinhKyService]
    });
  });

  it('should ...', inject([NhapLieuDinhKyService], (service: NhapLieuDinhKyService) => {
    expect(service).toBeTruthy();
  }));
});
