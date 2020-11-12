import { HttpClient } from '@angular/common/http';
import { UploadService } from './../../../services/upload-file/upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  public formGroup: FormGroup;
  private fileName;
  images;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      file: [null, [Validators.required]]
    })
  }

  public onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);


      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        })
      }
    }
  }

  // public onSubmit() {
  //   this.uploadService.upload(this.fileName, this.formGroup.get('file').value)
  // }


  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  } 

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:8000/upload', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }




}
