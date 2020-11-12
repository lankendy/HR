import { TypeSalaryService } from './../../../services/typeSalary/typeSalary.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AbsenceTypeService } from './../../../services/absence-type/absence-type.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-che-do-ngay-lam-viec',
  templateUrl: './che-do-ngay-lam-viec.component.html',
  styleUrls: ['./che-do-ngay-lam-viec.component.scss']
})
export class CheDoNgayLamViecComponent implements OnInit {
  checkNghi = 0;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData = [];
  dsLoaiNgayNghi = [];
  dsCheDoLuongNgayNghi = [];

  dsLoaiNgayLam = [];

  dsCheDoLuongNgayLam = [];

  dsCheDoluong = [];

  modalNgayNghi: boolean;
  modalNgayLam: boolean;
  setOfCheckedId = new Set<number>();
  formModalNN: FormGroup;
  formModalNL: FormGroup;
  formModalCDLNN: FormGroup;
  formModalCDLNL: FormGroup;
  edit: boolean = false;

  isVisibleModalCDLNN: boolean;
  isVisibleModalCDLNL: boolean;
  constructor(
    private absenceTypeService: AbsenceTypeService,
    private message: NzMessageService,
    private fb: FormBuilder,
    private router: Router,
    private typeSalaryService: TypeSalaryService
  ) {
  }
  ngOnInit(): void {
    this.getAllDsLoaiNgayNghi();
    this.getAllNgayLam();
    this.initialFormModalNN();
    this.initialFormModalNL();
    this.initialFormModalCDLNL();
    this.initialFormModalCDLNN();
    this.getAllCDLuongNgayLam();
    this.getAllCDLuongNgayNghi();
  }

  // -- initial form -- //
  initialFormModalNN() {
    this.formModalNN = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      assign: [null, [Validators.required]],
      payment: [null, [Validators.required]],
      type: [1]
    });
  }

  initialFormModalNL() {
    this.formModalNL = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      assign: [null, [Validators.required]],
      payment: [null, [Validators.required]],
      type: [2]
    })
  }

  initialFormModalCDLNN() {
    this.formModalCDLNN = this.fb.group({
      name: [null, [Validators.required]],
      value: [null, [Validators.required]],
      type: [2]
    })
  }

  initialFormModalCDLNL() {
    this.formModalCDLNL = this.fb.group({
      name: [null, [Validators.required]],
      value: [null, [Validators.required]],
      type: [1]
    })
  }

  // -- call api -- //

  // -- get all loại ngày nghỉ -- //
  getAllDsLoaiNgayNghi() {
    this.absenceTypeService.getAllNgayNghi().subscribe(response => {
      if (response.code == 200) {
        this.dsLoaiNgayNghi = response.data;
      } else {
        this.message.error('Có lỗi xảy ra.');
      }
    })
  }

  // -- create ngày nghỉ -- //
  createNgayNghi() {
    this.absenceTypeService.addLoaiNgay(this.formModalNN.value).subscribe(response => {
      if (response.code == 200) {
        this.message.success('Thêm mới ngày nghỉ thành công.');
        this.getAllDsLoaiNgayNghi();
        this.backListNgayNghi();
        this.formModalNN.reset();
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // -- create ngày làm -- //
  createNgayLam() {
    for (const i in this.formModalNL.controls) {
      this.formModalNL.controls[i].markAsDirty();
      this.formModalNL.controls[i].updateValueAndValidity();
    }
    if (this.formModalNL.valid) {
      this.absenceTypeService.addLoaiNgay(this.formModalNL.value).subscribe(response => {
        if (response.code == 200) {
          this.message.success('Thêm mới ngày làm thành công.');
          this.getAllNgayLam();
          this.formModalNL.reset();
        }
        else {
          this.message.error('Đã có lỗi xảy ra. Chưa tạo được');
        }
      })
    }
  }


  // -- delete ngày nghỉ -- //
  deleteNgayNghi(id) {
    this.absenceTypeService.deleteLoaiNgay(id).subscribe(response => {
      if (response.code == 200) {
        this.message.success('Xóa thành công.');
        this.getAllDsLoaiNgayNghi();
        this.getAllNgayLam();
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // -- get all ngay làm -- //
  getAllNgayLam() {
    this.absenceTypeService.getAllNgayLam().subscribe(response => {
      if (response.code == 200) {
        this.dsLoaiNgayLam = response.data;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // -- edit loại ngày nghỉ -- //
  openModalNNToEdit(data) {
    this.openModalNgayNghi();
    this.formModalNN.patchValue(data);
    this.edit = true;
  }

  editNgayNghi() {
    this.absenceTypeService.editLoaiNgay(this.formModalNN.value).subscribe(res => {
      if (res.code == 200) {
        this.message.success('Chỉnh sửa thành công.');
        this.getAllDsLoaiNgayNghi();
        this.formModalNN.reset();
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // -- edit loại ngày làm -- //
  openModalNLToEdit(data) {
    this.openModalNgayLam();
    this.formModalNL.patchValue(data);
    this.edit = true;
  }

  editNgayLam() {
    this.absenceTypeService.editLoaiNgay(this.formModalNL.value).subscribe(res => {
      if (res.code == 200) {
        this.message.success('Chỉnh sửa thành công.');
        this.getAllNgayLam();
        this.formModalNL.reset();
      }
      else {
        this.message.error("Đã có lỗi xảy ra.");
      }
    })
  }


  // -- getAll danh sách chế độ lương theo ngày nghỉ -- //
  getAllCDLuongNgayNghi() {
    this.typeSalaryService.getAllCDLuongNgayNghi().subscribe(response => {
      if (response.code == 200) {
        this.dsCheDoLuongNgayNghi = response.data;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // -- get all danh sách chế độ lương theo ngày làm -- //
  getAllCDLuongNgayLam() {
    this.typeSalaryService.getAllCDLuongNgayLam().subscribe(response => {
      if (response.code == 200) {
        this.dsCheDoLuongNgayLam = response.data;
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

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

  handleCancelModalNgayNghi() {
    this.modalNgayNghi = false;
  }

  handleOkModalNgayNghi() {
    this.modalNgayNghi = false;
    if (this.edit) {
      this.editNgayNghi();
      this.edit = false;
    }
    else {
      this.createNgayNghi();
    }
  }

  openModalNgayNghi() {
    this.modalNgayNghi = true;
  }

  openModalNgayLam() {
    this.modalNgayLam = true;
  }

  handleCancelModalNgayLam() {
    this.modalNgayLam = false;
  }

  handleOkModalNgayLam() {
    this.modalNgayLam = false;
    if (this.edit) {
      this.editNgayLam();
      this.edit = false;
    } else {
      this.createNgayLam();
    }
  }

  // -- modal CDLNN -- //
  openModalCDLNN() {
    this.isVisibleModalCDLNN = true;
  }
  cancelModalCDLNN() {
    this.isVisibleModalCDLNN = false;
  }

  submitModalCDLNN() {
    if (this.formModalCDLNN.valid) {
      this.typeSalaryService.addCDLuong(this.formModalCDLNN.value).subscribe(res => {
        if (res.code == 200) {
          this.message.success('Thêm mới thành công.');
          this.getAllCDLuongNgayNghi();
          this.initialFormModalCDLNN();
          this.cancelModalCDLNN();
        }
        else {
          this.message.error(res.message);
        }
      })
    } else {
      this.message.error('Chưa điền đầy đủ thông tin.');
    }

  }

  deleteCDLNN(data) {
    this.typeSalaryService.deleteCDLuong(data.id).subscribe(response => {
      if (response.code == 200) {
        this.message.success('Xóa thành công.');
        this.getAllCDLuongNgayNghi();
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  // -- modal CDLNL --//
  openModalCDLNL() {
    this.isVisibleModalCDLNL = true;
  }
  cancelModalCDLNL() {
    this.isVisibleModalCDLNL = false;
  }

  submitFormCDLNL() {
    if (this.formModalCDLNL.valid) {
      this.typeSalaryService.addCDLuong(this.formModalCDLNL.value).subscribe(res => {
        if (res.code == 200) {
          this.message.success('Thêm mới thành công.');
          this.getAllCDLuongNgayLam();
          this.initialFormModalCDLNL();
          this.cancelModalCDLNL();
        }
        else {
          this.message.error(res.message);
        }
      })
    } else {
      this.message.success('Chưa điền đầy đủ thông tin.');
    }
  }

  deleteCDLNL(data) {
    this.typeSalaryService.deleteCDLuong(data.id).subscribe(response => {
      if (response.code == 200) {
        this.message.success('Xóa thành công.');
        this.getAllCDLuongNgayLam();
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    });
  }

  // navigate
  backListNgayNghi() {
    this.router.navigate(['danh-muc-khac/che-do-ngay-lam-viec']);
  }

}
