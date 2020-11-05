/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypeSalaryService } from './typeSalary.service';

describe('Service: TypeSalary', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeSalaryService]
    });
  });

  it('should ...', inject([TypeSalaryService], (service: TypeSalaryService) => {
    expect(service).toBeTruthy();
  }));
});
