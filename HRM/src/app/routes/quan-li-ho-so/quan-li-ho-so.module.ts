import { CommonComponentAntModule } from './../../common/common-component-ant/common-component-ant.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsHoSoComponent } from './ds-ho-so/ds-ho-so.component';
import { ChiTietHoSoComponent } from './chi-tiet-ho-so/chi-tiet-ho-so.component';
import { ThemHoSoComponent } from './them-ho-so/them-ho-so.component';
import { QuanLiHoSoRoutes } from './quan-li-ho-so.routing';
import { FileListComponent } from '../common/file-list/file-list.component';
import { FileUploaderComponent } from '../common/file-uploader/file-uploader.component';

@NgModule({
    imports: [
      CommonModule,
      QuanLiHoSoRoutes,
      CommonComponentAntModule
    ],
    declarations: [
      DsHoSoComponent,
      ChiTietHoSoComponent,
      ThemHoSoComponent,
      FileListComponent,
      FileUploaderComponent
    ]
  })
  export class QuanLiHoSoModule { }