import {
  Component,
  ChangeDetectionStrategy,
  NgZone,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  Inject,
} from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';

import { NzI18nService } from 'ng-zorro-antd/i18n';

import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';

import * as enDateLocale from 'date-fns/locale/en';
import * as jaDateLocale from 'date-fns/locale/ja';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_material from '@amcharts/amcharts4/themes/material';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);

import { GRID_ATTRIBUTES } from '../../utils';
import { DashboardService, UserRightService, UserService } from 'src/app/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  dateRange = [new Date(), new Date()];
  // dateFormat = 'dd/MM/yyyy';
  isEnglish = false;
  dateFormat = 'DD/MM/YYYY';
  monthFormat = 'MM/YYYY';
  isChart1Loading = false;
  isChart2Loading = false;
  isDataLoading = false;
  isTable1Loading = false;
  isTable2Loading = false;

  dashboardModel: any = {};

  dataTable1 = [];
  dataTable2 = [];

  dataChart1 = [];
  dataChart2 = [];

  q1 = { ...GRID_ATTRIBUTES, ps: 10 };
  q2 = { ...GRID_ATTRIBUTES, ps: 10 };

  private chart1: am4charts.XYChart;
  private chart2: am4charts.PieChart;
  interval$: any;

  columnTable1 = [
    { title: 'Mã SA', i18n: 'dashboard.grid1.code' },
    { title: 'Giá trị', i18n: 'dashboard.grid1.value' },
    { title: 'Ngày giao hàng', i18n: 'dashboard.grid1.date' },
    { title: 'Khách hàng', i18n: 'dashboard.grid1.customer' },
  ];

  columnTable2 = [
    { title: 'Lệnh sản xuất', i18n: 'dashboard.grid2.name' },
    { title: 'Sản phẩm', i18n: 'dashboard.grid2.product' },
    { title: 'Khách hàng', i18n: 'dashboard.grid2.customer' },
  ];

  constructor(
    private zone: NgZone,
    private i18n: NzI18nService,
    private userService: UserService,
    private dashboardService: DashboardService,
    private userRightService: UserRightService,
    public msg: NzMessageService,
    private cdr: ChangeDetectorRef,
    @Inject(ALAIN_I18N_TOKEN) private i18nService: I18NService,
  ) {
    this.i18n.setDateLocale(enDateLocale);
  }
  // Kiểm tra token, nếu token hết hạn sẽ trả về 401 => DefaultInterceptor sẽ bắt và đẩy ra màn login
  checkTokenValidate() {
    this.userService.getLoginInfo().subscribe((res: any) => {});
  }
  ngOnInit() {
    this.checkTokenValidate();
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {});
  }

  onChange() {
    console.log(this.dateRange);
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        this.chart1.dispose();
      }
      if (this.chart2) {
        this.chart2.dispose();
      }
    });
    if (this.interval$) {
      clearInterval(this.interval$);
    }
  }
}
