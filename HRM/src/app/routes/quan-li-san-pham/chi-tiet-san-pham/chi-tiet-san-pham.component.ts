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
    });
    this.getDetailProduct();
  }

  // call api
  getDetailProduct() {
    this.productService.getDetailProduct(this.id).subscribe(response => {
      if (response.code == 200) {
        this.editForm.patchValue(response.data);
        this.editForm.disable();
      } else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // handle navigate
  goToList() {
    this.router.navigate(['san-pham/danh-sach-san-pham']);
  }

  goToEdit() {
    this.editForm.enable();
  }

}
