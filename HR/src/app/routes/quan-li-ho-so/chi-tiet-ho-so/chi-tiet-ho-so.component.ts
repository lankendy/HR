import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-ho-so',
  templateUrl: './chi-tiet-ho-so.component.html',
  styleUrls: ['./chi-tiet-ho-so.component.scss']
})
export class ChiTietHoSoComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      tenNhanVien: [null, Validators.required],
      type: [null, Validators.required],
      ngayTao: [null, Validators.required],
      file: [null, Validators.required]
    });

    this.editForm.disable();
  }

  // handle navigate
  goToList() {
    this.router.navigate(['ho-so/danh-sach-ho-so']);
  }

  goToEdit() {
    this.editForm.enable();
  }

}
