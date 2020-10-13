import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NhanVienService } from 'src/app/services/nhan-vien/nhan-vien.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-them-nhan-vien',
  templateUrl: './them-nhan-vien.component.html',
  styleUrls: ['./them-nhan-vien.component.scss']
})
export class ThemNhanVienComponent implements OnInit {
  createForm: FormGroup;
  id: string;
  // -- modal
  isVisible = false;
  isOkLoading = false;
  // -- end modal
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private nhanVienService: NhanVienService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      name: [null, Validators.required],
      position_id: [null, Validators.required],
      birthday: [null, Validators.required],
      email: [null],
      phone: [null],
      address: [null],
      gender: [null],
      createdBy: [null]
    });
  }

  // call api 
  submitForm() {
    if (this.createForm.valid) {
      this.nhanVienService.createUser(this.createForm.value).subscribe(response => {
        if (response.code == 200) {
          this.message.success('Thêm mới nhân viên thành công.')
        }
      });
    }
  }

  // handle navigate
  backList() {
    this.router.navigate(['nhan-vien/danh-sach-nhan-vien'])
  }
  // --end handle navigate

  // handle modal
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  // --end handle modal

}
