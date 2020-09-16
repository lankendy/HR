import { TestBed } from '@angular/core/testing';

import { PhuongXaService } from './phuong-xa.service';

describe('PhuongXaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhuongXaService = TestBed.get(PhuongXaService);
    expect(service).toBeTruthy();
  });
});
