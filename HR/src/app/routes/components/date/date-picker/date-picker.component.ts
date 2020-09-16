import { debounceTime } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Component, Input, Self, Optional, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less']
})
export class DatePickerComponent implements ControlValueAccessor {
  @Input('labelContent') labelContent: string;
  @Input('errorTip') errorTip: string;
  @Input('disabled') disabled: boolean = false;
  @Input('required') required: boolean = false;
  @Input('name') name: string = "birthdate";
  @Input('span') span: number = 16;
  @Input('format') format: string = "DD/MM/YYYY";
  @Input('hideLabel') hideLabel: boolean = false;
  @Input('labelHorizontal') labelHorizontal: boolean = true;

  @Output('onChange') onChange: EventEmitter<Date> = new EventEmitter<Date>();

  date: string;
  dateChange$ = new BehaviorSubject<Date>(null);

  constructor(
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.initDateChange();
  }

  writeValue(obj: any): void {
    if (this.ngControl.control && obj && obj != "Invalid Date") {
      this.date = formatDate(new Date(obj), "yyyy-MM-dd", 'en_US');
    }
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  initDateChange() {
    const optionList$: Observable<any> = this.dateChange$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe((value: Date) => {
      if (!value || value.toString() == "Invalid Date") {
        this.ngControl.control.setValue(null);
      }
      else {
        this.ngControl.control.setValue(value);
      }
      this.onChange.emit(this.ngControl.control.value);
    });
  }

  onChangeDate(event) {
    let value = new Date(event.target.value);
    this.dateChange$.next(value);
  }
}
