import { DocumentService } from './../../../services/document/document.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-ds-ho-so',
  templateUrl: './ds-ho-so.component.html',
  styleUrls: ['./ds-ho-so.component.scss']
})
export class DsHoSoComponent implements OnInit {
  isLoading = false;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData = [];
  listOfData = [];
  setOfCheckedId = new Set<number>();
  constructor(
    private router: Router,
    private documentService: DocumentService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.getAllDocument();
  }

  // call api
  getAllDocument() {
    this.isLoading = true;
    this.documentService.getAllDocument().subscribe(response => {
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
    this.getAllDocument();
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
  goToDetail(id: string) {
    this.router.navigate(['ho-so/chi-tiet-ho-so', {id: id}])
  }
  goToCreate() {
    this.router.navigate(['ho-so/them-ho-so']);
  }
}
