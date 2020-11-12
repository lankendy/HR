import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import {  NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-them-san-pham',
  templateUrl: './them-san-pham.component.html',
  styleUrls: ['./them-san-pham.component.less']
})
export class ThemSanPhamComponent implements OnInit {
  createForm: FormGroup;
  dsLoaiSP = [
    {id: 0, name: 'SP Loại 1'},
    {id: 1, name: 'SP Loại 2'},
    {id: 2, name: 'SP Loại 3'},
    {id: 3, name: 'SP Loại 4'}
  ]
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      name: [null, [Validators.required]],
      price_in: [null, [Validators.required]],
      price_out: [null, [Validators.required]],
      loaiSP: [null, Validators.required]
    })
  }
  
  // handle navigate
  goToList() {
    this.router.navigate(['dashboard/san-pham/danh-sach-san-pham']);
  }

  // submit form
  submitForm() {
    if( this.createForm.valid) {
      this.productService.createProduct(this.createForm.value).subscribe(response => {
        if(response.code == 200) {
          this.message.success('Thêm mới sản phẩm thành công.')
        }
      });
    }
  }

}
