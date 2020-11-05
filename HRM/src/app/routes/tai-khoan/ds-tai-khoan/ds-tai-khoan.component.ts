import { NzMessageService } from 'ng-zorro-antd/message';
import { AccountService } from './../../../services/account/account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ds-tai-khoan',
  templateUrl: './ds-tai-khoan.component.html',
  styleUrls: ['./ds-tai-khoan.component.scss']
})
export class DsTaiKhoanComponent implements OnInit {
  isLoading = false;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData = [];
  listOfData = [];
  setOfCheckedId = new Set<number>();
  idDelete: number;
  constructor(
    private router: Router,
    private accountService: AccountService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.getAllAccount();
  }

  // call api
  getAllAccount() {
    this.isLoading = true;
    this.accountService.getAllAccount().subscribe(response => {
      if (response.code == 200) {
        this.listOfData = response.data;
        setTimeout(() => {
          this.isLoading = false;
        },100);
      } else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    });
  }

  reload() {
    this.getAllAccount();
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
    this.idDelete = id;
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
  goToDetail(id: string) {
    this.router.navigate(['tai-khoan/chi-tiet-tai-khoan', {id: id}]);
  }

  goToCreate() {
    this.router.navigate(['tai-khoan/them-tai-khoan']);
  }

  // handle delete account
  deleteAccount() {
    this.accountService.deleteAccount(this.idDelete).subscribe(response => {
      if (response.code == 200) {
        this.getAllAccount();
        this.message.success('Đã xóa.');
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

}
