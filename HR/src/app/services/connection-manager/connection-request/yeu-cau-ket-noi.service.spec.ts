import { TestBed } from '@angular/core/testing';

import { YeuCauKetNoiService } from './yeu-cau-ket-noi.service';

describe('YeuCauKetNoiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YeuCauKetNoiService = TestBed.get(YeuCauKetNoiService);
    expect(service).toBeTruthy();
  });
});
