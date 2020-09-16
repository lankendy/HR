import { TestBed } from '@angular/core/testing';

import { LoaiCongTrinhService } from './loai-cong-trinh.service';

describe('LoaiCongTrinhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaiCongTrinhService = TestBed.get(LoaiCongTrinhService);
    expect(service).toBeTruthy();
  });
});
