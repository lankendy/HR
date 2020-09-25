import { ComponentsModule } from './../components/components.module';
import { SharedModule } from './../../shared/shared.module';
import { ThemSuKienComponent } from './them-su-kien/them-su-kien.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DsSuKienComponent } from './ds-su-kien/ds-su-kien.component';
import { SuKienRoutes } from './su-kien.routing';
import { ChiTietSuKienComponent } from './chi-tiet-su-kien/chi-tiet-su-kien.component';

@NgModule({
    imports: [
        CommonModule, SuKienRoutes, SharedModule, ComponentsModule
    ],
    declarations: [
        DsSuKienComponent,
        ThemSuKienComponent,
        ChiTietSuKienComponent
    ]
})

export class SuKienModule {}
