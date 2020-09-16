import { TestBed } from '@angular/core/testing';

import { LoaiHinhGiayPhepService } from './loai-hinh-giay-phep.service';

describe('LoaiHinhGiayPhepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaiHinhGiayPhepService = TestBed.get(LoaiHinhGiayPhepService);
    expect(service).toBeTruthy();
  });
});
