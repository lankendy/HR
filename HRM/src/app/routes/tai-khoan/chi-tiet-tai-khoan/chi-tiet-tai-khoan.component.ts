import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-tai-khoan',
  templateUrl: './chi-tiet-tai-khoan.component.html',
  styleUrls: ['./chi-tiet-tai-khoan.component.scss']
})
export class ChiTietTaiKhoanComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      idNhanVien: [null, Validators.required],
      email: [null, Validators.required],
      matKhau: [null, Validators.required],
      phanQuyen: [null, Validators.required]
    });
    this.editForm.disable();
  }

  // handle navigate
  goToList() {
    this.router.navigate(['tai-khoan/danh-sach-tai-khoan']);
  }

  goToEdit() {
    this.editForm.enable();
  }

}
