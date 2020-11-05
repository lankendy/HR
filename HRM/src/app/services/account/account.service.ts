import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllAccount(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/account/allAccount');
  }

  getDetailAccount(id: string): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/account/getAccountInfo?id=' + id);
  }

  addAccount(body: Object): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/account/addAccount', body);
  }

  editAccount(body: Object): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/account/editAccount', body);
  }

  deleteAccount(id: number): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/account/deleteAccount', {id: id});
  }

}
