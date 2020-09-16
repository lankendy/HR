import { TestBed } from '@angular/core/testing';

import { TanXuatService } from './tan-xuat.service';

describe('TanXuatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TanXuatService = TestBed.get(TanXuatService);
    expect(service).toBeTruthy();
  });
});
