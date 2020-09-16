import { TestBed } from '@angular/core/testing';

import { ThongSoService } from './thong-so.service';

describe('ThongSoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThongSoService = TestBed.get(ThongSoService);
    expect(service).toBeTruthy();
  });
});
