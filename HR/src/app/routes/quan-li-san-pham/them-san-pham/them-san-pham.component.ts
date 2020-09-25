import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-san-pham',
  templateUrl: './them-san-pham.component.html',
  styleUrls: ['./them-san-pham.component.less']
})
export class ThemSanPhamComponent implements OnInit {
  createForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      tenSP: [null, [Validators.required]],
      giaNhap: [null, [Validators.required]],
      giaBan: [null, [Validators.required]],
      soLuong: [null]
    })
  }
  
  // handle navigate
  goToList() {
    this.router.navigate(['san-pham/danh-sach-san-pham']);
  }

}
