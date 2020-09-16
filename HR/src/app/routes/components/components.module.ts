import { InputNumberComponent } from './inputs/input-number/input-number.component';
import { SelectLoaiCongTrinhComponent } from './selects/select-loai-cong-trinh/select-loai-cong-trinh.component';
import { SelectTramQuanTracComponent } from './selects/select-tram-quan-trac/select-tram-quan-trac.component';
import { SelectProvinceComponent } from './selects/select-province/select-province.component';
import { InputEmailComponent } from './inputs/input-email/input-email.component';
import { SearchFilenetCountryComponent } from './modals/search-filenet-country/search-filenet-country.component';
import { SelectCountryComponent } from './selects/select-country/select-country.component';
import { SelectComponent } from './selects/select/select.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleHearderLayoutComponent } from './title/title-hearder-layout/title-hearder-layout.component';
import { SearchWaterQualityReportComponent } from './modals/search-water-quality-report/search-water-quality-report.component';
import { TagComponent } from './tag/tag.component';
import { LabelVerticalComponent } from './labels/label-vertical/label-vertical.component';
import { OnOffComponent } from './on-off/on-off.component';
import { LabelKibanaComponent } from './labels/label-kibana/label-kibana.component';
import { LabelHorizontalComponent } from './labels/label-horizontal/label-horizontal.component';
import { ButtonSearchComponent } from './buttons/button-search/button-search.component';
import { ButtonSaveComponent } from './buttons/button-save/button-save.component';
import { ButtonReloadComponent } from './buttons/button-reload/button-reload.component';
import { ButtonPrevComponent } from './buttons/button-prev/button-prev.component';
import { ButtonNextComponent } from './buttons/button-next/button-next.component';
import { ButtonEditComponent } from './buttons/button-edit/button-edit.component';
import { ButtonDetailComponent } from './buttons/button-detail/button-detail.component';
import { ButtonDeleteComponent } from './buttons/button-delete/button-delete.component';
import { ButtonCreateComponent } from './buttons/button-create/button-create.component';
import { ButtonCancelComponent } from './buttons/button-cancel/button-cancel.component';
import { ButtonBaseComponent } from './buttons/button-base/button-base.component';
import { ButtonBackComponent } from './buttons/button-back/button-back.component';
import { SearchLoaiCongTrinhComponent } from './modals/search-loai-cong-trinh/search-loai-cong-trinh.component';
import { SelectGiayPhepComponent } from './selects/select-giay-phep/select-giay-phep.component';
import { SearchGiayPhepComponent } from './modals/search-giay-phep/search-giay-phep/search-giay-phep.component';
import { SelectQuanHuyenComponent } from './selects/select-quan-huyen/select-quan-huyen.component';
import { SelectPhuongXaComponent } from './selects/select-phuong-xa/select-phuong-xa.component';
import { FormatNgayNhapLieuPipe } from '@shared/pipe/formatNgayNhapLieu.pipe';
import { DatePickerComponent } from './date/date-picker/date-picker.component';
import { DatePickerTimeComponent } from './date/date-picker-time/date-picker-time.component';
@NgModule({
  declarations: [
    TitleHearderLayoutComponent,
    TagComponent,
    OnOffComponent,
    LabelVerticalComponent,
    LabelKibanaComponent,
    LabelHorizontalComponent,
    SearchWaterQualityReportComponent,
    ButtonSearchComponent,
    ButtonSaveComponent,
    ButtonReloadComponent,
    ButtonPrevComponent,
    ButtonNextComponent,
    ButtonEditComponent,
    ButtonDetailComponent,
    ButtonDeleteComponent,
    ButtonCreateComponent,
    ButtonCancelComponent,
    ButtonBaseComponent,
    ButtonBackComponent,
    DatePickerComponent,
    SelectComponent,
    SelectCountryComponent,
    SelectProvinceComponent,
    SelectTramQuanTracComponent,
    InputEmailComponent,
    InputNumberComponent,
    SearchLoaiCongTrinhComponent,
    SearchFilenetCountryComponent,
    SelectGiayPhepComponent,
    SelectLoaiCongTrinhComponent,
    SearchGiayPhepComponent,
    SelectQuanHuyenComponent,
    SelectPhuongXaComponent,
    FormatNgayNhapLieuPipe,
    DatePickerTimeComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    TitleHearderLayoutComponent,
    TagComponent,
    OnOffComponent,
    LabelVerticalComponent,
    LabelKibanaComponent,
    LabelHorizontalComponent,
    SearchWaterQualityReportComponent,
    ButtonSearchComponent,
    ButtonSaveComponent,
    ButtonReloadComponent,
    ButtonPrevComponent,
    ButtonNextComponent,
    ButtonEditComponent,
    ButtonDetailComponent,
    ButtonDeleteComponent,
    ButtonCreateComponent,
    ButtonCancelComponent,
    ButtonBaseComponent,
    ButtonBackComponent,
    DatePickerComponent,
    SelectComponent,
    SelectCountryComponent,
    SelectProvinceComponent,
    SelectTramQuanTracComponent,
    InputEmailComponent,
    InputNumberComponent,
    SearchLoaiCongTrinhComponent,
    SearchFilenetCountryComponent,
    SelectGiayPhepComponent,
    SelectLoaiCongTrinhComponent,
    SearchGiayPhepComponent,
    SelectQuanHuyenComponent,
    SelectPhuongXaComponent,
    FormatNgayNhapLieuPipe,
    DatePickerTimeComponent
  ]
})
export class ComponentsModule { }
