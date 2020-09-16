import { TestBed } from '@angular/core/testing';

import { NhomLoaiCongTrinhService } from './nhom-loai-cong-trinh.service';

describe('NhomLoaiCongTrinhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NhomLoaiCongTrinhService = TestBed.get(NhomLoaiCongTrinhService);
    expect(service).toBeTruthy();
  });
});
