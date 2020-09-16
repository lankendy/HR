import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-base',
  templateUrl: './button-base.component.html',
  styleUrls: ['./button-base.component.less']
})
export class ButtonBaseComponent implements OnInit {

  @Input('text') text: string;
  @Input('buttonType') buttonType = "primary";
  @Input('buttonClass') buttonClass: string = null;
  @Input('iconType') iconType = "question";
  @Input('iconTheme') iconTheme = "outline";
  @Input('disabled') disabled = false;
  @Input('buttonShape') buttonShape: string = null;
  @Input('iconClass') iconClass: string = null;
  @Input('iconSpin') iconSpin = false;
  @Input('loading') loading = false;
  @Input('iconFont') iconFont: string = null;
  @Input('iconRotate') iconRotate: number = null;
  @Output('onClick') onClick = new EventEmitter();

  @Input('popConfirm') popConfirm: boolean = false;
  @Input('confirmOkI18n') confirmOkI18n: string = "layout.confirm.save.confirm.accept";
  @Input('confirmCancelI18n') confirmCancelI18n: string = "layout.confirm.save.confirm.cancel";
  @Input('confirmTitleI18n') confirmTitleI18n: string = "layout.confirm.send";

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.onClick.emit();
  }

}
