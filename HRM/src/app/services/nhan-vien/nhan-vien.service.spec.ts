/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NhanVienService } from './nhan-vien.service';

describe('Service: NhanVien', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NhanVienService]
    });
  });

  it('should ...', inject([NhanVienService], (service: NhanVienService) => {
    expect(service).toBeTruthy();
  }));
});
