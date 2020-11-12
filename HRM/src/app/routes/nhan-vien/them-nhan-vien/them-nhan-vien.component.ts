import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NhanVienService } from 'src/app/services/nhan-vien/nhan-vien.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { salaryValidator} from '../../../helper/salary.validators';
import { phoneValidator} from '../../../helper/phone.validators';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-them-nhan-vien',
  templateUrl: './them-nhan-vien.component.html',
  styleUrls: ['./them-nhan-vien.component.scss']
})
export class ThemNhanVienComponent implements OnInit {
  createForm: FormGroup;
  id: string;
  checkedTaoTKMD: boolean = false;
  // -- modal
  isVisible = false;
  isOkLoading = false;
  // -- end modal

  dsChucVu = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private nhanVienService: NhanVienService,
    private message: NzMessageService,
    private positionService: PositionService
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      name: [null, Validators.required],
      position_id: [null, Validators.required],
      birthday: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.maxLength(13), Validators.required, phoneValidator('0973 996 209')]],
      address: [null],
      salary: [null, [salaryValidator('5,500,000')]],
      gender: [null],
      createdBy: [null],
      createAccountAuto: [false]
    });
    this.getAllChucVu();
  }

  // call api 
  submitForm() {
    if (this.createForm.valid) {
      this.nhanVienService.createUser(this.createForm.value).subscribe(response => {
        if (response.code == 200) {
          this.message.success('Thêm mới nhân viên thành công.')
        }
      });
      this.backList();
    }
  }

  // get all chức vụ
  getAllChucVu() {
    this.positionService.getAllPosition().subscribe(response => {
      if (response.code == 200) {
        this.dsChucVu = response.data;
      }
    })
  }

  // handle navigate
  backList() {
    this.router.navigate(['dashboard/nhan-vien/danh-sach-nhan-vien'])
  }
  // --end handle navigate

  // handle modal
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  // --end handle modal

}
