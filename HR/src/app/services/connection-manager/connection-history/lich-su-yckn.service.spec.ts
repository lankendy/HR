import { TestBed } from '@angular/core/testing';

import { LichSuYCKNService } from './lich-su-yckn.service';

describe('LichSuYCKNService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LichSuYCKNService = TestBed.get(LichSuYCKNService);
    expect(service).toBeTruthy();
  });
});
