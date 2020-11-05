import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeSalaryService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllCheDoLuong(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/typesalary/allTypeSalary');
  }

  getAllCDLuongNgayNghi(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/typesalary/allTypeSalaryLoaiNgayNghi');
  }

  getAllCDLuongNgayLam(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/typesalary/allTypeSalaryLoaiNgayLam');
  }

  addCDLuong(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/typesalary/addTypeSalary', data);
  }

  deleteCDLuong(id: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/typesalary/deleteTypeSalary', {id: id});
  }


}
