import { AppComponentBase } from '@shared/common/app-component-base';
import { RESPONSE_STATUS_CODES } from './../../../core/net/default.interceptor';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { equalValueValidator, staticPath } from 'src/app/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less']
})
export class ChangePasswordComponent extends AppComponentBase implements OnInit {

  form: FormGroup;
  refToken: string;

  constructor(
    injector: Injector,
    private router: Router,
    private formBuilder: FormBuilder,
    private message: NzMessageService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    super(injector);
    this.form = this.formBuilder.group({
      token: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    },
      { validator: equalValueValidator('newPassword', 'confirmPassword') }
    );
  }

  ngOnInit() {
    this.refToken = this.route.snapshot.paramMap.get('refToken');
    this.validateToken();
  }

  validateToken() {
    this.authenticationService.validateToken(this.refToken).toPromise()
      .then(response => {
        if (response && response.code === RESPONSE_STATUS_CODES[200] && response.data) {
          this.form.controls.token.setValue(this.refToken);
        } else {
          this.message.error(response.message);
        }
      })
  }

  onBackLogin() {
    this.router.navigate([`/${staticPath.LOGIN}`]);
  }

  onChangePassword() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if (this.form.valid) {
      this.authenticationService.changePassword(this.form.value).toPromise().then(response => {
        if (response.code === RESPONSE_STATUS_CODES[200]) {
          this.message.success(this.translate('layout.notify.change-password.sucess'));
          this.onBackLogin();
        } else {
          this.message.error(this.translate('layout.notify.change-password.error'));
        }
      })
    }
  }
}
