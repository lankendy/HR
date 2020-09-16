import { GroupArray } from './../../../../helpers/ExtentionMethod';
import { NzMessageService } from 'ng-zorro-antd';
import { RESPONSE_STATUS_CODES } from '@core';
import { defaultRequestList } from './../../../../utils/constant';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GiayPhepService } from 'src/app/services/catalog-manager/giay-phep/giay-phep.service';

@Component({
  selector: 'app-search-water-quality-report-modal',
  templateUrl: './search-water-quality-report.component.html',
  styleUrls: ['./search-water-quality-report.component.less']
})
export class SearchWaterQualityReportComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() title = "connection-manager.modals.title";
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() callBack: EventEmitter<any> = new EventEmitter();
  request: any = {
    ...defaultRequestList,
  };
  waterQualityReport: any[] = [];
  flatWaterQualityReport: any[] = [];
  loading = false;
  groupBy: any = null;
  total = 0;
  expandable = false;

  constructor(private message: NzMessageService,
    private giayPhepService: GiayPhepService) { }

  ngOnInit() {
  }

  openModal() {
    this.getListGiayPhep();
  }
  // ------FETCH DATA------ //
  getListGiayPhep() {
    this.loading = true;
    const queryModel = {
      ListTextSearch: this.request.listTextSearch,
      Sort: this.request.sort,
    };
    const queryString = encodeURIComponent(JSON.stringify(queryModel));
    this.giayPhepService.getFilterGiayPhep(this.request.currentPage, this.request.pageSize, queryString).subscribe(response => {
      if (response.code === RESPONSE_STATUS_CODES[200]) {
        this.loading = false;
        this.waterQualityReport = response.data.content;
        this.flatWaterQualityReport = response.data.content;
        this.total = response.data.totalRecords;
      } else {
        this.message.error(response.message);
      }
    });
  }

  // ---------------------- //

  // --- EVENT -- //
  nzOnSearchGroup(e): void {
    this.groupBy = e;
    if (e) {
      this.expandable = true;
    } else {
      this.expandable = false;
    }
    this.parseGroup(this.flatWaterQualityReport);
  }

  parseGroup(values): void {
    if (this.expandable && this.groupBy != null) {
      this.waterQualityReport = GroupArray(values, this.groupBy, 'children');
    } else {
      this.waterQualityReport = [...values];
    }
  }

  nzOnSearch(e): void {
    this.request.listTextSearch = e;
    this.request.currentPage = 1;
    this.getListGiayPhep();
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
    this.getListGiayPhep();
  }

  nzPageIndexChange(page: number): void {
    this.request.page = page;
    this.getListGiayPhep();
  }
  // --- END EVENT -- //
}
