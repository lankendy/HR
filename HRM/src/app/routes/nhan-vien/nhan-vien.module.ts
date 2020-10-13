import { CommonComponentAntModule } from './../../common/common-component-ant/common-component-ant.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietNhanVienComponent } from './chi-tiet-nhan-vien/chi-tiet-nhan-vien.component';
import { DsNhanVienComponent } from './ds-nhan-vien/ds-nhan-vien.component';
import { ThemNhanVienComponent } from './them-nhan-vien/them-nhan-vien.component';
import { NhanVienRoutes } from './nhan-vien.routing';

@NgModule({
  imports: [
    CommonModule,
    NhanVienRoutes,
    CommonComponentAntModule
  ],
  declarations: [
    ChiTietNhanVienComponent,
    DsNhanVienComponent,
    ThemNhanVienComponent,
  ]
})
export class NhanVienModule { }
