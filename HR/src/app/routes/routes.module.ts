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
  imports: [SharedModule, ComponentsModule, RouteRoutingModule, NgxCaptchaModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT, DatePickerUtcDirective],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule {}
