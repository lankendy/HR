import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document/document.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-chi-tiet-ho-so',
  templateUrl: './chi-tiet-ho-so.component.html',
  styleUrls: ['./chi-tiet-ho-so.component.scss']
})
export class ChiTietHoSoComponent implements OnInit {
  editForm: FormGroup;
  id: string;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.editForm = this.fb.group({
      user_id: [null, Validators.required],
      type: [null, Validators.required],
      file: [null, Validators.required],
      createdBy: [null, Validators.required]
    });
    this.getDetailDocument();
  }

  // call api
  getDetailDocument() {
    this.documentService.getDetailDocument(this.id).subscribe(response => {
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
      this.documentService.editDocument({...this.editForm.value, id: this.id}).subscribe(response => {
        if (response.code == 200) {
          this.getDetailDocument();
          this.message.success('Cập nhật hồ sơ thành công.');
        }
        else {
          this.message.error('Đã có lỗi xảy ra.');
        }
      });
    }
  }

  // handle navigate
  goToList() {
    this.router.navigate(['ho-so/danh-sach-ho-so']);
  }

  goToEdit() {
    this.editForm.enable();
  }

}
