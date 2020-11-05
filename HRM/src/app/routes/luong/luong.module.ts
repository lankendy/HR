import { BangLuongComponent } from './bang-luong/bang-luong.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentAntModule } from './../../common/common-component-ant/common-component-ant.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuongRoutes } from './luong.routing';
import { ChiTietBangLuongComponent } from './chi-tiet-bang-luong/chi-tiet-bang-luong.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentAntModule,
    FormsModule,
    ReactiveFormsModule,
    LuongRoutes
  ],
  declarations: [
    BangLuongComponent,
    ChiTietBangLuongComponent
  ]
})
export class LuongModule { }
