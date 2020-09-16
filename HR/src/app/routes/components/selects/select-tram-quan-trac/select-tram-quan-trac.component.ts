import { TramQuanTracService } from './../../../../services/catalog-manager/tram-quan-trac/tram-quan-trac.service';
import { Component, OnInit, Input, Self, Output, EventEmitter, Optional } from '@angular/core';
import { defaultRequestList } from 'src/app/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { RESPONSE_STATUS_CODES } from '@core';

@Component({
  selector: 'app-select-tram-quan-trac',
  templateUrl: './select-tram-quan-trac.component.html',
  styleUrls: ['./select-tram-quan-trac.component.less']
})
export class SelectTramQuanTracComponent implements ControlValueAccessor, OnInit {
  @Input('giayPhepId') giayPhepId: string;
  @Input('getObjectValue') getObjectValue: boolean = false;
  @Input('valueField') valueField: string = "id";
  @Input('labelContent') labelContent: string = "component.base.select.tram-quan-trac.label";
  @Input('errorTip') errorTip: string = "component.base.select.tram-quan-trac.require";
  @Input('placeHolder') placeHolder: string = "component.base.select.tram-quan-trac.placeholder";
  @Input('disabled') disabled: boolean = false;
  @Input('required') required: boolean = false;
  @Input('openSearch') openSearch: boolean = false;
  @Input('name') name: string = "select-tram-quan-trac";
  @Input('span') span: number = 16;
  @Input('hideLabel') hideLabel: boolean = false;
  @Output('onSelectChange') onSelectChange = new EventEmitter<any>();
  requestGiayPhep: any = {
    ...defaultRequestList,
  };
  tramQuanTracs: any = [];
  showSearchGiayPhep = false;
  searchGiayPhepChange$ = new BehaviorSubject('');
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private tramQuanTracService: TramQuanTracService,
    private message: NzMessageService,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    // this.fetchTramQuanTrac();
  }

  ngOnChanges(changes) {
    if (changes.giayPhepId) {
      this.fetchTramQuanTrac();
    }
  }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  fetchTramQuanTrac() {
    if (this.giayPhepId)
      this.tramQuanTracService.getAllByGiayPhep(this.giayPhepId, 0).subscribe(response => {
        if (response.code === RESPONSE_STATUS_CODES[200]) {
          this.tramQuanTracs = response.data;
          if (Array.isArray(this.tramQuanTracs) && this.tramQuanTracs.length > 0 && this.getObjectValue) {
            for (const dataQuantrac of this.tramQuanTracs) {
              if (this.ngControl.control.value == dataQuantrac.kyHieu) {
                this.onSelectChange.emit(dataQuantrac);
                return;
              }
            }
          }
          return;
        } else {
          this.message.error(response.message);
        }
      });
    else {
      this.tramQuanTracs = [];
    }
  }
  // -- END FETCH DATA --//

  handleSelectChange(value) {
    this.onSelectChange.emit(value);
  }
}
