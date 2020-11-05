import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bang-luong',
  templateUrl: './bang-luong.component.html',
  styleUrls: ['./bang-luong.component.scss']
})
export class BangLuongComponent implements OnInit {
  dataBangLuong = [
    {
      codeNV: 'NV001',
      name: 'Đỗ Thị Lan',
      position: 'Phó giám đốc chi nhánh',
      salaryBase: 10000000,
      salaryProduct: 2000000,
      salaryWorkOT: 4000000,
      salarySub: 500000
    },
    {
      codeNV: 'NV002',
      name: 'Đỗ Thị Lan',
      position: 'Nhân viên thu ngân',
      salaryBase: 10000000,
      salaryProduct: 2000000,
      salaryWorkOT: 4000000,
      salarySub: 500000
    },
    {
      codeNV: 'NV003',
      name: 'Nguyễn Văn B',
      position: 'Nhân viên sửa máy',
      salaryBase: 10000000,
      salaryProduct: 2000000,
      salaryWorkOT: 4000000,
      salarySub: 500000
    },
    {
      codeNV: 'NV004',
      name: 'Nguyễn Đồng Minh',
      position: 'Thủ kho',
      salaryBase: 10000000,
      salaryProduct: 2000000,
      salaryWorkOT: 4000000,
      salarySub: 500000
    },
    {
      codeNV: 'NV005',
      name: 'Đỗ Thị Lan',
      position: 'Phó giám đốc chi nhánh',
      salaryBase: 10000000,
      salaryProduct: 2000000,
      salaryWorkOT: 4000000,
      salarySub: 500000
    },{
      codeNV: 'NV006',
      name: 'Đỗ Thị Lan',
      position: 'Nhân viên bán hàng',
      salaryBase: 10000000,
      salaryProduct: 2000000,
      salaryWorkOT: 4000000,
      salarySub: 500000
    },
    {
      codeNV: 'NV007',
      name: 'Đỗ Thị Lan',
      position: 'Nhân viên bán hàng',
      salaryBase: 10000000,
      salaryProduct: 2000000,
      salaryWorkOT: 4000000,
      salarySub: 500000
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailBangLuong() {
    this.router.navigate(['/luong/chi-tiet-bang-luong']);
  }

}
