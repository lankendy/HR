import { environment } from '@env/environment';
import { PHONE_NUMBER_REGEX } from './../../../utils/constant';
import { AppComponentBase } from '@shared/common/app-component-base';
import { RESPONSE_STATUS_CODES } from '@core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { staticPath, equalValueValidator } from 'src/app/utils';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent extends AppComponentBase implements OnInit {

  constructor(
    injector: Injector,
    private router: Router,
    private formBuilder: FormBuilder,
    private message: NzMessageService,
    private authenticationService: AuthenticationService,
    private modalService: NzModalService,
  ) {
    super(injector);
  }

  ngOnInit() {
  }


  backToLogin() {
    this.router.navigate([`/${staticPath.LOGIN}`]);
  }


  get siteKey(){
    return environment.CAPTCHA_SITE_KEY;
  }

  openSuccessPopup() {
    this.modalService.success({
      nzTitle: this.translate('app.register-account.create.success'),
      nzContent: this.translate('app.register-account.create.success-info'),
      nzOkText: this.translate('layout.btn.accept'),
      nzOnOk: () => {
        this.backToLogin();
      }
    })
  }

  // -- END FUNCTION -- //
}
