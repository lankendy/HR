import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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
  dsNV = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService,
    private message: NzMessageService,
    private nhanVienService: NhanVienService
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
      tenSP: [null, Validators.required],
      giaSP: [{value: null, disabled: true}],
      soLuong: [null, Validators.required],
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
    this.infoSP.at(index).get('giaSP').setValue(product.price_out);
  }

  // handle navigate
  goToList() {
    this.router.navigate(['dashboard/hoa-don/danh-sach-hoa-don']);
  }

  goToCreate() {
    this.router.navigate(['dashboard/hoa-don/them-hoa-don']);
  }

  submitForm() {
    console.log(this.createForm.value);
  }



}
