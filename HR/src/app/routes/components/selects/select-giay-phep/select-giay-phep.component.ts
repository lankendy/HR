import { Component, OnInit, Input, Self, Output, EventEmitter, Optional } from '@angular/core';
import { defaultRequestList } from 'src/app/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { RESPONSE_STATUS_CODES } from '@core';
import { debounceTime } from 'rxjs/operators';
import { GiayPhepService } from 'src/app/services/catalog-manager/giay-phep/giay-phep.service';

@Component({
  selector: 'app-select-giay-phep',
  templateUrl: './select-giay-phep.component.html',
  styleUrls: ['./select-giay-phep.component.scss']
})
export class SelectGiayPhepComponent implements ControlValueAccessor, OnInit {
  @Input('labelContent') labelContent: string = "component.base.select.giay-phep.label.giay-phep";
  @Input('errorTip') errorTip: string;
  @Input('placeHolder') placeHolder: string = "component.base.select.giay-phep.label.giay-phep.placeholder";
  @Input('disabled') disabled: boolean = false;
  @Input('required') required: boolean = false;
  @Input('openSearch') openSearch: boolean = false;
  @Input('getObjectValue') getObjectValue: boolean = false;
  @Input('name') name: string = "select-giay-phep";
  @Input('span') span: number = 16;

  @Output('onSelectChange') onSelectChange = new EventEmitter<any>();
  requestGiayPhep: any = {
    ...defaultRequestList,
  };
  giayPheps: any = [];
  showSearchGiayPhep = false;
  searchGiayPhepChange$ = new BehaviorSubject('');
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private giayPhepService: GiayPhepService,
    private message: NzMessageService,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.initSearchGiayPhep();
  }

  writeValue(obj: any): void {
    if (obj && this.giayPheps.filter(x => x.id == obj).length == 0) {
      this.giayPhepService.getGiayPhepById(obj).toPromise().then(response => {
        if (response.code === RESPONSE_STATUS_CODES[200]) {
          this.giayPheps.push(response.data)
        } else {
          this.message.error(response.message);
        }
      });
    }
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  fetchGiayPhep() {
    const queryModel = {
      ListTextSearch: this.requestGiayPhep.listTextSearch,
      Sort: this.requestGiayPhep.sort,
      SoGiayPhep: this.requestGiayPhep.soGiayPhep
    };
    const queryString = JSON.stringify(queryModel);
    this.giayPhepService.getListGiayPhepByUserId(1, 7, queryString).subscribe(response => {
      if (response.code === RESPONSE_STATUS_CODES[200]) {
        this.giayPheps = response.data.content;
      } else {
        this.message.error(response.message);
      }
    });
  }
  // -- END FETCH DATA --//


  // -- FILTER ON SELECT --//
  initSearchGiayPhep() {
    const optionList$: Observable<any> = this.searchGiayPhepChange$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe(value => {
      this.requestGiayPhep.listTextSearch = [value];
      this.fetchGiayPhep();
    });
  }

  onSearchGiayPhep(data) {
    this.searchGiayPhepChange$.next(data);
  }
  // -- END FILTER ON SELECT --//

  // -- MODAL SEARCH -- //
  onClickOpenSearchGiayPhep() {
    this.showSearchGiayPhep = true;
  }
  callBackSearchGiayPhep(data: any) {
    this.showSearchGiayPhep = false;
    if (this.giayPheps.findIndex(x => x.id == data.id) == -1)
      this.giayPheps.push(data);
    this.ngControl.control.setValue(data.id);

  }
  onCancelSearchGiayPhep() {
    this.showSearchGiayPhep = false;
  }

  handleSelectChange(value) {
    this.onSelectChange.emit(value);
  }

}
