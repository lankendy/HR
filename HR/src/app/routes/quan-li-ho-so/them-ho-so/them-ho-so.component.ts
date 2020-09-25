import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-ho-so',
  templateUrl: './them-ho-so.component.html',
  styleUrls: ['./them-ho-so.component.scss']
})
export class ThemHoSoComponent implements OnInit {
  createForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      tenNhanVien: [null, Validators.required],
      type: [null, Validators.required],
      ngayTao: [null, Validators.required],
      file: [null, Validators.required]
    })
  }

  // handle navigate
  goToList() {
    this.router.navigate(['ho-so/danh-sach-ho-so']);
  }

}
