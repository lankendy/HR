import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-tai-khoan',
  templateUrl: './them-tai-khoan.component.html',
  styleUrls: ['./them-tai-khoan.component.scss']
})
export class ThemTaiKhoanComponent implements OnInit {
  createForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      idNhanVien: [null, Validators.required],
      email: [null, Validators.required],
      matKhau: [null, Validators.required],
      phanQuyen: [null, Validators.required]
    });
  }

  // handle navigate
  goToList() {
    this.router.navigate(['tai-khoan/danh-sach-tai-khoan']);
  }

}
