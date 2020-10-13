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
  // --select ten nhan vien
  listOfOption: string[] = [];
  listOfSelectedValue = [];
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      idNhanVien: [null, Validators.required],
      email: [null, Validators.required],
      matKhau: [123456, Validators.required],
      phanQuyen: [null, Validators.required]
    });

    // handle select ten nv
    this.fakeTenNhanVien();
  }

  // handle navigate
  goToList() {
    this.router.navigate(['tai-khoan/danh-sach-tai-khoan']);
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
