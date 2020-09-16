/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelectQuanHuyenComponent } from './select-quan-huyen.component';

describe('SelectQuanHuyenComponent', () => {
  let component: SelectQuanHuyenComponent;
  let fixture: ComponentFixture<SelectQuanHuyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectQuanHuyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectQuanHuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
