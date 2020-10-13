import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-hoa-don',
  templateUrl: './them-hoa-don.component.html',
  styleUrls: ['./them-hoa-don.component.less']
})
export class ThemHoaDonComponent implements OnInit {
  createForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      tenNguoiTao: [null, Validators.required],
      tenSP: [null, Validators.required],
      soLuong: [null, Validators.required]
    })
  }

  // handle navigate
  goToList() {
    this.router.navigate(['hoa-don/danh-sach-hoa-don']);
  }

  goToCreate() {
    this.router.navigate(['hoa-don/them-hoa-don']);
  }

}
