import { Component, OnInit, Input, Output, EventEmitter, Optional, Self, OnChanges, SimpleChanges } from '@angular/core';
import { countryRequestList } from 'src/app/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgControl } from '@angular/forms';
import { CountryManagerService } from 'src/app/services/country-manager/country-manager.service';
import { NzMessageService } from 'ng-zorro-antd';
import { debounceTime } from 'rxjs/operators';
import { RESPONSE_STATUS_CODES } from '@core';

@Component({
  selector: 'app-select-phuong-xa',
  templateUrl: './select-phuong-xa.component.html',
  styleUrls: ['./select-phuong-xa.component.scss']
})
export class SelectPhuongXaComponent implements OnInit, OnChanges {
  @Input('labelHorizontal') labelHorizontal: boolean = true;
  @Input('labelContent') labelContent: string = "component.base.select.wards.label";
  @Input('countryCode') countryCode: string = "vn";
  @Input('valueField') valueField: string = "maPhuongXa";
  @Input('provinceId') provinceId: number = null;
  @Input('districtId') districtId: number = null;
  @Input('errorTip') errorTip: string;
  @Input('placeHolder') placeHolder: string = "component.base.select.wards.placeholder";
  @Input('disabled') disabled: boolean = false;
  @Input('required') required: boolean = false;
  @Input('openSearch') openSearch: boolean = false;
  @Input('name') name: string = "select-province";
  @Input('span') span: number = 16;
  @Input('getObjectValue') getObjectValue: boolean = false;
  @Output('onSelectChange') onSelectChange = new EventEmitter<any>();

  wards: any[] = [];
  showSearchCountry = false;
  requestProvince: any = {
    ...countryRequestList,
  };
  searchCountryChange$ = new BehaviorSubject('');

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
    this.fetchWardsByCountryCode();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['districtId']) {
      this.fetchWardsByCountryCode();
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

  // -- FETCH DATA --//
  fetchWardsByCountryCode() {
    const queryModel = {
      fulltextsearch: this.requestProvince.FullTextSearch,
    };
    const queryString = JSON.stringify(queryModel);
    if (this.provinceId && this.districtId) {
      this.countryManagerService.getWardsByDistrictIdAndProvinceId(this.provinceId, this.districtId, 1, 1000, '{}', '{}').subscribe(response => {
        if (response.code === RESPONSE_STATUS_CODES[200]) {
          this.wards = response.data.content;
        } else {
          this.message.error(response.message);
        }
      });
    }
  }
  // -- END FETCH DATA --//


  // -- FILTER ON SELECT --//
  initSearchCountry() {
    const optionList$: Observable<any> = this.searchCountryChange$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe(value => {
      this.requestProvince.FullTextSearch = value;
      this.fetchWardsByCountryCode();
    });
  }

  onSearchCountry(data) {
    this.searchCountryChange$.next(data);
  }
  // -- END FILTER ON SELECT --//

  // -- MODAL SEARCH -- //
  onClickOpenSearchCountry() {
    this.showSearchCountry = true;
  }
  callBackSearchCountry(data: any) {
    this.showSearchCountry = false;
    if (this.wards.findIndex(x => x.wardCode == data.wardCode) == -1)
      this.wards.push(data);
    this.ngControl.control.setValue(data.wardCode);

  }
  onCancelSearchCountry() {
    this.showSearchCountry = false;
  }
  // -- END MODAL SEARCH -- //

  handleSelectChange(value) {
    this.onSelectChange.emit(value);
  }

}
