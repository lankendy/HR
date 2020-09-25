import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-san-pham',
  templateUrl: './chi-tiet-san-pham.component.html',
  styleUrls: ['./chi-tiet-san-pham.component.less']
})
export class ChiTietSanPhamComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      tenSP: [null, [Validators.required]],
      giaNhap: [null, [Validators.required]],
      giaBan: [null, [Validators.required]],
      soLuong: [null]
    });
    this.editForm.disable();
  }

  // handle navigate
  goToList() {
    this.router.navigate(['san-pham/danh-sach-san-pham']);
  }

  goToEdit() {
    this.editForm.enable();
  }

}
