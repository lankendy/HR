import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-cancel',
  templateUrl: './button-cancel.component.html',
  styleUrls: ['./button-cancel.component.less']
})
export class ButtonCancelComponent implements OnInit {
  @Input('text') text: string = null;
  @Input('buttonType') buttonType: string = null;
  @Input('popConfirm') popConfirm: boolean = true;
  @Input('confirmOkI18n') confirmOkI18n: string = "Xác nhận";
  @Input('confirmCancelI18n') confirmCancelI18n: string = "Hủy";
  @Input('confirmTitleI18n') confirmTitleI18n: string = "Bạn có muốn hủy bỏ thao tác?";
  @Input('iconType') iconType: string = "close";
  @Input('iconTheme') iconTheme: string = "outline";
  @Input('iconSpin') iconSpin: boolean = false;
  @Input('iconFont') iconFont: string = null;
  @Input('iconRotate') iconRotate: number = null;

  @Output('onClick') onClick = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onConfirm() {
    this.onClick.emit();
  }

}
