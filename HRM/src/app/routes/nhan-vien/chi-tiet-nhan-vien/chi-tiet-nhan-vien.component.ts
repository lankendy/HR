import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators } from '@angular/forms'
import { NhanVienService } from 'src/app/services/nhan-vien/nhan-vien.service';

@Component({
  selector: 'app-chi-tiet-nhan-vien',
  templateUrl: './chi-tiet-nhan-vien.component.html',
  styleUrls: ['./chi-tiet-nhan-vien.component.scss']
})
export class ChiTietNhanVienComponent implements OnInit {
  editForm: FormGroup;
  id: string;
  // file
  isVisibleCV = false;
  isVisibleBH = false;
  isVisibleXV = false;
  constructor(
    private router: Router,
    private  fb: FormBuilder,
    private route: ActivatedRoute,
    private nhanVienService: NhanVienService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
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

  // call api
  getDetailUser() {
    // note: chua co api getDetail 1 user
  }

  // handle navigate
  backList() {
    this.router.navigate(['nhan-vien/danh-sach-nhan-vien'])
  }

  goToEdit() {
    this.editForm.enable();
  }

  // handle modal file
  showModalCV(): void {
    this.isVisibleCV = true;
  }
  handleCancelCV() {
    this.isVisibleCV = false;
  }
  handleOkCV() {
    this.isVisibleCV = false;
  }

  showModalBH() {
    this.isVisibleBH = true;
  }
  handleCanCelBH() {
    this.isVisibleBH = false;
  }
  handleOKBH() {
    this.isVisibleBH = false;
  }

  showModalXV() {
    this.isVisibleXV = true;
  }
  handleOKXV() {
    this.isVisibleXV = false;
  }
  handleCancelXV() {
    this.isVisibleXV = false;
  }


}
