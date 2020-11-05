import { NhanVienService } from './../../../services/nhan-vien/nhan-vien.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document/document.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-them-ho-so',
  templateUrl: './them-ho-so.component.html',
  styleUrls: ['./them-ho-so.component.scss']
})
export class ThemHoSoComponent implements OnInit {
  createForm: FormGroup;
  dsNhanVien = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private documentService: DocumentService,
    private message: NzMessageService,
    private nhanVienService: NhanVienService
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      user_id: [null, Validators.required],
      type: [null, Validators.required],
      file: [null, Validators.required],
      createdBy: [null, Validators.required]
    });
    this.getAllNhanVien();
  }

  submitForm() {
    if (this.createForm.valid) {
      this.documentService.createDocument(this.createForm.value).subscribe(response => {
        if  (response.code == 200) {
          this.message.success('Thêm mới hồ sơ thành công.');
          this.goToDetail(response.data.id);
        }
      })
    }
  }

  // -- get all nhan vien -- //
  getAllNhanVien() {
    this.nhanVienService.getAllUser().subscribe(response => {
      this.dsNhanVien  = response.data;
    });
  }

  goToDetail(id: string) {
    this.router.navigate(['ho-so/chi-tiet-ho-so', {id: id}])
  }

  // -- handle navigate -- //
  goToList() {
    this.router.navigate(['ho-so/danh-sach-ho-so']);
  }

}
