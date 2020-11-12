import { BillService } from './../../../services/bill/bill.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-danh-sach-hoa-don',
  templateUrl: './danh-sach-hoa-don.component.html',
  styleUrls: ['./danh-sach-hoa-don.component.scss']
})
export class DanhSachHoaDonComponent implements OnInit {
  isLoading = false;
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
    this.listOfData = new Array(200).fill(0).map((_, index) => {
      return {
        id: index,
        ten: `Edward King ${index}`,
        tenSP: `dien thoai ${index}`,
        tenKH: `khach hang ${index}`,
        tongTien: `1500${index}`
      };
    });

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
  getDetail() {
    this.router.navigate(['dashboard/hoa-don/chi-tiet-hoa-don'])
  }

  goToCreate() {
    this.router.navigate(['dashboard/hoa-don/them-hoa-don'])
  }


}
