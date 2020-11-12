import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentAntModule } from './../../common/common-component-ant/common-component-ant.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietNhanVienComponent } from './chi-tiet-nhan-vien/chi-tiet-nhan-vien.component';
import { DsNhanVienComponent } from './ds-nhan-vien/ds-nhan-vien.component';
import { ThemNhanVienComponent } from './them-nhan-vien/them-nhan-vien.component';
import { NhanVienRoutes } from './nhan-vien.routing';
import { DangKiLichLamViecComponent } from './dang-ki-lich-lam-viec/dang-ki-lich-lam-viec.component';
import { FormatPhoneDirective } from 'src/app/directive/format-phone/format-phone.directive';

@NgModule({
  imports: [
    CommonModule,
    NhanVienRoutes,
    CommonComponentAntModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ChiTietNhanVienComponent,
    DsNhanVienComponent,
    ThemNhanVienComponent,
    DangKiLichLamViecComponent,
    FormatPhoneDirective,
  ]
})
export class NhanVienModule { }
