/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DsChucVuComponent } from './ds-chuc-vu.component';

describe('DsChucVuComponent', () => {
  let component: DsChucVuComponent;
  let fixture: ComponentFixture<DsChucVuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsChucVuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsChucVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
