import { ChangePasswordComponent } from './passport/change-password/change-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
// layout
import { LayoutProComponent } from '@brand';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
import { UserLockComponent } from './passport/lock/lock.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { RegisterAccountComponent } from './passport/register-account/register-account.component';
import { ForgotPasswordComponent } from './passport/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutProComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      // Exception
      {
        path: 'exception',
        loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule),
      },

    ],
  },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: UserLoginComponent,
        data: { title: 'Đăng nhập', titleI18n: 'app.login.login' },
      },
      {
        path: 'register',
        component: RegisterAccountComponent,
        data: { title: 'Đăng ký', titleI18n: 'app.login.register' },
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: { title: 'Quên mật khẩu', titleI18n: 'app.login.forgot-password' },
      },
      {
        path: 'recover-password',
        component: ChangePasswordComponent,
        data: { title: 'Đổi mật khẩu', titleI18n: 'app.login.change-password' },
      },
    ],
  },
  // Single page not wrapped Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
