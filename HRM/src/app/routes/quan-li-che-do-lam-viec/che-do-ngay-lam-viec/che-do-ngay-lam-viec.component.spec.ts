/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheDoNgayLamViecComponent } from './che-do-ngay-lam-viec.component';

describe('CheDoNgayLamViecComponent', () => {
  let component: CheDoNgayLamViecComponent;
  let fixture: ComponentFixture<CheDoNgayLamViecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheDoNgayLamViecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheDoNgayLamViecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
