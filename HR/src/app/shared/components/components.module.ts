import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { LabelKibanaComponent } from './labels/label-kibana/label-kibana.component';
import { LabelVerticalComponent } from './labels/label-vertical/label-vertical.component';
import { LabelHorizontalComponent } from './labels/label-horizontal/label-horizontal.component';
import { TitleHearderLayoutComponent } from './title/title-hearder-layout/title-hearder-layout.component';
@NgModule({
  declarations: [
    LabelVerticalComponent,
    LabelKibanaComponent,
    LabelHorizontalComponent,
    TitleHearderLayoutComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    LabelVerticalComponent,
    LabelKibanaComponent,
    LabelHorizontalComponent,
    TitleHearderLayoutComponent
  ]
})
export class ComponentsModule { }
