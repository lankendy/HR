import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentAntModule } from './../../common/common-component-ant/common-component-ant.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard/dashboard.module';
import { NhanVienModule } from '../nhan-vien/nhan-vien.module';
import { TaiKhoanModule } from '../tai-khoan/tai-khoan.module';
import { QuanLiHoSoModule } from '../quan-li-ho-so/quan-li-ho-so.module';
import { SanPhamModule } from '../quan-li-san-pham/san-pham.module';
import { HoaDonModule } from '../hoa-don/hoa-don.module';
import { SuKienModule } from '../su-kien/su-kien.module';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutRoutes } from './layout.routing';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentAntModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    NhanVienModule,
    TaiKhoanModule,
    QuanLiHoSoModule,
    SanPhamModule,
    HoaDonModule,
    SuKienModule,
    CommonComponentAntModule,
    LayoutRoutes
  ],
  declarations: [
    PageNotFoundComponent,
    LayoutComponent,
  ]
})
export class LayoutModule { }
