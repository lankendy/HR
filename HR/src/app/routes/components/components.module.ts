import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleHearderLayoutComponent } from './title/title-hearder-layout/title-hearder-layout.component';
import { TagComponent } from './tag/tag.component';
import { FormatNgayNhapLieuPipe } from '@shared/pipe/formatNgayNhapLieu.pipe';
import { ButtonBaseComponent } from './buttons/button-base/button-base.component';
import { ButtonCancelComponent } from './buttons/button-cancel/button-cancel.component';

@NgModule({
  declarations: [
    TitleHearderLayoutComponent,
    TagComponent,
    FormatNgayNhapLieuPipe,
    ButtonBaseComponent,
    ButtonCancelComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    TitleHearderLayoutComponent,
    TagComponent,
    FormatNgayNhapLieuPipe,
    ButtonBaseComponent,
    ButtonCancelComponent
  ]
})
export class ComponentsModule { }
