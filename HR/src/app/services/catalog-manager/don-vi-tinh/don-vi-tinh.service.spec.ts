import { TestBed } from '@angular/core/testing';

import { DonViTinhService } from './don-vi-tinh.service';

describe('DonViTinhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonViTinhService = TestBed.get(DonViTinhService);
    expect(service).toBeTruthy();
  });
});
