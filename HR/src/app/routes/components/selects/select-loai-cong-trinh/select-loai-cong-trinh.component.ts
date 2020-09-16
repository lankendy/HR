import { LoaiCongTrinhService } from './../../../../services/catalog-manager/loai-cong-trinh/loai-cong-trinh.service';
import { Component, OnInit, Input, Self, Output, EventEmitter, Optional } from '@angular/core';
import { defaultRequestList } from 'src/app/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { RESPONSE_STATUS_CODES } from '@core';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-select-loai-cong-trinh',
  templateUrl: './select-loai-cong-trinh.component.html',
  styleUrls: ['./select-loai-cong-trinh.component.less']
})
export class SelectLoaiCongTrinhComponent implements ControlValueAccessor, OnInit {
  @Input('labelHorizontal') labelHorizontal: boolean = true;
  @Input('labelContent') labelContent: string = "component.base.select.loai-cong-trinh.label";
  @Input('errorTip') errorTip: string = "component.base.select.loai-cong-trinh.label.require";
  @Input('placeHolder') placeHolder: string = "component.base.select.loai-cong-trinh.label.placeholder";
  @Input('disabled') disabled: boolean = false;
  @Input('required') required: boolean = false;
  @Input('openSearch') openSearch: boolean = false;
  @Input('name') name: string = "select-loai-cong-trinh";
  @Input('span') span: number = 16;
  @Input('getObjectValue') getObjectValue: boolean = false;
  @Input('valueField') valueField = "id"

  @Output('onSelectChange') onSelectChange = new EventEmitter<any>();
  requestLoaiCongTrinh: any = {
    ...defaultRequestList,
  };
  listLoaiCongTrinh: any = [];
  showSearchLoaiCongTrinh = false;
  searchLoaiCongTrinhChange$ = new BehaviorSubject('');
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private loaiCongTrinhService: LoaiCongTrinhService,
    private message: NzMessageService,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.initSearchLoaiCongTrinh();
  }

  writeValue(obj: any): void {
    if (obj && this.listLoaiCongTrinh.filter(x => x.id == obj).length == 0) {
      this.loaiCongTrinhService.getLoaiCongTrinhById(obj).toPromise().then(response => {
        if (response.code === RESPONSE_STATUS_CODES[200]) {
          this.listLoaiCongTrinh.push(response.data)
        } else {
          this.message.error(response.message);
        }
      });
    }
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  fetchLoaiCongTrinh() {
    const queryModel = {
      ListTextSearch: this.requestLoaiCongTrinh.listTextSearch,
      Sort: this.requestLoaiCongTrinh.sort,
      SoGiayPhep: this.requestLoaiCongTrinh.soGiayPhep
    };
    const queryString = JSON.stringify(queryModel);
    this.loaiCongTrinhService.getFilterLoaiCongTrinh(1, 7, queryString).subscribe(response => {
      if (response.code === RESPONSE_STATUS_CODES[200]) {
        this.listLoaiCongTrinh = response.data.content;
      } else {
        this.message.error(response.message);
      }
    });
  }
  // -- END FETCH DATA --//


  // -- FILTER ON SELECT --//
  initSearchLoaiCongTrinh() {
    const optionList$: Observable<any> = this.searchLoaiCongTrinhChange$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe(value => {
      this.requestLoaiCongTrinh.listTextSearch = [value];
      this.fetchLoaiCongTrinh();
    });
  }

  onSearchLoaiCongTrinh(data) {
    this.searchLoaiCongTrinhChange$.next(data);
  }
  // -- END FILTER ON SELECT --//

  // -- HANDLE EVENT -- //
  onClickOpenSearchLoaiCongTrinh() {
    this.showSearchLoaiCongTrinh = true;
  }

  callBackSearchLoaiCongTrinh(data: any) {
    this.showSearchLoaiCongTrinh = false;
    if (this.listLoaiCongTrinh.findIndex(x => x.id == data.id) == -1)
      this.listLoaiCongTrinh.push(data);
    this.ngControl.control.setValue(data.id);
  }

  onCancelSearchLoaiCongTrinh() {
    this.showSearchLoaiCongTrinh = false;
  }

  handleSelectChange(value) {
    this.onSelectChange.emit(value);
  }
  // -- END HANDLE EVENT -- //

}
