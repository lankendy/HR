/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThemHoaDonComponent } from './them-hoa-don.component';

describe('ThemHoaDonComponent', () => {
  let component: ThemHoaDonComponent;
  let fixture: ComponentFixture<ThemHoaDonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemHoaDonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemHoaDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
