import { UploadService } from './../../../services/upload-file/upload.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  public fileList$: Observable<string[]> = this.uploadService.list();
  constructor(
    private uploadService: UploadService
  ) { }

  ngOnInit() {
  }

  public download(fileName: string): void {
    this.uploadService.download(fileName);
  }

  public remove(fileName: string): void {
    this.uploadService.remove(fileName);
  }

}
