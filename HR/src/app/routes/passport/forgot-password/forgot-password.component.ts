import { RESPONSE_STATUS_CODES } from './../../../core/net/default.interceptor';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../../../services/authentication/authentication.service';
import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { staticPath } from 'src/app/utils';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends AppComponentBase implements OnInit {
  form: FormGroup;
  isSubmitting: boolean = false;

  constructor(
    injector: Injector,
    private router: Router,
    private authenticationService: AuthenticationService,
    private message: NzMessageService,
    private formBuilder: FormBuilder,
    private modalService: NzModalService
  ) {
    super(injector);
    this.form = this.formBuilder.group({
      email: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  backToLogin() {
    this.router.navigate([`/${staticPath.LOGIN}`]);
  }

  forgotPassword() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if (this.form.valid) {
      this.isSubmitting = true;
      this.authenticationService.forgotPassword(this.form.controls.email.value, 'vn').toPromise().then(response => {
        this.isSubmitting = false;
        if (response.code === RESPONSE_STATUS_CODES[200]) {
          this.openSuccessPopup();
        } else {
          this.message.error(this.translate('layout.notify.forgot-password.error'));
        }
      })
    }
  }

  openSuccessPopup() {
    this.modalService.success({
      nzTitle: this.translate('app.register-account.forgot-password.success'),
      nzContent: this.translate('app.register-account.forgot-password.success-info'),
      nzOkText: this.translate('layout.btn.accept'),
      nzOnOk: () => {
        this.backToLogin();
      }
    })
  }
}
