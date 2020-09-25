import { ComponentsModule } from './../components/components.module';
import { ThemTaiKhoanComponent } from './them-tai-khoan/them-tai-khoan.component';
import { ChiTietTaiKhoanComponent } from './chi-tiet-tai-khoan/chi-tiet-tai-khoan.component';
import { DsTaiKhoanComponent } from './ds-tai-khoan/ds-tai-khoan.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaiKhoanRoutes } from './tai-khoan.routing';
import { SharedModule } from '@shared';


@NgModule({
  imports: [
    CommonModule,
    TaiKhoanRoutes,
    SharedModule,
    ComponentsModule
  ],
  declarations: [
      DsTaiKhoanComponent,
      ChiTietTaiKhoanComponent,
      ThemTaiKhoanComponent
  ]
})
export class TaiKhoanModule { }
