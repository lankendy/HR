import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(
    private http: HttpClient
  ) { }

  getAllBill(): Observable<any> {
    return this.http.get('http://localhost:8000/api/app/bill/allBill');
  }

  addBill(body: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/app/bill/addBill', body);
  }

  deleteBill(id: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/app/bill/deleteBill', {id: id});
  }

  getDetailBill(id: any): Observable<any> {
    return this.http.get(`http://localhost:8000/api/app/bill/getBillInfo?id=${id}`);
  }

  updateBill(body): Observable<any> {
    return this.http.post('http://localhost:8000/api/app/bill/editBill', body);
  }

  searchAll(body: any): Observable<any> {
    return this.http.get(`http://localhost:8000/api/app/bill/searchBill?keyword=${body}`);
  }

}
