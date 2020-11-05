import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllDocument(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/document/allDocument');
  }

  getDetailDocument(id: string): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/document/getInfoDocument?id=' + id);
  }

  createDocument(body: Object): Observable<any>{
    return this.httpClient.post('http://localhost:8000/api/app/document/addDocument', body);
  }

  editDocument(body: Object): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/document/editDocument', body);
  }

  deleteDocument(id: string): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/document/deleteDocument', {id: id});
  }

}
