/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchWaterQualityReportComponent } from './search-water-quality-report.component';

describe('SearchFilenetArchiveTypeComponent', () => {
  let component: SearchWaterQualityReportComponent;
  let fixture: ComponentFixture<SearchWaterQualityReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWaterQualityReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWaterQualityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
