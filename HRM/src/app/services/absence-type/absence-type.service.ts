import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbsenceTypeService {

  constructor(private httpClient: HttpClient) { }

  getAllNgayNghi(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/absence/allNgayNghi');
  }

  addLoaiNgay(body: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/absence/addAbsence', body);
  }

  deleteLoaiNgay(id: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/absence/deleteAbsence', {id: id});
  }

  editLoaiNgay(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/absence/editAbsence', data);
  }
  // -- ngay di lam -- //
  getAllNgayLam(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/absence/allNgayLam');
  }
}
