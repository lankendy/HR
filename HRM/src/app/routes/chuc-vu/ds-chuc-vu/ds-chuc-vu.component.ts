import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-ds-chuc-vu',
  templateUrl: './ds-chuc-vu.component.html',
  styleUrls: ['./ds-chuc-vu.component.scss']
})
export class DsChucVuComponent implements OnInit {
  isLoading = false;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData = [];
  listOfData = [];
  setOfCheckedId = new Set<number>();
  idDelete: any;
  constructor(
    private router: Router,
    private PositionService: PositionService,
    private positionService: PositionService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.getAllPosition();
  }

  
  // call api
  getAllPosition() {
    this.isLoading = true;
    this.positionService.getAllPosition().subscribe(response => {
      if (response.code == 200) {
        this.listOfData = response.data;
        this.isLoading = false;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // handle loading-button
  reload() {
    this.getAllPosition();
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
    this.router.navigate(['chuc-vu/chi-tiet-chuc-vu', {id: id}])
  }
  goToCreate() {
    this.router.navigate(['chuc-vu/them-chuc-vu']);
  }

  deleteChucVu() {
    this.positionService.deletePosition(this.idDelete).subscribe(res => {
      if (res.code == 200) {
        this.message.success('Đã xóa chức vụ thành công.');
        this.getAllPosition();
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  deleteCV(id){
    this.idDelete = id;
    this.deleteChucVu();
  }

}
