import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-them-chuc-vu',
  templateUrl: './them-chuc-vu.component.html',
  styleUrls: ['./them-chuc-vu.component.scss']
})
export class ThemChucVuComponent implements OnInit {
  createForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private positionService: PositionService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      chucVuName: [null, Validators.required]
    });
  }

   // handle navigate
   goToList() {
    this.router.navigate(['chuc-vu/danh-sach-chuc-vu']);
  }

  submitForm() {
    if (this.createForm.valid) {
      this.positionService.createAPosition(this.createForm.value).subscribe(response => {
        if  (response.code == 200) {
          this.message.success('Thêm mới chức vụ thành công.');
          this.goToDetail(response.data.id);
        }
      })
    }
  }

  goToDetail(id: string) {
    this.router.navigate(['chuc-vu/chi-tiet-chuc-vu', {id: id}])
  }

}
