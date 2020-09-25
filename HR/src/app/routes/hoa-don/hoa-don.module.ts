import { ComponentsModule } from './../components/components.module';
import { SharedModule } from '@shared';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DanhSachHoaDonComponent } from './danh-sach-hoa-don/danh-sach-hoa-don.component';
import { ChiTietHoaDonComponent } from './chi-tiet-hoa-don/chi-tiet-hoa-don.component';
import { ThemHoaDonComponent } from './them-hoa-don/them-hoa-don.component';
import { HoaDonRoutes } from './hoa-don.routing';

@NgModule({
    imports: [
        CommonModule, HoaDonRoutes, SharedModule, ComponentsModule
    ],
    declarations: [
        DanhSachHoaDonComponent,
        ChiTietHoaDonComponent,
        ThemHoaDonComponent
    ]
})

export class HoaDonModule {}