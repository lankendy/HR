import { FormsModule } from '@angular/forms';
import { CommonComponentAntModule } from './../../common/common-component-ant/common-component-ant.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DanhSachHoaDonComponent } from './danh-sach-hoa-don/danh-sach-hoa-don.component';
import { ChiTietHoaDonComponent } from './chi-tiet-hoa-don/chi-tiet-hoa-don.component';
import { ThemHoaDonComponent } from './them-hoa-don/them-hoa-don.component';
import { HoaDonRoutes } from './hoa-don.routing';

@NgModule({
    imports: [
        CommonModule, HoaDonRoutes, CommonComponentAntModule, FormsModule
    ],
    declarations: [
        DanhSachHoaDonComponent,
        ChiTietHoaDonComponent,
        ThemHoaDonComponent
    ],
})

export class HoaDonModule {}