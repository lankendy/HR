import { debounceTime } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
import { RESPONSE_STATUS_CODES } from './../../../../core/net/default.interceptor';
import { CountryManagerService } from './../../../../services/country-manager/country-manager.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { countryRequestList } from './../../../../utils/constant';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Component, Input, OnInit, Self, Output, Optional, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-select-province',
  templateUrl: './select-province.component.html',
  styleUrls: ['./select-province.component.less']
})
export class SelectProvinceComponent implements OnInit {
  @Input('labelHorizontal') labelHorizontal: boolean = true;
  @Input('labelContent') labelContent: string = "component.base.select.province.label";
  @Input('countryCode') countryCode: string = "vn";
  @Input('labelField') labelField: string = "tenTinhThanh";
  @Input('valueField') valueField: string = "maTinhThanh";
  @Input('errorTip') errorTip: string;
  @Input('placeHolder') placeHolder: string = "component.base.select.province.place-holder";
  @Input('disabled') disabled: boolean = false;
  @Input('required') required: boolean = false;
  @Input('openSearch') openSearch: boolean = false;
  @Input('name') name: string = "select-province";
  @Input('span') span: number = 16;
  @Input('getObjectValue') getObjectValue: boolean = false;
  @Input('internalServer') internalServer: boolean = true;
  @Output('onSelectChange') onSelectChange = new EventEmitter<any>();

  countries: any[] = [];
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
    this.fetchProvinceByCountryCode();
    // this.initSearchCountry();
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
  fetchProvinceByCountryCode() {
    const queryModel = {
      fulltextsearch: this.requestProvince.FullTextSearch,
    };
    const queryString = JSON.stringify(queryModel);

    if(this.internalServer){
      this.countryManagerService.getProvince(1, 20, '{}', '{}').subscribe(response => {
        if (response.code === RESPONSE_STATUS_CODES[200]) {
          this.countries = response.data.content;
        } else {
          this.message.error(response.message);
        }
      })
    }
    else{
      this.countryManagerService.getExternalProvince(1, 1000, '{}', '{}').subscribe(response => {
        this.countries = response.data.content;
        console.log(this.countries);
      })
    }
  }
  // -- END FETCH DATA --//


  // -- FILTER ON SELECT --//
  initSearchCountry() {
    const optionList$: Observable<any> = this.searchCountryChange$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe(value => {
      this.requestProvince.FullTextSearch = value;
      this.fetchProvinceByCountryCode();
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
    if (this.countries.findIndex(x => x.countryCode == data.countryCode) == -1)
      this.countries.push(data);
    this.ngControl.control.setValue(data.countryCode);

  }
  onCancelSearchCountry() {
    this.showSearchCountry = false;
  }
  // -- END MODAL SEARCH -- //

  handleSelectChange(value) {
    this.onSelectChange.emit(value);
  }
}
