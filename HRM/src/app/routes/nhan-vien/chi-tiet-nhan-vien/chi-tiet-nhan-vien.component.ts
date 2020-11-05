import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators } from '@angular/forms'
import { NhanVienService } from 'src/app/services/nhan-vien/nhan-vien.service';
import { PositionService } from 'src/app/services/position/position.service';
import { phoneValidator } from 'src/app/helper/phone.validators';
import { salaryValidator } from 'src/app/helper/salary.validators';

@Component({
  selector: 'app-chi-tiet-nhan-vien',
  templateUrl: './chi-tiet-nhan-vien.component.html',
  styleUrls: ['./chi-tiet-nhan-vien.component.scss']
})
export class ChiTietNhanVienComponent implements OnInit {
  editForm: FormGroup;
  id: string;
  // file
  isVisibleCV = false;
  isVisibleBH = false;
  isVisibleXV = false;
  gender: number;

  genders = [
    {name: 'Nam', value: 0},
    {name: 'Nữ', value: 1},
    {name: 'Khác', value: 2}
  ];

  dsChucVu = [];
  constructor(
    private router: Router,
    private  fb: FormBuilder,
    private route: ActivatedRoute,
    private nhanVienService: NhanVienService,
    private message: NzMessageService,
    private positionService: PositionService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.editForm = this.fb.group({
      id: [{value: null, disabled: true}, Validators.required],
      name: [null, Validators.required],
      position_id: [null, Validators.required],
      birthday: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.maxLength(13), phoneValidator('0973 996 209')]],
      address: [null],
      gender: [null],
      salary: [null, [Validators.required, salaryValidator('5,500,000')]]
    });
    this.getDetailUser();
    this.getAllChucVu();
  }

  // call api
  getDetailUser() {
    this.nhanVienService.getDetailUser(this.id).subscribe(res => {
      if (res.code == 200) {
        this.editForm.patchValue(res.data);
        console.log(res.data);
        console.log('editForm', this.editForm.value);
        this.gender = this.editForm.get('gender').value;
        this.editForm.disable();
      } else {
        this.message.error('Đã có lỗi xảy ra.');
      };
    })
  }

  // get all chức vụ
  getAllChucVu() {
    this.positionService.getAllPosition().subscribe(response => {
      if (response.code == 200) {
        this.dsChucVu = response.data;
      }
    })
  }

  // submit form
  onSubmitForm() {
    this.nhanVienService.editUser({id: this.id, ...this.editForm.value}).subscribe(response => {
      if (response.code == 200) {
        this.message.success('Chỉnh sửa thành công.');
        this.editForm.disable();
      }
      else {
        this.message.error('Đã có lỗi xảy ra');
      }
    });
  }

  // handle navigate
  backList() {
    this.router.navigate(['nhan-vien/danh-sach-nhan-vien'])
  }

  goToEdit() {
    this.editForm.enable();
  }

  // handle modal file
  showModalCV(): void {
    this.isVisibleCV = true;
  }
  handleCancelCV() {
    this.isVisibleCV = false;
  }
  handleOkCV() {
    this.isVisibleCV = false;
  }

  showModalBH() {
    this.isVisibleBH = true;
  }
  handleCanCelBH() {
    this.isVisibleBH = false;
  }
  handleOKBH() {
    this.isVisibleBH = false;
  }

  showModalXV() {
    this.isVisibleXV = true;
  }
  handleOKXV() {
    this.isVisibleXV = false;
  }
  handleCancelXV() {
    this.isVisibleXV = false;
  }


}
