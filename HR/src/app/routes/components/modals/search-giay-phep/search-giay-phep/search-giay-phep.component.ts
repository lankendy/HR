import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { defaultRequestList } from 'src/app/utils';
import { NzMessageService } from 'ng-zorro-antd';
import { environment } from '@env/environment';
import { RESPONSE_STATUS_CODES } from '@core';
import { GroupArray } from 'src/app/helpers';
import { CountryManagerService } from 'src/app/services/country-manager/country-manager.service';
import { GiayPhepService } from 'src/app/services/catalog-manager/giay-phep/giay-phep.service';

@Component({
  selector: 'app-search-giay-phep',
  templateUrl: './search-giay-phep.component.html',
  styleUrls: ['./search-giay-phep.component.scss']
})
export class SearchGiayPhepComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() title: string;
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() callBack: EventEmitter<any> = new EventEmitter();
  request: any = {
    ...defaultRequestList,
  };
  giayPheps: any[] = [];
  flatGiayPheps: any[] = [];
  loading = false;
  groupBy: any = null;
  appId = '';
  total = 0;
  expandable = false;
  currentPageDataChange($event: any[]): void { }
  nzPageIndexChange(page: number): void {
    this.request.page = page;
    this.fetchGiayPhep();
  }
  nzSortChange(e: any): void {
    this.request.propertyName = e.key;
    this.request.ascending = e.value;
    this.fetchGiayPhep();
  }
  constructor(
    private message: NzMessageService,
    private giayPhepService: GiayPhepService,
  ) {
  }

  ngOnInit() {
    this.fetchGiayPhep();
    this.appId = environment.APPLICATION_ID;
  }

  fetchGiayPhep() {
    const queryModel = {
      ListTextSearch: this.request.listTextSearch,
      Sort: this.request.sort,
    };
    const queryString = JSON.stringify(queryModel);
    this.giayPhepService.getFilterGiayPhep(this.request.currentPage, this.request.pageSize, queryString).subscribe(response => {
      if (response.code === RESPONSE_STATUS_CODES[200]) {
        this.loading = false;
        this.giayPheps = response.data.content;
        this.total = response.data.totalRecords;
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
    this.parseGroup(this.flatGiayPheps);
  }
  parseGroup(values): void {
    if (this.expandable && this.groupBy != null) {
      this.giayPheps = GroupArray(values, this.groupBy, 'children');
    } else {
      this.giayPheps = [...values];
    }
  }
  nzOnSearch(e): void {
    this.request.page = 1
    this.request.listTextSearch = e;
    this.fetchGiayPhep();
  }
  handleCancel() {
    this.onCancel.emit();
  }
  onSelectRow(item: any) {
    this.callBack.emit(item);
  }

}
