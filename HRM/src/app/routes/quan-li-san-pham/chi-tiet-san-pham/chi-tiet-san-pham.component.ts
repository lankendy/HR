import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductService } from './../../../services/product/product.service';
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
  product_type: string;
  dsLoaiSP = [
    {id: 0, name: 'SP Loại 1'},
    {id: 1, name: 'SP Loại 2'},
    {id: 2, name: 'SP Loại 3'},
    {id: 3, name: 'SP Loại 4'}
  ]
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.editForm = this.fb.group({
      name: [null, [Validators.required]],
      price_in: [null, [Validators.required]],
      price_out: [null, [Validators.required]],
      product_type: [null, Validators.required]
    });
    this.getDetailProduct();
  }

  // call api
  getDetailProduct() {
    this.productService.getDetailProduct(this.id).subscribe(response => {
      if (response.code == 200) {
        this.editForm.patchValue(response.data);
        this.product_type = String(response.data.product_type);
        this.editForm.disable();
      } else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  submitForm() {
    if (this.editForm.valid) {
      this.productService.editProduct({...this.editForm.value, id: this.id}).subscribe(response => {
        if (response.code == 200) {
          this.message.success('Đã chỉnh sửa sản phẩm thành công.');
        }
        else {
          this.message.error('Đã có lỗi xảy ra.');
        }
      })
    }
  }

  // handle navigate
  goToList() {
    this.router.navigate(['dashboard/san-pham/danh-sach-san-pham']);
  }

  goToEdit() {
    this.editForm.enable();
  }

}
