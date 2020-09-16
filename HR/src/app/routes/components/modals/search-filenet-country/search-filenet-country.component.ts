import { environment } from './../../../../../environments/environment';
import { countryRequestList } from './../../../../utils/constant';
import { CountryManagerService } from './../../../../services/country-manager/country-manager.service';
import { Component, OnInit, Input, Output, EventEmitter, Injector } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { RESPONSE_STATUS_CODES } from '@core';
import { GroupArray } from 'src/app/helpers';

@Component({
  selector: 'app-search-filenet-country',
  templateUrl: './search-filenet-country.component.html',
  styleUrls: ['./search-filenet-country.component.less'],
})
export class SearchFilenetCountryComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() title: string;
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() callBack: EventEmitter<any> = new EventEmitter();
  request: any = {
    ...countryRequestList,
  };
  resCountries: any[] = [];
  flatResCountries: any[] = [];
  loading = false;
  groupBy: any = null;
  appId = '';
  total = 0;
  expandable = false;
  currentPageDataChange($event: any[]): void {}
  nzPageIndexChange(page: number): void {
    this.request.page = page;
    this.fetchCountries();
  }
  nzSortChange(e: any): void {
    this.request.propertyName = e.key;
    this.request.ascending = e.value;
    this.fetchCountries();
  }
  constructor(
    private countryManagerService: CountryManagerService,
    private message: NzMessageService,
  ) {
  }

  ngOnInit() {
    this.fetchCountries();
    this.appId = environment.APPLICATION_ID;
  }

  fetchCountries() {
    this.loading = true;
    const queryModel = {
      fulltextsearch: this.request.fulltextsearch,
    };
    const queryString = encodeURIComponent(JSON.stringify(queryModel));
    const response = this.countryManagerService
      .getCountryByFilterCondition(this.request.page, this.request.size, queryString)
      .subscribe(response => {
        if (response.code === RESPONSE_STATUS_CODES[200]) {
          this.loading = false;
          this.flatResCountries = response.data.content;
          this.resCountries = response.data.content;
          this.total = response.data.totalRecords;
          // if (this.groupBy) {
          //   this.nzOnSearchGroup(this.groupBy);
          // }
          this.parseGroup(this.flatResCountries);
        } else {
          this.message.error(response.message);
        }
      });
  }
  nzOnSearchGroup(e): void {
    this.groupBy = e;
    if (e) {
      this.expandable = true;
    } else {
      this.expandable = false;
    }
    this.parseGroup(this.flatResCountries);
  }
  parseGroup(values): void {
    if (this.expandable && this.groupBy != null) {
      this.resCountries = GroupArray(values, this.groupBy, 'children');
    } else {
      this.resCountries = [...values];
    }
  }
  nzOnSearch(e): void {
    this.request.page = 1;
    this.fetchCountries();
  }
  handleCancel() {
    this.onCancel.emit();
  }
  onSelectRow(item: any) {
    this.callBack.emit(item);
  }
}
