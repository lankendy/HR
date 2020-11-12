import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-hoa-don',
  templateUrl: './chi-tiet-hoa-don.component.html',
  styleUrls: ['./chi-tiet-hoa-don.component.less']
})
export class ChiTietHoaDonComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      tenNguoiTao: [null, Validators.required],
      tenSP: [null, Validators.required],
      soLuong: [null, Validators.required]
    });
    this.editForm.disable();
  }

  // handle navigate
  goToList() {
    this.router.navigate(['dashboard/hoa-don/danh-sach-hoa-don']);
  }

  goToEdit() {
    this.editForm.enable();
  }

}
