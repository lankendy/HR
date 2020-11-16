import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-them-tai-khoan',
  templateUrl: './them-tai-khoan.component.html',
  styleUrls: ['./them-tai-khoan.component.scss']
})
export class ThemTaiKhoanComponent implements OnInit {
  createForm: FormGroup;
  // --select ten nhan vien
  listOfOption: string[] = [];
  listOfSelectedValue = [];

  id: string;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private accountService: AccountService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      email: [null, Validators.required],
      password: [123456, Validators.required],
      role_id: [null, Validators.required],
      createdBy: [null]
    });

    // handle select ten nv
    this.fakeTenNhanVien();
  }

  // call api 
  submitForm() {
    this.accountService.addAccount(this.createForm.value).subscribe(response => {
      if (response.code == 200) {
        this.createForm.patchValue(response.data);
        this.id = response.data.id;
        this.goToDetail();
        this.message.success('Thêm tài khoản thành công.');
      } else  {
        this.message.error('Đã xảy ra lỗi.');
      }
    });
  }

  // handle navigate
  goToList() {
    this.router.navigate(['dashboard/tai-khoan/danh-sach-tai-khoan']);
  }

  goToDetail() {
    this.router.navigate(['tai-khoan/chi-tiet-tai-khoan', {id: this.id}]);
  }

  // handle select ten nhan vien
  fakeTenNhanVien() {
    const children: string[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(`${i.toString(36)}${i}`);
    }
    this.listOfOption = children;
  }

}
