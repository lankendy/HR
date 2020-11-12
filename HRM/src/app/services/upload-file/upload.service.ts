import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private fileList: string[] = new Array<string>();
  private fileList$: Subject<string[]> = new Subject<string[]>();
  constructor() { }

  public upload(fileName: string, fileContent: string) {
    this.fileList.push(fileName);
    this.fileList$.next(this.fileList);
  }

  public download(fileName: string): void {

  }

  remove(fileName): void {
    this.fileList.splice(this.fileList.findIndex(name => name === fileName), 1);
    this.fileList$.next(this.fileList);
  }

  public list(): Observable<string[]>{
    return this.fileList$;
  }

  private addFileToList(fileName: string): void {
    this.fileList.push(fileName);
    this.fileList$.next(this.fileList);
  }
}
