import { SharedModule } from '@shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietNhanVienComponent } from './chi-tiet-nhan-vien/chi-tiet-nhan-vien.component';
import { DsNhanVienComponent } from './ds-nhan-vien/ds-nhan-vien.component';
import { ThemNhanVienComponent } from './them-nhan-vien/them-nhan-vien.component';
import { NhanVienRoutes } from './nhan-vien.routing';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    NhanVienRoutes,
    SharedModule,
    ComponentsModule
  ],
  declarations: [
    ChiTietNhanVienComponent,
    DsNhanVienComponent,
    ThemNhanVienComponent,
  ]
})
export class NhanVienModule { }
