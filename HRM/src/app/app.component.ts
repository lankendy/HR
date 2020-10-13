import { Router } from '@angular/router';
import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  isCollapsed = false;
  breadScrumbText: string = 'trangchu';
  route: string;
  constructor(
    private router: Router,
    private location: Location
  ) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
        this.getURL(this.route);
      } else {
        this.route = 'trangchu';
        this.getURL(this.route);
      }
    })
  }
  ngOnInit() {
  }
  ngOnChanges() {
  }
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  // get url
  getURL(route: string) {
    let arr = [];
    let a = '';
    for (let i = 1; i < route.length; i++) {
      if (route[i] == '/') {
        arr.push(a);
        a = '';
      }
      if (route[i] != '/') {
        a = a.concat(route[i]);
      }
      if (i == (route.length - 1)) {
        arr.push(a);
      }
    }
  }
}
