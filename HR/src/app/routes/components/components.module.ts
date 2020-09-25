import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleHearderLayoutComponent } from './title/title-hearder-layout/title-hearder-layout.component';
import { TagComponent } from './tag/tag.component';
import { FormatNgayNhapLieuPipe } from '@shared/pipe/formatNgayNhapLieu.pipe';
import { ButtonBaseComponent } from './buttons/button-base/button-base.component';
import { ButtonCancelComponent } from './buttons/button-cancel/button-cancel.component';
import { ButtonBackComponent } from './buttons/button-back/button-back.component';
import { ButtonCreateComponent } from './buttons/button-create/button-create.component';
import { ButtonDeleteComponent } from './buttons/button-delete/button-delete.component';
import { ButtonDetailComponent } from './buttons/button-detail/button-detail.component';
import { ButtonEditComponent } from './buttons/button-edit/button-edit.component';
import { ButtonNextComponent } from './buttons/button-next/button-next.component';
import { ButtonPrevComponent } from './buttons/button-prev/button-prev.component';
import { ButtonReloadComponent } from './buttons/button-reload/button-reload.component';
import { ButtonSaveComponent } from './buttons/button-save/button-save.component';
import { ButtonSearchComponent } from './buttons/button-search/button-search.component';

@NgModule({
  declarations: [
    TitleHearderLayoutComponent,
    TagComponent,
    FormatNgayNhapLieuPipe,
    ButtonBaseComponent,
    ButtonCancelComponent,
    ButtonBackComponent,
    ButtonCreateComponent,
    ButtonDeleteComponent,
    ButtonDetailComponent,
    ButtonEditComponent,
    ButtonNextComponent,
    ButtonPrevComponent,
    ButtonReloadComponent,
    ButtonSaveComponent,
    ButtonSearchComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    TitleHearderLayoutComponent,
    TagComponent,
    FormatNgayNhapLieuPipe,
    ButtonBaseComponent,
    ButtonCancelComponent,
    ButtonBackComponent,
    ButtonCreateComponent,
    ButtonDeleteComponent,
    ButtonDetailComponent,
    ButtonEditComponent,
    ButtonNextComponent,
    ButtonPrevComponent,
    ButtonReloadComponent,
    ButtonSaveComponent,
    ButtonSearchComponent
  ]
})
export class ComponentsModule { }
