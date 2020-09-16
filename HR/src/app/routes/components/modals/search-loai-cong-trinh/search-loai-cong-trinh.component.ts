import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { defaultRequestList } from 'src/app/utils';
import { GroupArray } from 'src/app/helpers';
import { RESPONSE_STATUS_CODES } from '@core';
import { LoaiCongTrinhService } from 'src/app/services/catalog-manager/loai-cong-trinh/loai-cong-trinh.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-search-loai-cong-trinh',
  templateUrl: './search-loai-cong-trinh.component.html',
  styleUrls: ['./search-loai-cong-trinh.component.scss']
})
export class SearchLoaiCongTrinhComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() title = "components.modals.search-loai-cong-trinh.title";
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() callBack: EventEmitter<any> = new EventEmitter();
  request: any = {
    ...defaultRequestList,
  };
  dsLoaiCongTrinh: any[] = [];
  flatDsLoaiCongTrinh: any[] = [];
  loading = false;
  groupBy: any = null;
  total = 0;
  expandable = false;
  constructor(
    private loaiCongTrinhService: LoaiCongTrinhService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
  }

  openModal() {
    this.fetchLoaiCongTrinh();
  }

  fetchLoaiCongTrinh() {
    this.loading = true;
    const queryModel = {
      ListTextSearch: this.request.listTextSearch,
      Sort: this.request.sort,
    };
    const queryString = encodeURIComponent(JSON.stringify(queryModel));
    this.loaiCongTrinhService.getListLoaiCongTrinh(this.request.currentPage, this.request.pageSize, queryString).subscribe(response => {
      if (response.code === RESPONSE_STATUS_CODES[200]) {
        this.loading = false;
        this.dsLoaiCongTrinh = response.data.content;
        // this.flatFilenetArchiveTypes = response.data.content;
        // this.filenetArchiveTypes = response.data.content;
        // this.total = response.data.totalRecords;
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
    this.parseGroup(this.flatDsLoaiCongTrinh);
  }

  parseGroup(values): void {
    if (this.expandable && this.groupBy != null) {
      this.dsLoaiCongTrinh = GroupArray(values, this.groupBy, 'children');
    } else {
      this.dsLoaiCongTrinh = [...values];
    }
  }

  nzOnSearch(e): void {
    this.request.listTextSearch = e;
    this.request.currentPage = 1;
    this.fetchLoaiCongTrinh();
  }

  handleCancel() {
    this.onCancel.emit();
  }

  onSelectRow(item: any) {
    this.callBack.emit(item);
  }

  nzSortChange(e: any): void {
    this.request.propertyName = e.key;
    this.request.ascending = e.value;
    this.fetchLoaiCongTrinh();
  }

  nzPageIndexChange(page: number): void {
    this.request.page = page;
    this.fetchLoaiCongTrinh();
  }

}
