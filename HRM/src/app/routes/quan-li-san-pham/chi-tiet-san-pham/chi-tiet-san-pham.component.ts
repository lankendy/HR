import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-san-pham',
  templateUrl: './chi-tiet-san-pham.component.html',
  styleUrls: ['./chi-tiet-san-pham.component.less']
})
export class ChiTietSanPhamComponent implements OnInit {
  editForm: FormGroup;
  id: string;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.editForm = this.fb.group({
      tenSP: [null, [Validators.required]],
      giaNhap: [null, [Validators.required]],
      giaBan: [null, [Validators.required]],
      soLuong: [null]
    });
    this.editForm.disable();
  }

  // call api
  getDetailProduct() {
    // note: chua co api get detail 1 product
  }

  // handle navigate
  goToList() {
    this.router.navigate(['san-pham/danh-sach-san-pham']);
  }

  goToEdit() {
    this.editForm.enable();
  }

}
