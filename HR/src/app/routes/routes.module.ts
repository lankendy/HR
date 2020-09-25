import { ChangePasswordComponent } from './passport/change-password/change-password.component';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';

import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
import { UserLockComponent } from './passport/lock/lock.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { DatePickerUtcDirective } from './directives/date-picker-utc.directive';
import { RegisterAccountComponent } from './passport/register-account/register-account.component';
import { ForgotPasswordComponent } from './passport/forgot-password/forgot-password.component';
import { NhanVienModule } from './nhan-vien/nhan-vien.module';
import { TaiKhoanModule } from './tai-khoan/tai-khoan.module';
import { QuanLiHoSoModule } from './quan-li-ho-so/quan-li-ho-so.module';
import { SanPhamModule } from './quan-li-san-pham/san-pham.module';
import { HoaDonModule } from './hoa-don/hoa-don.module';
import { SuKienModule } from './su-kien/su-kien.module';

const COMPONENTS = [
  DashboardComponent,
  // passport pages
  UserLoginComponent,
  UserRegisterComponent,
  UserRegisterResultComponent,
  UserLockComponent,
  RegisterAccountComponent,
  ForgotPasswordComponent,
  ChangePasswordComponent,
  // single pages
  CallbackComponent
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouteRoutingModule,
    NgxCaptchaModule,
    NhanVienModule,
    TaiKhoanModule,
    QuanLiHoSoModule,
    SanPhamModule,
    HoaDonModule,
    SuKienModule
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT, DatePickerUtcDirective],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule { }
