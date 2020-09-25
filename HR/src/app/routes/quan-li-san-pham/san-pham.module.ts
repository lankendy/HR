import { ComponentsModule } from './../components/components.module';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { SharedModule } from '@shared';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import { DsSanPhamComponent } from './ds-san-pham/ds-san-pham.component';
import { SanPhamRoutes } from './san-pham.routing';
import { ThemSanPhamComponent } from './them-san-pham/them-san-pham.component';

@NgModule({
    imports: [
        CommonModule,SanPhamRoutes,SharedModule, ComponentsModule
    ],
    declarations: [
        DsSanPhamComponent,
        ChiTietSanPhamComponent,
        ThemSanPhamComponent
    ]
})

export class SanPhamModule {}