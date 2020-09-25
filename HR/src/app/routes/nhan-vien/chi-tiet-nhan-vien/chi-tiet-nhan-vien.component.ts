import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-chi-tiet-nhan-vien',
  templateUrl: './chi-tiet-nhan-vien.component.html',
  styleUrls: ['./chi-tiet-nhan-vien.component.scss']
})
export class ChiTietNhanVienComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private router: Router,
    private  fb: FormBuilder
  ) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      ten: [null, Validators.required],
      chucVu: [null, Validators.required],
      ngaySinh: [null, Validators.required],
      email: [null],
      sdt: [null],
      diaChi: [null],
      gioiTinh: [null]
    });

    this.editForm.disable();
  }

  // handle navigate
  backList() {
    this.router.navigate(['nhan-vien/danh-sach-nhan-vien'])
  }

  goToEdit() {
    this.editForm.enable();
  }


}
