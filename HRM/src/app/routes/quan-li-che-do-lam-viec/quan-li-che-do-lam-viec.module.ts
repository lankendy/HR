import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentAntModule } from './../../common/common-component-ant/common-component-ant.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheDoNgayLamViecComponent } from './che-do-ngay-lam-viec/che-do-ngay-lam-viec.component';
import { QuanLiCheDoLamViecRoutes } from './quan-li-che-do-lam-viec.routing';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentAntModule,
    FormsModule,
    ReactiveFormsModule,
    QuanLiCheDoLamViecRoutes
  ],
  declarations: [
    CheDoNgayLamViecComponent
  ]
})
export class QuanLiCheDoLamViecModule { }
