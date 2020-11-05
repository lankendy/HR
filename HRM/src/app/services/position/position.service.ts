import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllPosition(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/position/allPosition');
  }

  createAPosition(body: Object): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/position/addPosition', body);
  }

  getDetailPosition(id: any): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/app/position/getPositionInfo' + '?id=' + id);
  }

  deletePosition(id: number): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/position/deletePosition', id);
  }

  editPosition(body: Object): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/app/position//editPosition', body);
  }

}
