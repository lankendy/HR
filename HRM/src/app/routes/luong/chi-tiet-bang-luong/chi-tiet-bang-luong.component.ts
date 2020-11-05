import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-bang-luong',
  templateUrl: './chi-tiet-bang-luong.component.html',
  styleUrls: ['./chi-tiet-bang-luong.component.scss']
})
export class ChiTietBangLuongComponent implements OnInit {
  startDate: any;
  endDate: any;
  dataFakeDetailBangLuong = [
    {code: 'NV001', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV002', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV003', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV004', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV005', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV006', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV007', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV008', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV009', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV010', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV011', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV012', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV013', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV014', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV015', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]},
    {code: 'NV016', name: 'Đỗ Thị Lan', lichLamThem: [1, 2, 3], lichNghi: [0, 0, 1], thuongSP: [2, 3, 2, 3, 1]}
  ];

  dataShow = this.dataFakeDetailBangLuong.slice(0, 10);
  constructor() { }

  ngOnInit() {
    this.setStartDate();
  }

  sliceDataShow(pageNumber) {
    this.dataShow = this.dataFakeDetailBangLuong.slice((pageNumber - 1) * 10, (pageNumber - 1) * 10 + 9);
  }

  pageChange(pageNum) {
    this.sliceDataShow(pageNum);
  }

  // set time
  getMonthPresent() {
    const date = new Date();
    let month = date.getMonth()  + 1;
    return month;
  }

  setStartDate() {
    let start = new Date();
    let end = new Date();
    start.setDate(1);
    end.setDate(28);
    this.startDate = new DatePipe('en-US').transform(start, 'dd/MM/yyyy');
    this.endDate = new DatePipe('en-US').transform(end, 'dd/MM/yyyy');
  }
  

}
