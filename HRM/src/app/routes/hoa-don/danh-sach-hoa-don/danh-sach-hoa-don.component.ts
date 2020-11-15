import { BillService } from './../../../services/bill/bill.service';
import { Router } from '@angular/router';
import { Component, OnInit, Pipe } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-danh-sach-hoa-don',
  templateUrl: './danh-sach-hoa-don.component.html',
  styleUrls: ['./danh-sach-hoa-don.component.scss'],
})
export class DanhSachHoaDonComponent implements OnInit {
  isLoading = false;
  keyword:string;
  createDateStart;
  createDateEnd;
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData = [];
  listOfData = [];
  setOfCheckedId = new Set<number>();

  // 
  dsBill = [];
  constructor(
    private router: Router,
    private billService: BillService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.getAllBill();
  }

  // call api 
  getAllBill() {
    this.billService.getAllBill().subscribe(res => {
      if (res.code == 200) {
        this.dsBill = res.data;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
    
  }

  // delete bill
  deleteRecord(id) {
    this.billService.deleteBill(id).subscribe(res => {
      if (res.code == 200) {
        this.message.success('Đã xóa thành công.');
        this.getAllBill();
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // handle loading-button
  load(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  // handle table
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  // searchAll
  searchAll(event) {
    this.billService.searchAll(event).subscribe(res => {
      if (res.code == 200) {
        this.dsBill = res.data;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.')
      }
    })
  }

  // searchDate
  searchDate() {
    this.billService.searchWithDate();
  }

  // reload
  reload() {
    this.getAllBill();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  // handle navigate
  getDetail(id) {
    this.router.navigate(['dashboard/hoa-don/chi-tiet-hoa-don', {id: id}])
  }

  goToCreate() {
    this.router.navigate(['dashboard/hoa-don/them-hoa-don'])
  }


}
