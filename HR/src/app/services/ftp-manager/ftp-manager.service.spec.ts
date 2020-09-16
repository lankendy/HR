/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FtpManagerService } from './ftp-manager.service';

describe('Service: FtpManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FtpManagerService]
    });
  });

  it('should ...', inject([FtpManagerService], (service: FtpManagerService) => {
    expect(service).toBeTruthy();
  }));
});
