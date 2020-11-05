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
  listOfDisplayData = [
    {code: 'NV001', name: 'Đỗ Thị Lan', loai: 0, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 0},
    {code: 'NV002', name: 'Nguyễn Văn A', loai: 1, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 0},
    {code: 'NV003', name: 'Đỗ Thị B', loai: 2, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 0},
    {code: 'NV004', name: 'Đỗ Thị C', loai: 3, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 1},
    {code: 'NV005', name: 'Đỗ Thị Lan2', loai: 2, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 1},
    {code: 'NV006', name: 'Đỗ Thị Lan3', loai:1, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 0},
    {code: 'NV007', name: 'Đỗ Thị Lan4', loai: 6, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 1},
    {code: 'NV008', name: 'Đỗ Thị Lan5', loai: 7, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 0},
    {code: 'NV009', name: 'Đỗ Thị Lan6', loai: 1, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 1},
    {code: 'NV010', name: 'Đỗ Thị Lan7', loai: 1, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 1},
    {code: 'NV011', name: 'Đỗ Thị Lan8', loai: 3, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 0},
    {code: 'NV012', name: 'Đỗ Thị Lan9', loai: 2, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 1},
    {code: 'NV013', name: 'Đỗ Thị Lan66', loai: 5, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 0},
    {code: 'NV014', name: 'Đỗ Thị Lan55', loai: 9, ghiChu: 'test', ngayDangKi: '27/09/2020', status: 0}
  ];
  isVisibleModalDKLV = false;
  formModal: FormGroup;
  dsLoaiDangKi = [
    {code: 0, name: 'Làm thêm ngày thường'},
    {code: 1, name: 'Làm thêm ngày lễ'},
    {code: 2, name: 'Làm thêm ngày nghỉ'},
    {code: 3, name: 'Làm thêm giờ'},
    {code: 4, name: 'Nghỉ phép'},
    {code: 5, name: 'Nghỉ phép được phép của cấp trên'},
    {code: 6, name: 'Nghỉ lí do riêng'},
    {code: 7, name: 'Nghỉ thai sản'},
    {code: 8, name: 'Làm ốm'},
    {code: 9, name: 'Đổi ca làm - nghỉ'},
    {code: 10, name: 'Đổi ca làm - làm'},
    {code: 11, name: 'Nghỉ hỉ, hiếu'}
  ];

  tenNhanvien = '';
  listNhanVien = [];
  startDate: string;
  lastDate: string;
  constructor(
    private formBuilder: FormBuilder,
    private nhanVienService: NhanVienService,
    private message: NzMessageService
    ) { }

  ngOnInit() {
    this.initialFormModal();
    this.addNgayDangKi();
    this.getAllNhanVien();
    this.setDate();
  }

  initialFormModal() {
    this.formModal = this.formBuilder.group({
      idNhanVien: [null, [Validators.required]],
      loai: [null, [Validators.required]],
      ghichu: [null],
      ngaydangki: this.formBuilder.array([]),
      trangthai: [{value: 0, disabled: true}]
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

  handleOkModal() {
    this.isVisibleModalDKLV = false;
    let indexNhanvien = this.listNhanVien.findIndex(nv => nv.id == this.formModal.value.idNhanVien);

    let object = {
      code: String(this.formModal.value.idNhanVien),
      name: String(this.listNhanVien[indexNhanvien].name),
      loai: Number(this.formModal.value.loai),
      ghiChu: String(this.formModal.value.ghichu),
      ngayDangKi: String(this.formModal.value.ngaydangki.at(0)),
      status: 0
    }
    this.listOfDisplayData.push(object);
    console.log('asf', this.listOfDisplayData)
  }

  handleCancelModal() {
    this.isVisibleModalDKLV = false;
  }

  get tennhanvien() {
    return this.formModal.get('idNhanVien');
  }

  get loai() {
    return this.formModal.get('loai');
  }

  get ghichu() {
    return this.formModal.get('ghichu');
  }

  get ngaydangki() {
    return this.formModal.get('ngaydangki') as FormArray;
  }

  get trangthai() {
    return this.formModal.get('trangthai');
  }

  newNgayDangKi(): FormGroup {
    return this.formBuilder.group({
      ngayDangKi: [null, [Validators.required]],
      soNgay: [null, [Validators.required, Validators.maxLength(2), Validators.max(31)]]
    });
  }


  addNgayDangKi() {
    this.ngaydangki.push(this.newNgayDangKi());
  }

  removeNgayDangKi(i: number) {
    this.ngaydangki.removeAt(i);
  }

  // validator
  pheDuyetDangKi(index) {
    console.log(this.listOfDisplayData[index].status);
    if (this.listOfDisplayData[index].status == 0) {
      this.listOfDisplayData[index].status = 1;
    }
  }

  resetPheDuyet(i: number) {
    this.listOfDisplayData[i].status = 0;
  }

  deleteDangKi(data) {
    this.listOfDisplayData = this.listOfDisplayData.filter(nv => nv.name != data.name);
  }

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
