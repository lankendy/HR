/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DangKiLichLamViecComponent } from './dang-ki-lich-lam-viec.component';

describe('DangKiLichLamViecComponent', () => {
  let component: DangKiLichLamViecComponent;
  let fixture: ComponentFixture<DangKiLichLamViecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangKiLichLamViecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangKiLichLamViecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
