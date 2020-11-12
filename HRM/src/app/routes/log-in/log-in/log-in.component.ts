import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  formLogin: FormGroup;
  accounts = [];
  constructor(
    private accountService: AccountService,
    private message: NzMessageService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.initialForm();
    this.getAllAccount();
  }
  
  initialForm() {
    this.formLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  // call api
  getAllAccount() {
    this.accountService.getAllAccount().subscribe(res => {
      if (res.code == 200) {
        this.accounts = res.data;
      }
      else {
        this.message.error("Đã có lỗi xảy ra.");
      }
    })
  }

  submitForm() {
    if (this.formLogin.valid) {
      // if (this.checkAccount()) {
      //   this.navigateDashboard();
      // } else {
      //   this.message.error('Tài khoản không đúng.');
      // }
      this.checkAccount()
    }
  }

  get email() {
    return this.formLogin.get('email');
  }
  get password() {
    return this.formLogin.get('password');
  }

  navigateDashboard() {
    this.router.navigate(['/dashboard']);
  }

  checkAccount() {
    let account = this.accounts.find(acc => {
      (acc.email == this.email.value) && (acc.password == this.password.value);
    });
  }

}
