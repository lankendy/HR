import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { NhanVienModule } from './nhan-vien/nhan-vien.module';
import { TaiKhoanModule } from './tai-khoan/tai-khoan.module';
import { QuanLiHoSoModule } from './quan-li-ho-so/quan-li-ho-so.module';
import { SanPhamModule } from './quan-li-san-pham/san-pham.module';
import { HoaDonModule } from './hoa-don/hoa-don.module';
import { SuKienModule } from './su-kien/su-kien.module';
import { RoutesRoutes } from './routes.routing';
import { CommonComponentAntModule } from '../common/common-component-ant/common-component-ant.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    DashboardModule,
    NhanVienModule,
    TaiKhoanModule,
    QuanLiHoSoModule,
    SanPhamModule,
    HoaDonModule,
    SuKienModule,
    RoutesRoutes,
    CommonComponentAntModule,
  ],
  declarations: [
    PageNotFoundComponent,
  ]
})
export class RoutesModule { }
