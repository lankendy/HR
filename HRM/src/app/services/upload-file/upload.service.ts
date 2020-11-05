import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

const url = 'http://localhost:8000/upload'
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private  BASE_URL: string = "http://localhost:8000";
  constructor(private httpClient: HttpClient) { }
  
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST',`${this.BASE_URL}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });


    return this.httpClient.request(req);
  }

  getFile(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/files`);
  }
  

}
