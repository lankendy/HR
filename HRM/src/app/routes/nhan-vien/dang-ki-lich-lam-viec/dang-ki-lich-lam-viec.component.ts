import { DkLichLamViecService } from './../../../services/dang-ki-lich-lv/dk-lich-lam-viec.service';
import { AbsenceTypeService } from './../../../services/absence-type/absence-type.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NhanVienService } from 'src/app/services/nhan-vien/nhan-vien.service';
import { FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dang-ki-lich-lam-viec',
  templateUrl: './dang-ki-lich-lam-viec.component.html',
  styleUrls: ['./dang-ki-lich-lam-viec.component.scss']
})
export class DangKiLichLamViecComponent implements OnInit {
  listOfDisplayDataLV = [];
  listOfDisplayDataLN = [];
  isVisibleModalDKLV = false;
  isVisibleModalDKLN = false;
  formModalLV: FormGroup;
  formModalLN: FormGroup;
  listNhanVien = [];
  startDate: string;
  lastDate: string;
  keyLV: any;
  keyLN: any;
  // modal ngay lam
  dsNgayLam = [];

  // modal ngay nghi
  dsNgayNghi = [];
  constructor(
    private formBuilder: FormBuilder,
    private nhanVienService: NhanVienService,
    private message: NzMessageService,
    private absenceService: AbsenceTypeService,
    private dklichlamviecService: DkLichLamViecService
    ) { }

  ngOnInit() {
    this.initialFormModalLV();
    this.initialFormModalLN();
    this.adddateLV();
    this.adddateLN();
    this.getAllNhanVien();
    this.setDate();
    this.getAllLichLamViec();
    this.getAllLichNghi();
    // modal ngay lam
    this.getAllLoaiNgayLam();
    // modal ngay nghi
    this.getAllLoaiNgayNghi();
  }

  initialFormModalLV() {
    this.formModalLV = this.formBuilder.group({
      user_id: [null, [Validators.required]],
      description: [null],
      list: this.formBuilder.array([]),
      status: [{value: 0, disabled: true}]
    })
  }

  initialFormModalLN() {
    this.formModalLN = this.formBuilder.group({
      user_id: [null, [Validators.required]],
      description: [null],
      list: this.formBuilder.array([]),
      status: [{value: 0, disabled: true}]
    })
  }
  

  // get all loai ngay lam
  getAllLoaiNgayLam() {
    this.absenceService.getAllNgayLam().subscribe(res => {
      if (res.code == 200) {
        this.dsNgayLam = res.data;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    });
  }

  // get all loai ngay nghi
  getAllLoaiNgayNghi() {
    this.absenceService.getAllNgayNghi().subscribe(res => {
      if (res.code == 200) {
        this.dsNgayNghi = res.data;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // getAll danh sach nhan vien
  getAllNhanVien() {
    this.nhanVienService.getAllUser().subscribe(res => {
      if (res.code == 200) {
        this.listNhanVien = res.data;
      } else {
        this.message.error('Có lỗi xảy ra!');
      }
    })
  }

  showModalDKLV() {
    this.isVisibleModalDKLV = true;
  }

  showModalDKLN() {
    this.isVisibleModalDKLN = true;
  }

  handleOkModalLV() {
    this.dklichlamviecService.addLichLamViec(this.formModalLV.value).subscribe(res => {
      if (res.code == 200) {
        this.isVisibleModalDKLV = false;
        this.message.success('Tạo mới thành công.');
        this.getAllLichLamViec();
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  handleOkModalLN() {
    this.dklichlamviecService.addLichLamViec(this.formModalLN.value).subscribe(res => {
      if (res.code == 200) {
        this.isVisibleModalDKLN = false;
        this.getAllLichNghi();
        this.message.success('Tạo mới thành công.');
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // get all danh sach lich lam viec - lich nghi
  getAllLichLamViec() {
    this.dklichlamviecService.getAllLichNgayLam().subscribe(response => {
      if (response.code == 200) {
        this.listOfDisplayDataLV = response.data;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  getAllLichNghi() {
    this.dklichlamviecService.getAllLichNgayNghi().subscribe(response => {
      if (response.code == 200) {
        this.listOfDisplayDataLN = response.data;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  deleteLichLamViec(id: any) {
    this.dklichlamviecService.deleteLichLamViec(id).subscribe(res => {
      if (res.code == 200) {
        this.message.success('Đã xóa thành công.');''
        this.getAllLichLamViec();
        this.getAllLichNghi();
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  pheDuyetDangKi(id) {
    this.dklichlamviecService.updateStatus(id).subscribe(res => {
      if (res.code == 200) {
        this.message.success('Đã phê duyệt.');
        this.getAllLichLamViec();
        this.getAllLichNghi();
      }
    else {
      this.message.error('Đã có lỗi xảy ra.')
    }
    })
  }

  resetPheDuyet(id) {
    this.dklichlamviecService.refreshStatus(id).subscribe(res => {
      if (res.code == 200) {
        this.message.success('Đã reset phê duyệt.');
        this.getAllLichLamViec();
        this.getAllLichNghi();
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // search
  searchAllNgayLV(keyword) {
    this.dklichlamviecService.searchAllNgayLam(keyword).subscribe(res => {
      if (res.code == 200) {
        this.listOfDisplayDataLV = res.data.allData;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.')
      }
    })
  }

  searchAllNgayLN(keyword) {
    this.dklichlamviecService.searchAllNgayNghi(keyword).subscribe(res => {
      if (res.code == 200) {
        this.listOfDisplayDataLN = res.data.allData;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  handleCancelModalLV() {
    this.isVisibleModalDKLV = false;
  }

  handleCancelModalLN() {
    this.isVisibleModalDKLN = false;
  }

  get user_id_lv() {
    return this.formModalLV.get('user_id');
  }

  get description_lv() {
    return this.formModalLV.get('description');
  }

  get list_lv() {
    return this.formModalLV.get('list') as FormArray;
  }

  get status_lv() {
    return this.formModalLV.get('status');
  }

  get user_id_ln() {
    return this.formModalLN.get('user_id');
  }

  get description_ln() {
    return this.formModalLN.get('description');
  }

  get list_ln() {
    return this.formModalLN.get('list') as FormArray;
  }

  get status_ln() {
    return this.formModalLN.get('status');
  }

  newdate(): FormGroup {
    return this.formBuilder.group({
      date: [null, [Validators.required]],
      day: [null, [Validators.required, Validators.maxLength(2), Validators.max(31)]],
      type: [null]
    });
  }




  adddateLV() {
    this.list_lv.push(this.newdate());
  }

  adddateLN() {
    this.list_ln.push(this.newdate());
  }

  removedateLV(i: number) {
    this.list_lv.removeAt(i);
  }

  removedateLN(i: number) {
    this.list_ln.removeAt(i);
  }

  // validator

  setDate() {
    const date = new Date();
    let start = new Date(date.getFullYear(), date.getMonth(), 1);
    let last = new Date(date.getFullYear(), date.getMonth(), 0);

    this.startDate = new DatePipe('en-US').transform(start, 'yyyy-MM-dd');
    this.lastDate = new DatePipe('en-US').transform(last, 'yyyy-MM-dd');
  }

  changeDate(event) {
    console.log(event, typeof event);
  }
}
