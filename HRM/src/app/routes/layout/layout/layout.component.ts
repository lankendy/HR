import { AccountService } from './../../../services/account/account.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  breadScrumbText: string = 'trangchu';
  route: string;
  constructor() {
  }
  ngOnInit() {
  }

  ngOnChanges() {
  }


  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
