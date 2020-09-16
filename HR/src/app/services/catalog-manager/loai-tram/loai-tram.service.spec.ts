import { TestBed } from '@angular/core/testing';

import { LoaiTramService } from './loai-tram.service';

describe('LoaiTramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaiTramService = TestBed.get(LoaiTramService);
    expect(service).toBeTruthy();
  });
});
