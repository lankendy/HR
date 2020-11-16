import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-chi-tiet-tai-khoan',
  templateUrl: './chi-tiet-tai-khoan.component.html',
  styleUrls: ['./chi-tiet-tai-khoan.component.scss']
})
export class ChiTietTaiKhoanComponent implements OnInit {
  editForm: FormGroup;
  id: string;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.editForm = this.fb.group({
      email: [null, Validators.required],
      role_id: [null, Validators.required],
      createdBy: [null]
    });
    this.getDetailAccount();
  }

  // call api
  getDetailAccount() {
    this.accountService.getDetailAccount(this.id).subscribe(response => {
      if (response.code == 200) {
        this.editForm.patchValue(response.data);
        this.editForm.disable();
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // handle navigate
  goToList() {
    this.router.navigate(['dashboard/tai-khoan/danh-sach-tai-khoan']);
  }

  goToEdit() {
    this.editForm.enable();
  }

  submitForm() {
    if (this.editForm.valid) {
      this.accountService.editAccount({...this.editForm.value, id: this.id}).subscribe(response => {
        if (response.code == 200) {
          this.message.success('Cập nhật thành công!');
          this.getDetailAccount();
        }
        else {
          this.message.error('Đã có lỗi xảy ra.');
        }
      })
    }
  }

}
