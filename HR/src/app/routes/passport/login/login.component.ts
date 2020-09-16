import { SettingsService, _HttpClient } from '@delon/theme';
import { Component, OnDestroy, Inject, Optional, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { SocialService, SocialOpenType, ITokenService, DA_SERVICE_TOKEN, ITokenModel } from '@delon/auth';
import { ReuseTabService } from '@delon/abc';
import { StartupService } from '@core';
import { tap, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { UserService, UserRightService } from '../../../services';
import { staticPath } from 'src/app/utils';

@Component({
  selector: 'passport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [SocialService],
})
export class UserLoginComponent implements OnDestroy, OnInit {
  constructor(
    fb: FormBuilder,
    modalSrv: NzModalService,
    private router: Router,
    private settingsService: SettingsService,
    private socialService: SocialService,
    @Optional()
    @Inject(ReuseTabService)
    private reuseTabService: ReuseTabService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private startupSrv: StartupService,
    public http: _HttpClient,
    public msg: NzMessageService,
    public userService: UserService,
    public userRightService: UserRightService,
  ) {
    this.form = fb.group({
      userName: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      captcha: [null, [Validators.required]],
      remember: [true],
    });
    modalSrv.closeAll();
    const user = this.tokenService.get();
    if (user.token !== null && user.token !== undefined) {
      this.router.navigateByUrl('/');
    }
  }

  // #region fields

  get userName() {
    return this.form.controls.userName;
  }
  get password() {
    return this.form.controls.password;
  }
  get mobile() {
    return this.form.controls.mobile;
  }
  get captcha() {
    return this.form.controls.captcha;
  }
  form: FormGroup;
  error = '';
  type = 0;
  isLoading = false;

  // #region get captcha

  count = 0;
  interval$: any;

  ngOnInit() {}

  // #endregion

  switch(ret: any) {
    this.type = ret.index;
  }

  getCaptcha() {
    if (this.mobile.invalid) {
      this.mobile.markAsDirty({ onlySelf: true });
      this.mobile.updateValueAndValidity({ onlySelf: true });
      return;
    }
    this.count = 59;
    this.interval$ = setInterval(() => {
      this.count -= 1;
      if (this.count <= 0) {
        clearInterval(this.interval$);
      }
    }, 1000);
  }

  // #endregion

  submit() {
    // this.popupMessageService.showModal();
    // return;
    this.error = '';
    if (this.type === 0) {
      this.userName.markAsDirty();
      this.userName.updateValueAndValidity();
      this.password.markAsDirty();
      this.password.updateValueAndValidity();
      if (this.userName.invalid || this.password.invalid) {
        return;
      }
    } else {
      this.mobile.markAsDirty();
      this.mobile.updateValueAndValidity();
      this.captcha.markAsDirty();
      this.captcha.updateValueAndValidity();
      if (this.mobile.invalid || this.captcha.invalid) {
        return;
      }
    }
    // this.isLoading = true;
    this.userService
      .login({
        username: this.userName.value,
        password: this.password.value,
      })
      .pipe(
        // map((list: any[]) =>
        //   list.map(i => {
        //     const statusItem = this.status[i.status];
        //     i.statusText = statusItem.text;
        //     i.statusType = statusItem.type;
        //     return i;
        //   }),
        // ),
        tap(() => (this.isLoading = false)),
      )
      .subscribe((res: any) => {
        this.isLoading = false;
        if (res.code !== 200) {
          this.error = res.message;
          return;
        }
        if (res.data === null || res.data === undefined) {
          this.error = res.message;
          return;
        }
        if (res.data.userModel === null) {
          this.error = res.message;
          return;
        }

        // Clear route reuse information
        this.reuseTabService.clear();

        let appId = environment.APPLICATION_ID;
        if (appId == null || appId == '') {
          appId = res.data.applicationId;
        }

        // Clear rights cache and init rigths from login response
        this.userRightService.deleteAll();
        if (res.data.rights.length > 0) {
          for (const rCode of res.data.rights) {
            this.userRightService.add(rCode);
          }
        }
        // Set user token information
        this.tokenService.set({
          id: res.data.id,
          token: res.data.token,
          name: res.data.name,
          appId: appId,
          right: this.userRightService.getAll(),
        });

        this.settingsService.setUser({
          name: res.data.name,
          avatar: './assets/tmp/img/avatar.jpg',
          email: '',
          right: res.data.rights
        });

        this.startupSrv.load().then(() => {
          let url = this.tokenService.referrer!.url || '/';
          if (url.includes('/passport')) {
            url = '/';
          }
          this.router.navigateByUrl(url);
        });

        // this.userService
        //   .getRightOfUser(res.data.userId, res.data.applicationId)
        //   .pipe
        //   // Exception message after receiving other interceptors
        //   // catchError(([res]) => {
        //   //   resolve(null);
        //   //   return [langData];
        //   // }),
        //   ()
        //   .subscribe((resRight: any) => {
        //     if (resRight.code !== 200) {
        //       this.msg.error(resRight.message);
        //     }
        //     this.userRightService.deleteAll();
        //     for (const iterator of resRight.data) {
        //       this.userRightService.add(iterator.code);
        //     }
        //     this.tokenService.set({
        //       ...this.tokenService.get(),
        //       right: this.userRightService.getAll(),
        //     });

        //     // Re-acquire StartupService content,
        //     // we always think that application information is generally affected by the scope of current user authorization
        //     this.startupSrv.load().then(() => {
        //       let url = this.tokenService.referrer!.url || '/';
        //       if (url.includes('/passport')) {
        //         url = '/';
        //       }
        //       this.router.navigateByUrl(url);
        //     });
        //   });
      });
  }

  navigateSignUp() {
    this.router.navigate([`/${staticPath.REGISTER}`]);
  }
  navigateForgotPassword() {
    this.router.navigate([`/${staticPath.FORGOT_PASSWORD}`]);
  }

  ngOnDestroy(): void {
    if (this.interval$) {
      clearInterval(this.interval$);
    }
  }
}
