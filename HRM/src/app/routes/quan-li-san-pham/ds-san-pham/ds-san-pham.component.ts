import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-ds-san-pham',
  templateUrl: './ds-san-pham.component.html',
  styleUrls: ['./ds-san-pham.component.scss']
})
export class DsSanPhamComponent implements OnInit {
  isLoading = false;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData = [];
  listOfData = [];
  setOfCheckedId = new Set<number>();

  idDelete: number;
  deleteCheck: boolean;
  constructor(
    private router: Router,
    private productService: ProductService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.getListProduct();
  }

  // call api
  getListProduct() {
    this.productService.getAllProduct().subscribe(response => {
      this.isLoading = true;
      if (response.code == 200) {
        this.listOfData = response.data;
        setTimeout(() => {
          this.isLoading = false;
        }, 100)
      }
    });
  }

  // handle loading-button
  reload() {
    this.getListProduct();
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
  getDetail(product: any){
    this.router.navigate(['san-pham/chi-tiet-san-pham', {id: product.id}]);
  }

  goToCreate() {
    this.router.navigate(['san-pham/them-san-pham']);
  }

  // handle event button delete
  deleteProduct() {
    if (this.idDelete) {
      this.productService.deleteProduct(this.idDelete).subscribe(response => {
        if (response.code == 200) {
          this.getListProduct();
          this.message.success('Xóa thành công.');
        } else {
          this.message.error('Đã có lỗi xảy ra.');
        }
      });
    }
  }


}
