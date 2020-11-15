import { BillService } from './../../../services/bill/bill.service';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NhanVienService } from 'src/app/services/nhan-vien/nhan-vien.service';

@Component({
  selector: 'app-them-hoa-don',
  templateUrl: './them-hoa-don.component.html',
  styleUrls: ['./them-hoa-don.component.less']
})
export class ThemHoaDonComponent implements OnInit {
  createForm: FormGroup;
  dsSanPham = [];
  priceSP: number;
  priceOneProduct: number;
  dsNV = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService,
    private message: NzMessageService,
    private nhanVienService: NhanVienService,
    private billService: BillService,
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      user_id: [null, Validators.required],
      infoSP: this.fb.array([])
    });

    this.getAllProduct();
    this.addSP();
    this.getAllNhanVien();
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

  newSP(): FormGroup {
    return this.fb.group({
      product_id: [null, Validators.required],
      price_out: [{value: null, disabled: true}],
      total: [null, [Validators.required, Validators.min(1)]],
    })
  }

  get infoSP() {
    return this.createForm.get('infoSP') as FormArray;
  }

  get tenNguoiTao() {
    return this.createForm.get('tenNguoiTao');
  }

  addSP(){
    this.infoSP.push(this.newSP());
  }

  removeSP(index: number) {
    this.infoSP.removeAt(index);
  }

  changeSP(event, index) {
    let product = this.dsSanPham.find(sp => sp.id == event);
    let priceOut = product.price_out.toString();
    this.priceOneProduct = product.price_out;
    this.formatPrice(priceOut);
    priceOut = this.formatPrice(priceOut);
    this.infoSP.at(index).get('price_out').setValue(priceOut);
  }

  // handle navigate
  goToList() {
    this.router.navigate(['dashboard/hoa-don/danh-sach-hoa-don']);
  }

  goToCreate() {
    this.router.navigate(['dashboard/hoa-don/them-hoa-don']);
  }

  submitForm() {
    if (this.createForm.valid) {
      for (let control of this.infoSP.controls) {
        let price = this.convertPriceToNumber(control.get('price_out').value);
        control.get('price_out').setValue(price);
      }
      this.billService.addBill(this.createForm.value).subscribe(res =>{
        if (res.code == 200) {
          this.message.success('Thêm mới thành công.');
          for (let control of this.infoSP.controls) {
            let price2 = this.formatPrice(control.get('price_out').value.toString());
            control.get('price_out').setValue(price2);
          }
        }
        else {
          this.message.error('Có lỗi xảy ra.')
        }
      })
    }
  }

  // format price with pattern
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

  setPriceNumber(index) {
    let price = this.convertPriceToNumber(this.infoSP.at(index).get('price_out').value);
    this.infoSP.at(index).get('price_out').setValue(price);
}

  // changeTotalProduct

  changeTotalProduct(total, index) {
    if (total) {
      this.setPriceNumber(index);
      this.infoSP.at(index).get('price_out').setValue(total * this.priceOneProduct);
      let price = this.formatPrice(this.infoSP.at(index).get('price_out').value.toString());
      this.infoSP.at(index).get('price_out').setValue(price);
    }
  }



}
