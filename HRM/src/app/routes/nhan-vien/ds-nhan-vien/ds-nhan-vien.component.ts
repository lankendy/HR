import { PositionService } from './../../../services/position/position.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NhanVienService } from 'src/app/services/nhan-vien/nhan-vien.service';

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
  keyword = '';
  checked = false;
  indeterminate = false;
  listOfCurrentPageData = [];
  listOfData = [];
  listOfDisplayData = [];
  setOfCheckedId = new Set<number>();

  idDelete: number;
  deleteCheck: boolean;

  // search table
  searchValueHoTen = '';
  visibleHoVaTen = false;

  searchValueEmail = '';
  visibleEmail = false;

  searchValueSDT = '';
  visibleSDT = false;

  searchValueDiaChi = '';
  visibleDiaChi = false;

  // filter chuc vu
  filterChucVu = {
    filterMultiple: true,
    listOfFilterChucVu: [
    ],
    filterFnChucVu: (list: string[], item) => list.some(chucvu => item.position_id.indexOf(chucvu) !== -1)
  }

  constructor(
    private router: Router,
    private nhanvienService: NhanVienService,
    private message: NzMessageService,
    private positionService: PositionService
  ) { }

 ngOnInit() {
    this.getAllUser();
    this.getAllChucVu();
  }

   // call api
   getAllUser() {
    this.isLoading = true;
    this.nhanvienService.getAllUser().subscribe(res => {
      if (res.code == 200) {
        this.listOfData = res.data;
        this.listOfDisplayData = [...this.listOfData];
        setTimeout(() => {
          this.isLoading = false;
          this.checked = false;
          this.indeterminate = false;
        }, 100);
      }
    })
  }

  getAllChucVu() {
    this.positionService.getAllPosition().subscribe(response => {
      if (response.code == 200) {
        let arrayPosition = response.data.map(position => new Object({text: position.name, value: position.id}));
        this.filterChucVu.listOfFilterChucVu = arrayPosition;
      } else {
        this.message.error("Đã xảy ra lỗi.");
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
    this.router.navigate(['dashboard/nhan-vien/chi-tiet-nhan-vien', {id: nv.id}]);
  }

  goToCreate() {
    this.router.navigate(['dashboard/nhan-vien/them-moi-nhan-vien'])
  }

  // handle delete btn
  deleteUser() {
    this.nhanvienService.deleteUser(this.idDelete).subscribe(response => {
      if (response.code == 200) {
        this.message.success('Xóa thông tin nhân viên thành công.');
        this.getAllUser();
      } else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }


  deleteNhanVien(id) {
    this.idDelete = id;
    this.deleteUser();
  }

  // handle search table
  searchHoTen(): void {
    this.visibleHoVaTen = false;
    this.listOfDisplayData = this.listOfData.filter(item => item.name.indexOf(this.searchValueHoTen) !== -1);
  }

  resetHoTen(): void {
    this.searchValueHoTen = '';
    this.searchHoTen();
  }

  searchEmail(): void {
    this.visibleEmail = false;
    this.listOfDisplayData = this.listOfData.filter(item => item.email.indexOf(this.searchValueEmail) !== -1);
  }

  resetEmail(): void {
    this.searchValueEmail = '';
    this.searchEmail();
  }

  searchSDT(): void {
    this.visibleSDT = false;
    this.listOfDisplayData = this.listOfData.filter(item => item.phone.indexOf(this.searchValueSDT) !== -1);
  }

  resetSDT(): void {
    this.searchValueSDT = '';
    this.searchSDT();
  }

  searchDiaChi(): void {
    this.visibleDiaChi = false;
    this.listOfDisplayData = this.listOfData.filter(item => item.address.indexOf(this.searchValueDiaChi) !== -1);
  }

  resetDiaChi(): void {
    this.searchValueDiaChi = '';
    this.searchDiaChi();
  }

  showBangLuong() {
    this.router.navigate(['dashboard/luong/bang-luong']);
  }

  searchAll() {
      this.nhanvienService.searchAll(this.keyword).subscribe(res => {
        if (res.code == 200) {
          this.listOfDisplayData = res.data.allData;
        }
        else {
          this.message.error('Đã có lỗi xảy ra.');
        }
      })
  }

}
