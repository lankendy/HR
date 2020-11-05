import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-chi-tiet-chuc-vu',
  templateUrl: './chi-tiet-chuc-vu.component.html',
  styleUrls: ['./chi-tiet-chuc-vu.component.scss']
})
export class ChiTietChucVuComponent implements OnInit {
  editForm: FormGroup;
  id: string;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private message: NzMessageService,
    private positionService: PositionService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.editForm = this.fb.group({
      name: [null, Validators.required],
    });
    this.getDetailPosition();
  }

  // call api
  getDetailPosition() {
    this.positionService.getDetailPosition(this.id).subscribe(response => {
      if (response.code == 200) {
        this.editForm.patchValue(response.data);
        this.editForm.disable();
      }
      else {
        this.message.error('Đã có lỗi xảy ra.');
      }
    })
  }

  submitForm() {
    if (this.editForm.valid) {
      this.positionService.editPosition({...this.editForm.value, id: this.id}).subscribe(response => {
        if (response.code == 200) {
          this.getDetailPosition();
          this.message.success('Cập nhật chức vụ thành công.');
        }
        else {
          this.message.error('Đã có lỗi xảy ra.');
        }
      });
    }
  }

  // handle navigate
  goToList() {
    this.router.navigate(['chuc-vu/danh-sach-chuc-vu']);
  }

  goToEdit() {
    this.editForm.enable();
  }

}
