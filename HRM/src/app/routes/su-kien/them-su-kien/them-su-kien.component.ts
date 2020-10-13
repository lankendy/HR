import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-su-kien',
  templateUrl: './them-su-kien.component.html',
  styleUrls: ['./them-su-kien.component.less']
})
export class ThemSuKienComponent implements OnInit {
  createForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      tenSuKien: [null, Validators.required],
      theLoaiSuKien: [null, Validators.required],
      slNguoiThamGia: [null, Validators.required],
      moTa: [null]
    })
  }

  // handle navigate
  goToList() {
    this.router.navigate(['su-kien/danh-sach-su-kien']);
  }

}
