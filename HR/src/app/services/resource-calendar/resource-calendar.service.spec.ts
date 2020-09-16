import { TestBed } from '@angular/core/testing';

import { ResourceCalendarService } from './resource-calendar.service';

describe('ResourceCalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceCalendarService = TestBed.get(ResourceCalendarService);
    expect(service).toBeTruthy();
  });
});
