import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-su-kien',
  templateUrl: './chi-tiet-su-kien.component.html',
  styleUrls: ['./chi-tiet-su-kien.component.less']
})
export class ChiTietSuKienComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      tenSuKien: [null, Validators.required],
      theLoaiSuKien: [null, Validators.required],
      slNguoiThamGia: [null, Validators.required],
      moTa: [null]
    });
    this.editForm.disable();
  }

  // handle navigate
  goToList() {
    this.router.navigate(['su-kien/danh-sach-su-kien']);
  }

  goToEdit() {
    this.editForm.enable();
  }

}
