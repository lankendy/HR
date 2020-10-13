import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NhanVienService } from 'src/app/services/nhan-vien/nhan-vien.service';

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

interface DataItem {
  ten: string;
  email: string;
  sdt: number;
  diaChi: string;
  chucVu: string;
}
@Component({
  selector: 'app-ds-nhan-vien',
  templateUrl: './ds-nhan-vien.component.html',
  styleUrls: ['./ds-nhan-vien.component.scss']
})
export class DsNhanVienComponent implements OnInit {
  isLoading = false;
  listOfColumns: ColumnItem[] = [
    {
      name: 'Tên',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.ten.localeCompare(b.ten),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: DataItem) => list.some(ten => item.ten.indexOf(ten) !== -1)
    },
    {
      name: 'Email',
      sortOrder: 'ascend',
      sortFn: (a: DataItem, b: DataItem) => a.email.localeCompare(b.email),
      sortDirections: ['descend', 'ascend'],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'SĐT',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.sdt - b.sdt,
      sortDirections: ['descend', 'ascend'],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Địa chỉ',
      sortOrder: '',
      sortFn: (a: DataItem, b: DataItem) => a.diaChi.localeCompare(b.diaChi),
      sortDirections: ['descend', 'ascend'],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Chức vụ',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.chucVu.localeCompare(b.chucVu),
      filterMultiple: false,
      listOfFilter: [
        { text: 'Admin', value: 'Admin' },
        { text: 'Kế toán', value: 'ketoan' },
        { text: 'Nhân viên', value: 'nhanvien'}
      ],
      filterFn: (chucVu: string, item: DataItem) => item.chucVu.indexOf(chucVu) !== -1
    }
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData = [];
  listOfData = [];
  setOfCheckedId = new Set<number>();

  idDelete: number;
  deleteCheck: boolean;
  constructor(
    private router: Router,
    private nhanvienService: NhanVienService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.getAllUser();
  }

   // call api
   getAllUser() {
    this.isLoading = true;
    this.nhanvienService.getAllUser().subscribe(res => {
      if (res.code == 200) {
        this.listOfData = res.data;
        setTimeout(() => {
          this.isLoading = false;
          this.checked = false;
          this.indeterminate = false;
        }, 100);
      }
    })
  }


  // handle loading-button
  reload(): void {
    this.getAllUser();
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
    this.idDelete = id;
    this.deleteCheck = checked;
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
  getDetail(nv) {
    this.router.navigate(['nhan-vien/chi-tiet-nhan-vien', {id: nv.id}]);
  }

  goToCreate() {
    this.router.navigate(['nhan-vien/them-moi-nhan-vien'])
  }

  // handle delete btn
  deleteUser() {
    this.nhanvienService.deleteUser(this.idDelete).subscribe(response => {
      if (response.code == 200) {
        this.message.success('Xóa thông tin nhân viên thành công.');
      } else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

}
