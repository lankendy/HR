import { ChucVuRoutes } from './chuc-vu.routing';
import { ThemChucVuComponent } from './them-chuc-vu/them-chuc-vu.component';
import { ChiTietChucVuComponent } from './chi-tiet-chuc-vu/chi-tiet-chuc-vu.component';
import { DsChucVuComponent } from './ds-chuc-vu/ds-chuc-vu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentAntModule } from './../../common/common-component-ant/common-component-ant.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    CommonComponentAntModule,
    FormsModule,
    ReactiveFormsModule,
    ChucVuRoutes
  ],
  declarations: [
    DsChucVuComponent,
    ChiTietChucVuComponent,
    ThemChucVuComponent
  ]
})
export class ChucVuModule { }
