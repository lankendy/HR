import { Component, OnInit, Input, Output, EventEmitter, Optional, Self, OnChanges, SimpleChanges } from '@angular/core';
import { countryRequestList } from 'src/app/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgControl } from '@angular/forms';
import { CountryManagerService } from 'src/app/services/country-manager/country-manager.service';
import { NzMessageService } from 'ng-zorro-antd';
import { debounceTime } from 'rxjs/operators';
import { RESPONSE_STATUS_CODES } from '@core';

@Component({
  selector: 'app-select-quan-huyen',
  templateUrl: './select-quan-huyen.component.html',
  styleUrls: ['./select-quan-huyen.component.scss']
})
export class SelectQuanHuyenComponent implements OnInit, OnChanges {
  @Input('labelHorizontal') labelHorizontal: boolean = true;
  @Input('labelContent') labelContent: string = "component.base.select.district.label";
  @Input('countryCode') countryCode: string = "vn";
  @Input('valueField') valueField: string = "maQuanHuyen";
  @Input('provinceId') provinceId: number = 1;
  @Input('provinceName') provinceName: string = null;
  @Input('errorTip') errorTip: string;
  @Input('placeHolder') placeHolder: string = "component.base.select.district.placeholder";
  @Input('disabled') disabled: boolean = false;
  @Input('required') required: boolean = false;
  @Input('openSearch') openSearch: boolean = false;
  @Input('name') name: string = "select-province";
  @Input('span') span: number = 16;
  @Input('getObjectValue') getObjectValue: boolean = false;
  @Output('onSelectChange') onSelectChange = new EventEmitter<any>();

  districts: any[] = [];
  showSearchDistrict = false;
  requestDistrict: any = {
    ...countryRequestList,
  };
  searchDistrictChange$ = new BehaviorSubject('');
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private countryManagerService: CountryManagerService,
    private message: NzMessageService,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.fetchDistrictByProvinceCode();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['provinceId']) {
      this.fetchDistrictByProvinceCode();
    }
  }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  fetchDistrictByProvinceCode() {
    const queryModel = {
      fulltextsearch: this.requestDistrict.FullTextSearch,
    };
    const queryString = JSON.stringify(queryModel);
    if (this.provinceId) {
      this.countryManagerService.getDistrictByProvinceId(this.provinceId, 1, 1000, '{}', '{}').subscribe(response => {
        if (response.code === RESPONSE_STATUS_CODES[200]) {
          this.districts = response.data.content;
        } else {
          this.message.error(response.message);
        }
      })
    }
  }
  // -- END FETCH DATA --//


  // -- FILTER ON SELECT --//
  initSearchDistrict() {
    const optionList$: Observable<any> = this.searchDistrictChange$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe(value => {
      this.requestDistrict.FullTextSearch = value;
      this.fetchDistrictByProvinceCode();
    });
  }

  onSearchDistrict(data) {
    this.searchDistrictChange$.next(data);
  }
  // -- END FILTER ON SELECT --//

  // -- MODAL SEARCH -- //
  onClickOpenSearchDistrict() {
    this.showSearchDistrict = true;
  }
  callBackSearchDistrict(data: any) {
    this.showSearchDistrict = false;
    if (this.districts.findIndex(x => x.name == data.name) == -1)
      this.districts.push(data);
    this.ngControl.control.setValue(data.name);

  }
  onCancelSearchCountry() {
    this.showSearchDistrict = false;
  }
  // -- END MODAL SEARCH -- //

  handleSelectChange(value) {
    this.onSelectChange.emit(value);
  }

}
