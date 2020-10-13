import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NhanVienService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUser(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/user/allUser');
  }

  createUser(body: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/user/addUser', body);
  }

  editUser(body: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/user/editUser', body);
  }

  deleteUser(id: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/user/deleteUser', {id: id});
  }

}
