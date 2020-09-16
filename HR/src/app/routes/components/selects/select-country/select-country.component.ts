import { debounceTime } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
import { RESPONSE_STATUS_CODES } from './../../../../core/net/default.interceptor';
import { CountryManagerService } from './../../../../services/country-manager/country-manager.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { countryRequestList } from './../../../../utils/constant';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Component, Input, OnInit, Self, Output, Optional } from '@angular/core';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.less']
})
export class SelectCountryComponent implements ControlValueAccessor, OnInit {
  @Input('labelContent') labelContent: string = "component.base.select.country.label";
  @Input('errorTip') errorTip: string;
  @Input('placeHolder') placeHolder: string = "component.base.select.country.place-holder";
  @Input('disabled') disabled: boolean = false;
  @Input('required') required: boolean = false;
  @Input('openSearch') openSearch: boolean = false;
  @Input('name') name: string = "select-country";
  @Input('span') span: number = 16;

  countries: any[] = [];
  showSearchCountry = false;
  requestCountry: any = {
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
    this.initSearchCountry();
  }

  writeValue(obj: any): void {
    if (obj && this.countries.filter(x => x.countryCode == obj).length == 0) {
      this.countryManagerService.getCountryByCountryCode(obj).toPromise().then(response => {
        if (response.code === RESPONSE_STATUS_CODES[200]) {
          this.countries.push(response.data)
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

  // -- FETCH DATA --//
  fetchCountries() {
    const queryModel = {
      fulltextsearch: this.requestCountry.FullTextSearch,
    };
    const queryString = JSON.stringify(queryModel);
    this.countryManagerService.getCountryByFilterCondition(1, 7, queryString).subscribe(response => {
      if (response.code === RESPONSE_STATUS_CODES[200]) {
        this.countries = response.data.content;
      } else {
        this.message.error(response.message);
      }
    });
  }
  // -- END FETCH DATA --//


  // -- FILTER ON SELECT --//
  initSearchCountry() {
    const optionList$: Observable<any> = this.searchCountryChange$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe(value => {
      this.requestCountry.FullTextSearch = value;
      this.fetchCountries();
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

}
