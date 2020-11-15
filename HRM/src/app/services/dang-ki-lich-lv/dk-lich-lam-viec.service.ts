import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DkLichLamViecService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addLichLamViec(body: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/schedule/addSchedule', body);
  }

  getAllLich(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/schedule/allSchedule');
  }

  getAllLichNgayNghi(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/schedule/allSchedule1');
  }

  getAllLichNgayLam(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/schedule/allSchedule2');
  }

  deleteLichLamViec(id: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/schedule/deleteSchedule', {id: id})
  }

  updateStatus(id: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/schedule/updateStatus', {id: id});
  }

  refreshStatus(id: any): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/schedule/refreshStatus', {id: id});
  }

  searchAllNgayNghi(keyword: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8000/api/app/schedule/searchShedule1?keyword=${keyword}`);
  }

  searchAllNgayLam(keyword: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8000/api/app/schedule/searchShedule2?keyword=${keyword}`);
  }

}
