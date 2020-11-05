import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadService } from './../upload.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;
  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    this.fileInfos = this.uploadService.getFile();
  }

  
  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;
    this.currentFile = this.selectedFiles.item[0];

    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type == HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        }
        else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFile();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file.';
        this.currentFile = undefined;
      }
    );

    this.selectedFiles = undefined;
  }
}
