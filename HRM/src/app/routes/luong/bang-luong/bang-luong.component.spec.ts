/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BangLuongComponent } from './bang-luong.component';

describe('BangLuongComponent', () => {
  let component: BangLuongComponent;
  let fixture: ComponentFixture<BangLuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangLuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
