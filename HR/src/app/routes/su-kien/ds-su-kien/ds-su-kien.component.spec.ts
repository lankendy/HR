/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DsSuKienComponent } from './ds-su-kien.component';

describe('DsSuKienComponent', () => {
  let component: DsSuKienComponent;
  let fixture: ComponentFixture<DsSuKienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsSuKienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsSuKienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
