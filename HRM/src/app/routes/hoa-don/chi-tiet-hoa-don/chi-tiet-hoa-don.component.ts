import { BillService } from './../../../services/bill/bill.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NhanVienService } from 'src/app/services/nhan-vien/nhan-vien.service';

@Component({
  selector: 'app-chi-tiet-hoa-don',
  templateUrl: './chi-tiet-hoa-don.component.html',
  styleUrls: ['./chi-tiet-hoa-don.component.less']
})
export class ChiTietHoaDonComponent implements OnInit {
  editForm: FormGroup;
  dsSanPham = [];
  id: any;
  dsNV = [];
  priceOneProduct: number;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService,
    private message: NzMessageService,
    private route: ActivatedRoute,
    private billService: BillService,
    private nhanVienService: NhanVienService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.editForm = this.fb.group({
      user_id: [null, Validators.required],
      product_id: [null, Validators.required],
      total: [null, Validators.required],
      price: [null, Validators.required]
    });
    this.editForm.disable();
    this.getAllNhanVien();
    this.getAllProduct();
    this.getDetail();
  }

  getDetail() {
    this.billService.getDetailBill(this.id).subscribe(res => {
      if(res.code == 200) {
        this.editForm.patchValue(res.data);
        this.priceOneProduct = res.data.product.price_out;
        let price = this.formatPrice(this.editForm.get('price').value.toString());
        this.editForm.get('price').setValue(price);
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // get all product
  getAllProduct() {
    this.productService.getAllProduct().subscribe(res => {
      if (res.code == 200) {
        this.dsSanPham = res.data;
      } 
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // submit form
  submitForm() {
    if (this.editForm.valid) {
      this.setPriceNumber();
      this.billService.updateBill({...this.editForm.value, id: this.id}).subscribe(res => {
        if (res.code == 200) {
          this.message.success('Đã chỉnh sửa thành công.');
          let price = this.formatPrice(this.editForm.get('price').value.toString());
          this.editForm.get('price').setValue(price);
          this.editForm.disable();
        }
        else {
          this.message.error('Đã có lỗi xảy ra.');
        }
      })
    }
  }

  // get all nhan vien
  getAllNhanVien() {
    this.nhanVienService.getAllUser().subscribe(res => {
      if (res.code == 200) {
        this.dsNV = res.data;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // handle navigate
  goToList() {
    this.router.navigate(['dashboard/hoa-don/danh-sach-hoa-don']);
  }

  goToEdit() {
    this.editForm.enable();
    this.editForm.get('price').disable();
  }

  // format price display
  formatPrice(input: string) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] == ',') {
        input = input.replace(",", "");
      }
    }
    let size = input.length;
    if (size < 4) {
      input = input;
    }
    switch(size) {
      case 4: 
        input = input.substring(0, 1) + "," + input.substring(1);
        break;
      case 5:
        input = input.substring(0, 2) + "," + input.substring(2);
        break;
      case 6: 
        input = input.substring(0, 3) + "," + input.substring(3);
        break;
      case 7:
        input = input.substring(0, 1) + "," + input.substring(1, 4) + "," + input.substring(4);
        break;
      case 8: 
        input = input.substring(0, 2) + "," + input.substring(2, 5) + "," + input.substring(5);
        break;
      case 9:
        input = input.substring(0, 3) + "," + input.substring(3, 6) + "," + input.substring(6);
        break;
    }
    return input;
  }

  // convert price to number to submit form
  convertPriceToNumber(input: string) {
    if (input) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] == ','){
          input = input.replace(",", "");
        }
      }
    }
    return Number(input);
  }

  setPriceNumber() {
      let price = this.convertPriceToNumber(this.editForm.get('price').value);
      this.editForm.get('price').setValue(price);
  }

  // change total product
  changeTotalProduct(total) {
    if (total) {
      total = Number(total);
      this.setPriceNumber();
      this.editForm.get('price').setValue(total * this.priceOneProduct);
      let price = this.formatPrice(this.editForm.get('price').value.toString());
      this.editForm.get('price').setValue(price);
    }
  }

}
