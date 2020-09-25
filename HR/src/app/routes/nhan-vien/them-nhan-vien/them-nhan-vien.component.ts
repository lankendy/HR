import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-nhan-vien',
  templateUrl: './them-nhan-vien.component.html',
  styleUrls: ['./them-nhan-vien.component.scss']
})
export class ThemNhanVienComponent implements OnInit {
  createForm: FormGroup
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      ten: [null, Validators.required],
      chucVu: [null, Validators.required],
      ngaySinh: [null, Validators.required],
      email: [null],
      sdt: [null],
      diaChi: [null],
      gioiTinh: [null]
    })
  }

  // handle navigate
  backList() {
    this.router.navigate(['nhan-vien/danh-sach-nhan-vien'])
  }

}
